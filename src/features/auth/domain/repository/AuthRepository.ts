import type { LoginResponse } from '../../data/models/LoginResponse';

interface AuthRepository {
  login(email: string, password: string): Promise<LoginResponse>;
}

export default AuthRepository;
