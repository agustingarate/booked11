import type {
  PdfListParams,
  PdfListResponse,
} from '../../data/models/PdfModel';
import type PdfRepository from '../repository/PdfRepository';

/**
 * Use case para listar los PDFs de un usuario con paginación.
 */
class ListPdfsUseCase {
  private pdfRepository: PdfRepository;

  constructor(pdfRepository: PdfRepository) {
    this.pdfRepository = pdfRepository;
  }

  execute(userId: string, params?: PdfListParams): Promise<PdfListResponse> {
    if (!userId) {
      throw new Error('pdf-list-missing-user-id');
    }

    return this.pdfRepository.listPdfs(userId, params);
  }
}

export { ListPdfsUseCase };
