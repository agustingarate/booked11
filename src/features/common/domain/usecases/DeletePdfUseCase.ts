import type { DeletePdfResponse } from '../../data/models/PdfResponse';
import type PdfRepository from '../repository/PdfRepository';

/**
 * Use case para eliminar un PDF.
 */
class DeletePdfUseCase {
  private pdfRepository: PdfRepository;

  constructor(pdfRepository: PdfRepository) {
    this.pdfRepository = pdfRepository;
  }

  execute(userId: string, pdfId: string): Promise<DeletePdfResponse> {
    if (!userId) {
      throw new Error('pdf-delete-missing-user-id');
    }

    if (!pdfId) {
      throw new Error('pdf-delete-missing-pdf-id');
    }

    return this.pdfRepository.deletePdf(userId, pdfId);
  }
}

export { DeletePdfUseCase };
