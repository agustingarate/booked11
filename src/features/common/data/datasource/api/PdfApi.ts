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

/**
 * Interface para las operaciones de la API de PDFs.
 */
interface PdfApi {
  /**
   * Sube un archivo PDF a Firebase Storage y crea el registro en Firestore.
   *
   * @param userId - ID del usuario propietario.
   * @param dto - Datos del PDF a subir.
   * @returns Respuesta con el PDF creado.
   */
  uploadPdf(userId: string, dto: CreatePdfDto): Promise<UploadPdfResponse>;

  /**
   * Obtiene la lista de PDFs de un usuario con paginación.
   *
   * @param userId - ID del usuario.
   * @param params - Parámetros de paginación.
   * @returns Lista paginada de PDFs.
   */
  listPdfs(userId: string, params?: PdfListParams): Promise<PdfListResponse>;

  /**
   * Obtiene un PDF específico por su ID.
   *
   * @param userId - ID del usuario propietario.
   * @param pdfId - ID del PDF.
   * @returns El PDF solicitado.
   */
  getPdf(userId: string, pdfId: string): Promise<PdfModel>;

  /**
   * Actualiza el progreso de lectura de un PDF.
   *
   * @param userId - ID del usuario propietario.
   * @param dto - Datos de actualización del progreso.
   * @returns Respuesta de actualización.
   */
  updateProgress(
    userId: string,
    dto: UpdatePdfProgressDto
  ): Promise<UpdateProgressResponse>;

  /**
   * Elimina un PDF de Firebase Storage y Firestore.
   *
   * @param userId - ID del usuario propietario.
   * @param pdfId - ID del PDF a eliminar.
   * @returns Respuesta de eliminación.
   */
  deletePdf(userId: string, pdfId: string): Promise<DeletePdfResponse>;
}

export type { PdfApi };
