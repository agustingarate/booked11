import type { LoginResponse } from '../../models/LoginResponse';

import type { HttpClient } from '@common/domain/interfaces/HttpClient';

interface AuthApi {
  login(email: string, password: string): Promise<LoginResponse>;
}

class AuthApiImpl implements AuthApi {
  private readonly httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  login(_email: string, _password: string): Promise<LoginResponse> {
    // const response = await this.httpClient.post<LoginResponse>(
    //   '/auth/users/login',
    //   {
    //     email,
    //     password,
    //   }
    // );

    // return response.data ?? {};
    return Promise.resolve({
      user: {
        id: 1,
        email: 'test@test.com',
        firstName: 'Test',
        lastName: 'Test',
      },
      token: 'test',
      refreshToken: 'test',
    });
  }
}

export { AuthApiImpl };
export type { AuthApi };
