import type AuthRepository from '../../domain/repository/AuthRepository';
import type { AuthApi } from '../datasource/api/AuthApi';
import type { LoginResponse } from '../models/LoginResponse';

class AuthRepositoryImpl implements AuthRepository {
  private readonly api: AuthApi;

  constructor(api: AuthApi) {
    this.api = api;
  }

  login(email: string, password: string): Promise<LoginResponse> {
    return this.api.login(email, password);
  }
}

export { AuthRepositoryImpl };
