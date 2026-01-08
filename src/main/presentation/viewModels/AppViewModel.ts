import { useCallback } from 'react';
import { Platform } from 'react-native';

import { useInjection } from '@common/domain/hooks/Resolver';
import { $ } from '@main/domain/di/Types';
import type { SetExpoPushTokenUseCase } from '@main/domain/di/useCases/SetExpoPushTokenUseCase';
import { debug } from '@main/utils/logger';

interface AppViewModel {
  initializeNotifications: (token: string) => Promise<void>;
}

const useAppViewModel = (): AppViewModel => {
  const setExpoPushTokenUseCase: SetExpoPushTokenUseCase = useInjection(
    $.SetExpoPushTokenUseCase
  );

  const initializeNotifications = useCallback(
    async (token: string): Promise<void> => {
      try {
        if (!token || token.trim() === '') {
          throw new Error('Token de push notification vacío');
        }
        await setExpoPushTokenUseCase.execute(token, Platform.OS.toUpperCase());
      } catch (error) {
        debug('[AppViewModel] ❌ Error enviando token:', error);
      }
    },
    [setExpoPushTokenUseCase]
  );

  return { initializeNotifications };
};

export { useAppViewModel };
