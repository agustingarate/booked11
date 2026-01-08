import type { AuthApi } from '../../data/datasource/api/AuthApi';
import { AuthApiImpl } from '../../data/datasource/api/AuthApi';
import { AuthRepositoryImpl } from '../../data/repository/AuthRepository';
import type AuthRepository from '../repository/AuthRepository';
import { LoginUseCase } from '../usecases/LoginUseCase';

import { $ } from './Types';

import type { Resolver } from '@common/domain/interfaces/Resolver';

/**
 * Registers the authentication dependencies with the resolver.
 *
 * @param {Resolver} resolver - The dependency injection resolver.
 */
const AuthRegister = (resolver: Resolver): void => {
  resolver.registerSingleton<AuthApi>(
    $.AuthApi,
    new AuthApiImpl(resolver.resolve($.HttpClient))
  );

  resolver.registerSingleton<AuthRepository>(
    $.AuthRepository,
    new AuthRepositoryImpl(resolver.resolve($.AuthApi))
  );

  resolver.registerFactory<LoginUseCase>(
    $.LoginUseCase,
    () => new LoginUseCase(resolver.resolve($.AuthRepository))
  );
};

export { AuthRegister };
