import type { UpdatePdfProgressDto } from '../../data/models/PdfModel';
import type { UpdateProgressResponse } from '../../data/models/PdfResponse';
import type PdfRepository from '../repository/PdfRepository';

/**
 * Use case para actualizar el progreso de lectura de un PDF.
 */
class UpdatePdfProgressUseCase {
  private pdfRepository: PdfRepository;

  constructor(pdfRepository: PdfRepository) {
    this.pdfRepository = pdfRepository;
  }

  execute(
    userId: string,
    dto: UpdatePdfProgressDto
  ): Promise<UpdateProgressResponse> {
    // Validaciones
    if (!userId) {
      throw new Error('pdf-progress-missing-user-id');
    }

    if (!dto.pdfId) {
      throw new Error('pdf-progress-missing-pdf-id');
    }

    if (dto.currentPage < 0) {
      throw new Error('pdf-progress-invalid-page');
    }

    if (dto.progress < 0 || dto.progress > 100) {
      throw new Error('pdf-progress-invalid-value');
    }

    return this.pdfRepository.updateProgress(userId, dto);
  }
}

export { UpdatePdfProgressUseCase };
