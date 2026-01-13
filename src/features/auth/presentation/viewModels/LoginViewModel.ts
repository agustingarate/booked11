import type { AuthRequest } from 'expo-auth-session/build/AuthRequest';
import { useEffect } from 'react';

import type { LoginResponse } from '../../data/models/LoginResponse';
import { useGoogleSignIn } from '../hooks/useGoogleSignIn';
import { useLoginMutation } from '../hooks/useLoginMutation';

interface LoginViewModel {
  isLoading: boolean;
  error: string | null;
  googleSignIn: () => Promise<void>;

  googleRequest: AuthRequest | null;
  onLoginSuccess?: (data: LoginResponse) => void;
}

const useLoginViewModel = (options?: {
  onSuccess?: (data: LoginResponse) => void;
}): LoginViewModel => {
  const loginMutation = useLoginMutation();

  const googleSignIn = useGoogleSignIn();

  useEffect(() => {
    if (loginMutation.isSuccess) {
      options?.onSuccess?.(loginMutation.data);
    }
  }, [loginMutation.isSuccess, loginMutation.data, options]);

  useEffect(() => {
    if (googleSignIn.data) {
      options?.onSuccess?.(googleSignIn.data);
    }
  }, [googleSignIn.data, options]);

  // const login = async (): Promise<void> => {
  //   await loginMutation.mutateAsync({ email, password });
  // };

  return {
    isLoading: loginMutation.isPending || googleSignIn.isLoading,

    error: loginMutation.error?.message ?? googleSignIn.error ?? null,
    googleSignIn: googleSignIn.signIn,
    googleRequest: googleSignIn.request,
    onLoginSuccess: options?.onSuccess,
  };
};

export { useLoginViewModel };
