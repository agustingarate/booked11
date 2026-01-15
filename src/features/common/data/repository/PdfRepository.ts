import type PdfRepository from '../../domain/repository/PdfRepository';
import type { PdfApi } from '../datasource/api/PdfApi';
import type {
  CreatePdfDto,
  PdfListParams,
  PdfListResponse,
  PdfModel,
  UpdatePdfProgressDto,
} from '../models/PdfModel';
import type {
  DeletePdfResponse,
  UpdateProgressResponse,
  UploadPdfResponse,
} from '../models/PdfResponse';


class PdfRepositoryImpl implements PdfRepository {
  private readonly api: PdfApi;

  constructor(api: PdfApi) {
    this.api = api;
  }

  uploadPdf(userId: string, dto: CreatePdfDto): Promise<UploadPdfResponse> {
    return this.api.uploadPdf(userId, dto);
  }

  listPdfs(userId: string, params?: PdfListParams): Promise<PdfListResponse> {
    return this.api.listPdfs(userId, params);
  }

  getPdf(userId: string, pdfId: string): Promise<PdfModel> {
    return this.api.getPdf(userId, pdfId);
  }

  updateProgress(
    userId: string,
    dto: UpdatePdfProgressDto
  ): Promise<UpdateProgressResponse> {
    return this.api.updateProgress(userId, dto);
  }

  deletePdf(userId: string, pdfId: string): Promise<DeletePdfResponse> {
    return this.api.deletePdf(userId, pdfId);
  }
}

export { PdfRepositoryImpl };
