import type { PdfModel } from '../../data/models/PdfModel';
import type PdfRepository from '../repository/PdfRepository';

/**
 * Use case para obtener un PDF específico.
 */
class GetPdfUseCase {
  private pdfRepository: PdfRepository;

  constructor(pdfRepository: PdfRepository) {
    this.pdfRepository = pdfRepository;
  }

  execute(userId: string, pdfId: string): Promise<PdfModel> {
    if (!userId) {
      throw new Error('pdf-get-missing-user-id');
    }

    if (!pdfId) {
      throw new Error('pdf-get-missing-pdf-id');
    }

    return this.pdfRepository.getPdf(userId, pdfId);
  }
}

export { GetPdfUseCase };
