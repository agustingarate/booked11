import { createResolver } from '@common/data/di/Resolver';
import { CommonRegister } from '@common/domain/di/Register';
import { $ as Types } from '@common/domain/di/Types';
import type { Resolver } from '@common/domain/interfaces/Resolver';
import { AuthRegister } from '@features/auth/domain/di/Register';

// Create the resolver.
const resolver = createResolver();

/**
 * Registers all dependencies in the application.
 *
 * @return {void} This function does not return anything.
 */
const registerDependencies = (): void => {
  AppRegister(resolver);
  CommonRegister(resolver);
  AuthRegister(resolver);
};

/**
 * Registers the application's dependencies.
 *
 * The application's dependencies are:
 * * $.BaseURL: The base URL to use for all API requests.
 *
 * @param {Resolver} resolver - The resolver to register the dependencies with.
 *
 * @return {void} This function does not return anything.
 * @notExported
 */
const AppRegister = (_resolver: Resolver): void => {
  // resolver.registerSingleton(Types.BaseURL, "https://reqres.in/api"); //TODO: PROD
  _resolver.registerSingleton(
    Types.BaseURL,
    // "https://api.sanlorenzo.ecloud.dev",
    // getEnvConfig.apiUrl
    'https://...' //todo: change for env variable
  ); //TODO: DEV
  _resolver.registerSingleton(Types.S3BaseURL, ''); //TODO: DEV
};

export { registerDependencies, resolver };
