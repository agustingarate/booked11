import Constants from 'expo-constants';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Linking, Platform } from 'react-native';

import { debug } from '@main/utils/logger';

export interface NotificationState {
  expoPushToken: string;
  notification: Notifications.Notification | undefined;
}

function handleRegistrationError(errorMessage: string) {
  debug('handleRegistrationError', errorMessage);
  throw new Error(errorMessage);
}

export async function registerForPushNotificationsAsync() {
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();

    let finalStatus = existingStatus;
    if (existingStatus !== Notifications.PermissionStatus.GRANTED) {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== Notifications.PermissionStatus.GRANTED) {
      debug('[Notifications] ❌ Permisos denegados');
      handleRegistrationError(
        'Permission not granted to get push token for push notification!'
      );
      return;
    }

    const projectId: string | undefined =
      (Constants.easConfig as { projectId?: string } | undefined)?.projectId ??
      (
        Constants.expoConfig as
          | { extra?: { eas?: { projectId?: string } } }
          | undefined
      )?.extra?.eas?.projectId;

    if (!projectId) {
      debug('[Notifications] ❌ Project ID no encontrado');
      handleRegistrationError('Project ID not found');
    }

    try {
      const { data: pushTokenString } =
        await Notifications.getExpoPushTokenAsync({
          projectId,
        });
      return pushTokenString;
    } catch (e: unknown) {
      debug('[Notifications] ❌ Error obteniendo token:', e);
      handleRegistrationError(`${e as string}`);
    }
  } else {
    debug('[Notifications] ❌ No es dispositivo físico');
    handleRegistrationError('Must use physical device for push notifications');
  }
}

export const setupNotifications = async (): Promise<string> => {
  try {
    const token = await registerForPushNotificationsAsync();
    return token ?? '';
  } catch (error: unknown) {
    debug('[setupNotifications] ❌ Error:', error);
    return `${error as string}`;
  }
};

export const handleDeepLink = async (url: string) => {
  await Linking.openURL(url);
};

export const setupNotificationListeners = (
  onNotificationReceived: (notification: Notifications.Notification) => void,
  onNotificationResponse: (response: Notifications.NotificationResponse) => void
) => {
  const notificationListener = Notifications.addNotificationReceivedListener(
    onNotificationReceived
  );

  const responseListener =
    Notifications.addNotificationResponseReceivedListener((response) => {
      const dataObject = response.notification.request.content.data;

      if (dataObject.deeplink) {
        void handleDeepLink(dataObject.deeplink as string);
      }
      onNotificationResponse(response);
    });

  return () => {
    notificationListener.remove();
    responseListener.remove();
  };
};
