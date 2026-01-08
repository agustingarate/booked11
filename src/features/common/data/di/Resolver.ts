import { Container } from 'inversify';

import type { Resolver, Token } from '@common/domain/interfaces/Resolver';

/**
 * The ResolverImpl class is a dependency injection resolver that
 * manages the registration and resolution of values for given tokens.
 *
 * @notExported
 */
class ResolverImpl implements Resolver {
  container = new Container();

  registerSingleton<T>(token: Token<T>, value: T): void {
    if (this.container.isBound(token)) {
      void this.container.unbind(token);
    }
    this.container.bind<T>(token).toConstantValue(value);
  }

  registerFactory<T>(token: Token<T>, func: () => T): void {
    if (this.container.isBound(token)) {
      void this.container.unbind(token);
    }
    this.container.bind<T>(token).toDynamicValue(func);
  }

  resolve<T>(indetifier: Token<T>): T {
    return this.container.get(indetifier);
  }
}

const createResolver = (): Resolver => {
  return new ResolverImpl();
};

export { createResolver };
