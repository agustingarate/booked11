import type { CreatePdfDto } from '../../data/models/PdfModel';
import type { UploadPdfResponse } from '../../data/models/PdfResponse';
import type PdfRepository from '../repository/PdfRepository';

class UploadPdfUseCase {
  private pdfRepository: PdfRepository;

  constructor(pdfRepository: PdfRepository) {
    this.pdfRepository = pdfRepository;
  }

  execute(userId: string, dto: CreatePdfDto): Promise<UploadPdfResponse> {
    return this.pdfRepository.uploadPdf(userId, dto);
  }
}

export { UploadPdfUseCase };
