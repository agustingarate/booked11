import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { universalStorage } from '@common/utils/storage';
import type { LoginResponse } from '@features/auth/data/models/LoginResponse';

/**
 * Estado del store de autenticación.
 */
interface AuthState {
  /**
   * Token de autenticación.
   */
  token: string | null;
  /**
   * Token de refresco.
   */
  refreshToken: string | null;
  /**
   * Información del usuario autenticado.
   */
  user: LoginResponse['user'] | null;
  /**
   * Indica si el usuario está autenticado.
   */
  isAuthenticated: boolean;
}

/**
 * Acciones del store de autenticación.
 */
interface AuthActions {
  /**
   * Establece los datos de autenticación después del login.
   *
   * @param data - Datos de respuesta del login.
   */
  setAuthData: (data: LoginResponse) => void;
  /**
   * Limpia los datos de autenticación (logout).
   */
  clearAuthData: () => void;
  /**
   * Actualiza el token de autenticación.
   *
   * @param token - Nuevo token.
   */
  setToken: (token: string) => void;
}

/**
 * Store de autenticación usando Zustand con persistencia.
 *
 * Este store maneja:
 * - Token de autenticación
 * - Token de refresco
 * - Información del usuario
 * - Estado de autenticación
 *
 * Los datos se persisten en AsyncStorage para mantener la sesión entre reinicios.
 */
export const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    (set) => ({
      // Estado inicial
      token: null,
      refreshToken: null,
      user: null,
      isAuthenticated: false,

      // Acciones
      setAuthData: (data) =>
        set({
          token: data.token ?? null,
          refreshToken: data.refreshToken ?? null,
          user: data.user ?? null,
          isAuthenticated: !!data.token,
        }),

      clearAuthData: () =>
        set({
          token: null,
          refreshToken: null,
          user: null,
          isAuthenticated: false,
        }),

      setToken: (token) =>
        set({
          token,
          isAuthenticated: !!token,
        }),
    }),
    {
      name: 'auth-storage', // Clave de almacenamiento
      storage: createJSONStorage(() => universalStorage),
      // Solo persistir estos campos
      partialize: (state) => ({
        token: state.token,
        refreshToken: state.refreshToken,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
