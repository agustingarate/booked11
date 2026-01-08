import { useMutation } from '@tanstack/react-query';

import type { LoginResponse } from '../../data/models/LoginResponse';
import { $ } from '../../domain/di/Types';

import { useInjection } from '@common/domain/hooks/Resolver';
import type { LoginUseCase } from '@features/auth/domain/usecases/LoginUseCase';

/**
 * Parameters for the login mutation.
 *
 * @property {string} email - The user's email address.
 * @property {string} password - The user's password.
 */
export interface LoginParams {
  email: string;
  password: string;
}

/**
 * Custom hook that provides a login mutation using React Query.
 *
 * This hook uses the AuthRepository to perform the login operation and manages
 * the mutation state (loading, error, success) through React Query.
 *
 * @returns {UseMutationResult<LoginResponse, Error, LoginParams>} The mutation result object.
 */
export const useLoginMutation = () => {
  const loginUseCase = useInjection<LoginUseCase>($.LoginUseCase);

  return useMutation<LoginResponse, Error, LoginParams>({
    mutationFn: (params) => loginUseCase.execute(params.email, params.password),
  });
};
