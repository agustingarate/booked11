import { $ as Types } from "~/features/common/domain/di/Types";

const $ = {
  ...Types,
  SettingsApi: Symbol.for("SettingsApi"),
  SettingsRepository: Symbol.for("SettingsRepository"),
  SetExpoPushTokenUseCase: Symbol.for("SetExpoPushTokenUseCase"),
};

export { $ };
