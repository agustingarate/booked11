import type {
  DocumentSnapshot,
  QueryDocumentSnapshot,
} from 'firebase/firestore';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  Timestamp,
  updateDoc,
} from 'firebase/firestore';
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';

import * as firebaseConfig from '../../../../../../firebase_config_stg';
import type {
  CreatePdfDto,
  PdfListParams,
  PdfListResponse,
  PdfModel,
  UpdatePdfProgressDto,
} from '../../models/PdfModel';
import type {
  DeletePdfResponse,
  UpdateProgressResponse,
  UploadPdfResponse,
} from '../../models/PdfResponse';
import type { PdfApi } from '../api/PdfApi';

/**
 * Implementación de PdfApi usando Firebase Storage y Firestore.
 * Usa las instancias ya configuradas (con emuladores en desarrollo).
 */
class FirebasePdfApiImpl implements PdfApi {
  private readonly storage = firebaseConfig.storage;
  private readonly firestore = firebaseConfig.firestore;

  /**
   * Sube un archivo PDF a Firebase Storage y crea el registro en Firestore.
   */
  async uploadPdf(
    userId: string,
    dto: CreatePdfDto
  ): Promise<UploadPdfResponse> {
    try {
      // 1. Leer el archivo desde el URI
      const response = await fetch(dto.fileUri);
      const blob = await response.blob();

      // 2. Crear referencia en Storage con nombre único
      const timestamp = Date.now();
      const storageRef = ref(
        this.storage,
        `users/${userId}/pdfs/${timestamp}_${dto.fileName}`
      );

      // 3. Subir archivo a Storage
      const uploadTask = uploadBytesResumable(storageRef, blob);

      // Esperar a que se complete la subida
      await new Promise((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          null,
          (error) => reject(error),
          () => resolve(undefined)
        );
      });

      // 4. Obtener URL de descarga
      const downloadURL = await getDownloadURL(storageRef);

      // 5. Crear documento en Firestore
      const now = Timestamp.now();
      const pdfData = {
        userId,
        fileName: dto.fileName,
        url: downloadURL,
        totalPages: dto.totalPages,
        currentPage: 0,
        progress: 0,
        fileSize: dto.fileSize,
        uploadedAt: now,
        updatedAt: now,
      };

      const docRef = await addDoc(
        collection(this.firestore, `users/${userId}/pdfs`),
        pdfData
      );

      const pdf: PdfModel = {
        id: docRef.id,
        userId,
        fileName: dto.fileName,
        url: downloadURL,
        totalPages: dto.totalPages,
        currentPage: 0,
        progress: 0,
        fileSize: dto.fileSize,
        uploadedAt: now.toDate(),
        updatedAt: now.toDate(),
      };

      return {
        success: true,
        pdf,
        message: 'PDF uploaded successfully',
      };
    } catch (error) {
      console.error('Error uploading PDF:', error);
      throw new Error(
        `Failed to upload PDF: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }
  }

  /**
   * Obtiene la lista de PDFs de un usuario con paginación.
   */
  async listPdfs(
    userId: string,
    params?: PdfListParams
  ): Promise<PdfListResponse> {
    try {
      const pageLimit = params?.limit ?? 10;
      const pdfsCollection = collection(this.firestore, `users/${userId}/pdfs`);

      // Construir query con paginación
      let q = query(
        pdfsCollection,
        orderBy('uploadedAt', 'desc'),
        limit(pageLimit + 1) // Obtenemos uno más para saber si hay más páginas
      );

      // Si hay un lastDoc, empezar después de él
      if (params?.lastDoc) {
        q = query(q, startAfter(params.lastDoc));
      }

      const querySnapshot = await getDocs(q);
      const docs = querySnapshot.docs;

      // Verificar si hay más documentos
      const hasMore = docs.length > pageLimit;
      const pdfDocs = hasMore ? docs.slice(0, pageLimit) : docs;

      // Mapear documentos a modelos
      const pdfs: PdfModel[] = pdfDocs.map(
        (docSnapshot: QueryDocumentSnapshot) => {
          const data = docSnapshot.data();
          return {
            id: docSnapshot.id,
            userId: data.userId,
            fileName: data.fileName,
            url: data.url,
            totalPages: data.totalPages,
            currentPage: data.currentPage ?? 0,
            progress: data.progress ?? 0,
            fileSize: data.fileSize,
            uploadedAt: data.uploadedAt.toDate(),
            updatedAt: data.updatedAt.toDate(),
          };
        }
      );

      return {
        pdfs,
        lastDoc: hasMore ? pdfDocs[pdfDocs.length - 1] : undefined,
        hasMore,
      };
    } catch (error) {
      console.error('Error listing PDFs:', error);
      throw new Error(
        `Failed to list PDFs: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }
  }

  /**
   * Obtiene un PDF específico por su ID.
   */
  async getPdf(userId: string, pdfId: string): Promise<PdfModel> {
    try {
      const docRef = doc(this.firestore, `users/${userId}/pdfs`, pdfId);
      const docSnap: DocumentSnapshot = await getDoc(docRef);

      if (!docSnap.exists()) {
        throw new Error('PDF not found');
      }

      const data = docSnap.data();
      return {
        id: docSnap.id,
        userId: data.userId,
        fileName: data.fileName,
        url: data.url,
        totalPages: data.totalPages,
        currentPage: data.currentPage ?? 0,
        progress: data.progress ?? 0,
        fileSize: data.fileSize,
        uploadedAt: data.uploadedAt.toDate(),
        updatedAt: data.updatedAt.toDate(),
      };
    } catch (error) {
      console.error('Error getting PDF:', error);
      throw new Error(
        `Failed to get PDF: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }
  }

  /**
   * Actualiza el progreso de lectura de un PDF.
   */
  async updateProgress(
    userId: string,
    dto: UpdatePdfProgressDto
  ): Promise<UpdateProgressResponse> {
    try {
      const docRef = doc(this.firestore, `users/${userId}/pdfs`, dto.pdfId);

      await updateDoc(docRef, {
        currentPage: dto.currentPage,
        progress: dto.progress,
        updatedAt: Timestamp.now(),
      });

      // Obtener el PDF actualizado
      const updatedPdf = await this.getPdf(userId, dto.pdfId);

      return {
        success: true,
        pdf: updatedPdf,
        message: 'Progress updated successfully',
      };
    } catch (error) {
      console.error('Error updating progress:', error);
      throw new Error(
        `Failed to update progress: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }
  }

  /**
   * Elimina un PDF de Firebase Storage y Firestore.
   */
  async deletePdf(userId: string, pdfId: string): Promise<DeletePdfResponse> {
    try {
      // 1. Obtener el PDF para tener la URL
      const pdf = await this.getPdf(userId, pdfId);

      // 2. Eliminar de Storage
      const storageRef = ref(this.storage, pdf.url);
      await deleteObject(storageRef);

      // 3. Eliminar de Firestore
      const docRef = doc(this.firestore, `users/${userId}/pdfs`, pdfId);
      await deleteDoc(docRef);

      return {
        success: true,
        message: 'PDF deleted successfully',
      };
    } catch (error) {
      console.error('Error deleting PDF:', error);
      throw new Error(
        `Failed to delete PDF: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }
  }
}

export { FirebasePdfApiImpl };
