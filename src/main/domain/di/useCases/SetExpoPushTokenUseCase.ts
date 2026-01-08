import type { SettingsRepository } from '@main/domain/di/repository/SettingsRepository';

class SetExpoPushTokenUseCase {
  private settingsRepository: SettingsRepository;

  constructor(settingsRepository: SettingsRepository) {
    this.settingsRepository = settingsRepository;
  }

  async execute(
    token: string,
    platform: string,
    metadata?: Record<string, string>
  ): Promise<void> {
    await this.settingsRepository.setExpoPushToken(token, platform, metadata);
  }
}

export { SetExpoPushTokenUseCase };
