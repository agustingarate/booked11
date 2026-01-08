import type { SettingsRepository } from '@main/domain/di/repository/SettingsRepository';

class GetAreasUseCase {
  private settingsRepository: SettingsRepository;

  constructor(settingsRepository: SettingsRepository) {
    this.settingsRepository = settingsRepository;
  }
}

export { GetAreasUseCase };
