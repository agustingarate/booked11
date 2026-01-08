import { createContext, useContext, useMemo } from 'react';

import type { Resolver, Token } from '@common/domain/interfaces/Resolver';

interface ContextProps {
  resolver: Resolver | null;
}

const ResolverContext = createContext<ContextProps>({
  resolver: null,
});

/**
 * Props for the Provider component.
 *
 * @property {Resolver} resolver - The resolver instance.
 * @property {JSX.Element} children - The child elements.
 * @notExported
 */
interface ProviderProps {
  resolver: Resolver;
  children: React.ReactNode;
}

/**
 * The ResolverProvider component wraps a child component tree with a context provider
 * that provides the dependency injection resolver to all descendant components.
 *
 * @param {Resolver} resolver - The dependency injection resolver instance.
 * @param {JSX.Element} children - The child component tree.
 *
 * @returns {JSX.Element} The wrapped child component tree.
 */
const ResolverProvider: React.FC<ProviderProps> = ({ resolver, children }) => {
  return (
    <ResolverContext.Provider value={{ resolver }}>
      {children}
    </ResolverContext.Provider>
  );
};

/**
 * The useInjection hook returns a value resolved from the dependency injection
 * resolver associated with the nearest ResolverProvider ancestor.
 *
 * @param {Token<T>} identifier - The token to resolve.
 *
 * @returns {T} The resolved value.
 *
 * @throws {Error} If the hook is used outside of a ResolverProvider.
 */
function useInjection<T>(identifier: Token<T>): T {
  const { resolver } = useContext(ResolverContext);
  if (resolver === null) {
    throw new Error(`useInjection must be used within a ResolverProvider`);
  }

  // Usar useMemo para memoizar el resultado y evitar recreaciones
  return useMemo(() => resolver.resolve(identifier), [resolver, identifier]);
}

export { ResolverProvider, useInjection };
