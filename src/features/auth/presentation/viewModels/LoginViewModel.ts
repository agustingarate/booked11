import { useEffect, useState } from 'react';

import type { LoginResponse } from '../../data/models/LoginResponse';
import { useLoginMutation } from '../hooks/useLoginMutation';

/**
 * Represents the view model for the login feature.
 *
 * @notExported
 */
interface LoginViewModel {
  /**
   * The email address in the view model's state.
   */
  email: string;
  /**
   * The password in the view model's state.
   */
  password: string;
  /**
   * Indicates whether the login process is in progress.
   */
  isLoading: boolean;
  /**
   * The error message, if any, from the login process.
   */
  error: string | null;
  /**
   * Triggers the login process.
   */
  login: () => Promise<void>;
  /**
   * Sets the email address in the view model's state.
   *
   * @param email The email address to set.
   */
  setEmail: (email: string) => void;
  /**
   * Sets the password in the view model's state.
   *
   * @param password The password to set.
   */
  setPassword: (password: string) => void;
  /**
   * Callback function called when login is successful.
   *
   * @param data The login response data.
   */
  onLoginSuccess?: (data: LoginResponse) => void;
}

/**
 * Creates a LoginViewModel that handles user login functionality using React Query.
 *
 * The LoginViewModel provides the following properties:
 * - email: The current email address in the form.
 * - password: The current password in the form.
 * - isLoading: Whether the login mutation is in progress.
 * - error: Any error message from the login attempt.
 * - login: A function that triggers the login mutation.
 * - setEmail: A function that sets the email field.
 * - setPassword: A function that sets the password field.
 * - onLoginSuccess: Optional callback for successful login.
 *
 * @param {Object} options - Configuration options.
 * @param {(data: LoginResponse) => void} options.onSuccess - Callback function called on successful login.
 * @return {LoginViewModel} The LoginViewModel instance.
 */
const useLoginViewModel = (options?: {
  onSuccess?: (data: LoginResponse) => void;
}): LoginViewModel => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const loginMutation = useLoginMutation();

  /**
   * Handles successful login by calling the onSuccess callback if provided.
   */
  useEffect(() => {
    if (loginMutation.isSuccess) {
      options?.onSuccess?.(loginMutation.data);
    }
  }, [loginMutation.isSuccess, loginMutation.data, options]);

  /**
   * Logs in the user using the email and password from the state.
   * The mutation is handled by React Query through the useLoginMutation hook.
   */
  const login = async (): Promise<void> => {
    await loginMutation.mutateAsync({ email, password });
  };

  return {
    email,
    password,
    isLoading: loginMutation.isPending,
    error: loginMutation.error?.message ?? null,
    login,
    setEmail,
    setPassword,
    onLoginSuccess: options?.onSuccess,
  };
};

export { useLoginViewModel };
