import type { HttpClient } from '@common/domain/interfaces/HttpClient';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface SettingsApi {
  setExpoPushToken(
    token: string,
    platform: string,
    metadata?: Record<string, string>
  ): Promise<void>;
}

class SettingsApiImpl implements SettingsApi {
  private readonly httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async setExpoPushToken(
    token: string,
    platform: string,
    metadata?: Record<string, string>
  ): Promise<void> {
    const payload = { token, platform, metadata };
    await this.httpClient.post(`/notifications/token`, payload);
  }
}

export { SettingsApiImpl };
export type { SettingsApi };
