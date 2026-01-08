import type { SettingsApi } from '@main/domain/data/datasource/api/SettingsApi';
import { SettingsApiImpl } from '@main/domain/data/datasource/api/SettingsApi';
import { SettingsRepositoryImpl } from '@main/domain/data/repository/SettingsRepository';

import type { SettingsRepository } from '@main/domain/di/repository/SettingsRepository';
import { $ } from '@main/domain/di/Types';

import type { Resolver } from '@common/domain/interfaces/Resolver';

const SettingsRegister = (resolver: Resolver): void => {
  resolver.registerSingleton<SettingsApi>(
    $.SettingsApi,
    new SettingsApiImpl(resolver.resolve($.HttpClient))
  );
  resolver.registerSingleton<SettingsRepository>(
    $.SettingsRepository,
    new SettingsRepositoryImpl(resolver.resolve($.SettingsApi))
  );

  // resolver.registerSingleton<UsersRepository>(
  //   $.UsersRepository,
  //   new UsersRepositoryImpl(resolver.resolve($.UsersApi))
  // );
  // resolver.registerSingleton<SetExpoPushTokenUseCase>(
  //   $.SetExpoPushTokenUseCase,
  //   new SetExpoPushTokenUseCase(resolver.resolve($.SettingsRepository))
  // );
};

export { SettingsRegister };
