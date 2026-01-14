import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Platform } from 'react-native';

import { auth } from '../../../../../firebase_config_stg';

import type { LoginResponse } from '@features/auth/data/models/LoginResponse';

WebBrowser.maybeCompleteAuthSession();

// Ver WEB_SETUP.md para instrucciones
const WEB_CLIENT_ID =
  '702484602442-3gdtkqh43b2f6dv2tdnqb6d8f9mmcbml.apps.googleusercontent.com';

const IOS_CLIENT_ID =
  '702484602442-i8alo0o5fv9dtem02dhpio54s56mntoa.apps.googleusercontent.com';

export const useGoogleSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<LoginResponse | null>(null);

  // Configurar el request de Google OAuth

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
    Platform.OS === 'web'
      ? {
          clientId: WEB_CLIENT_ID,
          scopes: ['openid', 'profile', 'email'],
        }
      : {
          // Configuración para iOS/Android
          iosClientId: IOS_CLIENT_ID,
        }
  );

  useEffect(() => {
    if (!response) return;

    const handleResponse = async () => {
      setError(null);
      setData(null);

      // Caso 1: Éxito - usuario autenticó correctamente
      if (response.type === 'success') {
        setIsLoading(true);
        try {
          const idToken =
            response.authentication?.idToken ?? response.params.id_token;

          if (!idToken) {
            throw new Error('No se pudo obtener el ID token de Google');
          }

          // Autenticar con Firebase
          const credential = GoogleAuthProvider.credential(idToken);
          const userCredential = await signInWithCredential(auth, credential);
          const user = userCredential.user;

          // Guardar datos del usuario
          setData({
            user: {
              id: user.uid,
              email: user.email ?? undefined,
              firstName: user.displayName?.split(' ')[0] ?? undefined,
              lastName: user.displayName?.split(' ')[1] ?? undefined,
            },
            token: await user.getIdToken(),
            refreshToken: user.refreshToken,
          });
        } catch (err: unknown) {
          console.error('Error en Google Sign-In:', err);

          setError(
            `Error al iniciar sesión con Google: ${err instanceof Error ? err.message : 'Error desconocido'}`
          );
        } finally {
          setIsLoading(false);
        }
      } else if (response.type === 'error') {
        const errorCode = response.error?.code;
        const isCancellation = ['USER_CANCELLED', 'CANCEL'].includes(
          errorCode ?? ''
        );

        if (!isCancellation) {
          setError('Error al iniciar sesión con Google');
        }
      }
    };

    void handleResponse();
  }, [response]);

  const signIn = async () => {
    setError(null);
    setData(null);

    await promptAsync();
  };

  return {
    signIn,
    isLoading,
    error,
    data,
    request,
  };
};
