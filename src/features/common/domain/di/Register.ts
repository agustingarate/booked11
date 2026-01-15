import { FirebasePdfApiImpl } from '@common/data/datasource/firebase/FirebasePdfApi';
import { AxiosHttpClient } from '@common/data/http/HttpClient';
import { PdfRepositoryImpl } from '@common/data/repository/PdfRepository';
import type { PdfApi } from '@common/data/datasource/api/PdfApi';
import type PdfRepository from '@common/domain/repository/PdfRepository';
import type { HttpClient } from '@common/domain/interfaces/HttpClient';
import type { Resolver } from '@common/domain/interfaces/Resolver';
import { DeletePdfUseCase } from '@common/domain/usecases/DeletePdfUseCase';
import { GetPdfUseCase } from '@common/domain/usecases/GetPdfUseCase';
import { ListPdfsUseCase } from '@common/domain/usecases/ListPdfsUseCase';
import { UpdatePdfProgressUseCase } from '@common/domain/usecases/UpdatePdfProgressUseCase';
import { UploadPdfUseCase } from '@common/domain/usecases/UploadPdfUseCase';

import { $ } from '@common/domain/di/Types';
import { useAuthStore } from '@features/auth/domain/store/authStore';

/**
 * Registers the application's common dependencies.
 *
 * The common dependencies are:
 * * $.HttpClient: The HTTP client to use for all API requests.
 *
 * @param {Resolver} resolver - The resolver to register the dependencies with.
 *
 * @return {void} This function does not return anything.
 */
const CommonRegister = (resolver: Resolver): void => {
  resolver.registerSingleton<HttpClient>(
    $.HttpClient,
    new AxiosHttpClient(
      resolver.resolve($.BaseURL),
      // Obtiene el token del store de Zustand
      () => useAuthStore.getState().token
    )
  );

  // resolver.registerSingleton<S3FilesClient>(
  //   $.S3FilesClient,
  //   new AxiosS3FilesClient(resolver.resolve($.S3BaseURL))
  // );

  // resolver.registerSingleton<EventsApi>(
  //   $.EventsApi,
  //   new EventsApiImpl(resolver.resolve($.HttpClient))
  // );

  // resolver.registerSingleton<EventsRepository>(
  //   $.EventsRepository,
  //   new EventsRepositoryImpl(resolver.resolve($.EventsApi))
  // );

  // resolver.registerSingleton<ScheduleApi>(
  //   $.ScheduleApi,
  //   new ScheduleApiImpl(resolver.resolve($.HttpClient))
  // );

  // resolver.registerSingleton<ScheduleRepository>(
  //   $.ScheduleRepository,
  //   new ScheduleRepositoryImpl(resolver.resolve($.ScheduleApi))
  // );

  // resolver.registerSingleton<AreasApi>(
  //   $.AreasApi,
  //   new AreasApiImpl(resolver.resolve($.HttpClient))
  // );

  // resolver.registerSingleton<AreasRepository>(
  //   $.AreasRepository,
  //   new AreasRepositoryImpl(resolver.resolve($.AreasApi))
  // );

  // resolver.registerSingleton<UsersApi>(
  //   $.UsersApi,
  //   new UsersApiImpl(resolver.resolve($.HttpClient))
  // );

  // resolver.registerSingleton<UsersRepository>(
  //   $.UsersRepository,
  //   new UsersRepositoryImpl(resolver.resolve($.UsersApi))
  // );

  // resolver.registerSingleton<GetUserDataUseCase>(
  //   $.GetUserDataUseCase,
  //   new GetUserDataUseCase(resolver.resolve($.UsersRepository))
  // );

  // resolver.registerSingleton<ImagesApi>(
  //   $.ImagesApi,
  //   new ImagesApiImpl(
  //     resolver.resolve($.HttpClient),
  //     resolver.resolve($.S3FilesClient)
  //   )
  // );

  // resolver.registerSingleton<ImagesRepository>(
  //   $.ImagesRepository,
  //   new ImagesRepositoryImpl(resolver.resolve($.ImagesApi))
  // );

  // resolver.registerSingleton<UploadImageUseCase>(
  //   $.UploadImageUseCase,
  //   new UploadImageUseCase(resolver.resolve($.ImagesRepository))
  // );

  // resolver.registerSingleton<NotificationsApi>(
  //   $.CommonNotificationsApi,
  //   new NotificationsApiImpl(resolver.resolve($.HttpClient))
  // );

  // resolver.registerSingleton<NotificationsRepository>(
  //   $.CommonNotificationsRepository,
  //   new NotificationsRepositoryImpl(resolver.resolve($.CommonNotificationsApi))
  // );

  // resolver.registerSingleton<GetNumberOfUnreadNotificationsUseCase>(
  //   $.GetNumberOfUnreadNotificationsUseCase,
  //   new GetNumberOfUnreadNotificationsUseCase(
  //     resolver.resolve($.CommonNotificationsRepository)
  //   )
  // );

  // resolver.registerSingleton<CreditsApi>(
  //   $.CreditsApi,
  //   new CreditsApiImpl(resolver.resolve($.HttpClient))
  // );

  // resolver.registerSingleton<CreditsRepository>(
  //   $.CreditsRepository,
  //   new CreditsRepositoryImpl(resolver.resolve($.CreditsApi))
  // );
  // resolver.registerSingleton<GetBalanceUseCase>(
  //   $.GetBalanceUseCase,
  //   new GetBalanceUseCase(resolver.resolve($.CreditsRepository))
  // );

  // PDF Management
  resolver.registerSingleton<PdfApi>($.PdfApi, new FirebasePdfApiImpl());

  resolver.registerSingleton<PdfRepository>(
    $.PdfRepository,
    new PdfRepositoryImpl(resolver.resolve($.PdfApi))
  );

  resolver.registerFactory<UploadPdfUseCase>(
    $.UploadPdfUseCase,
    () => new UploadPdfUseCase(resolver.resolve($.PdfRepository))
  );

  resolver.registerFactory<ListPdfsUseCase>(
    $.ListPdfsUseCase,
    () => new ListPdfsUseCase(resolver.resolve($.PdfRepository))
  );

  resolver.registerFactory<GetPdfUseCase>(
    $.GetPdfUseCase,
    () => new GetPdfUseCase(resolver.resolve($.PdfRepository))
  );

  resolver.registerFactory<UpdatePdfProgressUseCase>(
    $.UpdatePdfProgressUseCase,
    () => new UpdatePdfProgressUseCase(resolver.resolve($.PdfRepository))
  );

  resolver.registerFactory<DeletePdfUseCase>(
    $.DeletePdfUseCase,
    () => new DeletePdfUseCase(resolver.resolve($.PdfRepository))
  );
};

export { CommonRegister };
