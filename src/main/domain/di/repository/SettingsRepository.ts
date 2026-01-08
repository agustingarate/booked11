interface SettingsRepository {
  getSettings(): Promise<Record<string, unknown>>;
  saveSettings(settings: Record<string, unknown>): Promise<void>;
  setExpoPushToken(
    token: string,
    platform: string,
    metadata?: Record<string, string>,
  ): Promise<void>;
}

export type { SettingsRepository };
