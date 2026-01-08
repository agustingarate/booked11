import { $ as Types } from '@common/domain/di/Types';

const $ = {
  ...Types,
  AuthApi: Symbol.for('AuthApi'),
  AuthRepository: Symbol.for('AuthRepository'),
  LoginUseCase: Symbol.for('LoginUseCase'),
};

export { $ };
