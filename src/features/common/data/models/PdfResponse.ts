import type { PdfModel } from './PdfModel';

/**
 * Respuesta al subir un PDF.
 */
export interface UploadPdfResponse {
  pdf: PdfModel;
  success: boolean;
  message?: string;
}

/**
 * Respuesta al actualizar el progreso de un PDF.
 */
export interface UpdateProgressResponse {
  success: boolean;
  pdf?: PdfModel;
  message?: string;
}

/**
 * Respuesta al eliminar un PDF.
 */
export interface DeletePdfResponse {
  success: boolean;
  message?: string;
}
