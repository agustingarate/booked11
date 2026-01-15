import type { DocumentSnapshot } from 'firebase/firestore';

/**
 * Modelo de datos para un archivo PDF.
 */
export interface PdfModel {
  /**
   * ID único del documento PDF.
   */
  id: string;
  /**
   * ID del usuario propietario del PDF.
   */
  userId: string;
  /**
   * Nombre del archivo PDF.
   */
  fileName: string;
  /**
   * URL del archivo PDF en Firebase Storage.
   */
  url: string;
  /**
   * Número total de páginas del PDF.
   */
  totalPages: number;
  /**
   * Página actual en la que se encuentra el usuario.
   */
  currentPage: number;
  /**
   * Progreso de lectura del PDF (0-100).
   */
  progress: number;
  /**
   * Tamaño del archivo en bytes.
   */
  fileSize: number;
  /**
   * Fecha de subida del archivo.
   */
  uploadedAt: Date;
  /**
   * Fecha de última actualización.
   */
  updatedAt: Date;
}

/**
 * DTO para crear un nuevo PDF.
 */
export interface CreatePdfDto {
  fileName: string;
  totalPages: number;
  fileSize: number;
  fileUri: string;
}

/**
 * DTO para actualizar el progreso de lectura.
 */
export interface UpdatePdfProgressDto {
  pdfId: string;
  currentPage: number;
  progress: number;
}

/**
 * Respuesta paginada de PDFs.
 */
export interface PdfListResponse {
  pdfs: PdfModel[];
  lastDoc?: DocumentSnapshot; // DocumentSnapshot para la próxima página
  hasMore: boolean;
}

/**
 * Parámetros para la consulta paginada.
 */
export interface PdfListParams {
  limit?: number;
  lastDoc?: DocumentSnapshot; // DocumentSnapshot de la última consulta
}
