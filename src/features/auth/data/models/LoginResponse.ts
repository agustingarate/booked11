/**
 * Response model for login authentication.
 *
 * @property {string} token - The authentication token.
 * @property {string} refreshToken - The refresh token for token renewal.
 * @property {User} user - The authenticated user information.
 */
export interface LoginResponse {
  token?: string;
  refreshToken?: string;
  user?: {
    id?: number;
    email?: string;
    firstName?: string;
    lastName?: string;
  };
}
