import type { SettingsApi } from '@main/domain/data/datasource/api/SettingsApi';
import type { SettingsRepository } from '@main/domain/di/repository/SettingsRepository';

class SettingsRepositoryImpl implements SettingsRepository {
  private readonly api: SettingsApi;

  constructor(api: SettingsApi) {
    this.api = api;
  }

  getSettings(): Promise<Record<string, unknown>> {
    // TODO: Implement actual API call
    return Promise.resolve({});
  }

  saveSettings(settings: Record<string, unknown>): Promise<void> {
    // TODO: Implement actual API call
    console.log('Saving settings:', settings);
    return Promise.resolve();
  }

  async setExpoPushToken(
    token: string,
    platform: string,
    metadata?: Record<string, string>
  ): Promise<void> {
    await this.api.setExpoPushToken(token, platform, metadata);
  }
}

export { SettingsRepositoryImpl };
