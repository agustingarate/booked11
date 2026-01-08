import { create } from 'zustand';

/**
 * Estado global de la aplicación.
 *
 * Este store puede ser usado para estado compartido entre features
 * que no pertenece a ninguna feature específica.
 */
interface GlobalState {
  /**
   * Indica si la aplicación está inicializada.
   */
  isInitialized: boolean;
  /**
   * Versión de la aplicación.
   */
  appVersion: string | null;
}

/**
 * Acciones del store global.
 */
interface GlobalActions {
  /**
   * Marca la aplicación como inicializada.
   *
   * @param value - Valor de inicialización.
   */
  setInitialized: (value: boolean) => void;
  /**
   * Establece la versión de la aplicación.
   *
   * @param version - Versión de la app.
   */
  setAppVersion: (version: string) => void;
}

/**
 * Store global de la aplicación usando Zustand.
 *
 * Este store es accesible desde cualquier parte de la aplicación.
 */
export const useGlobalStore = create<GlobalState & GlobalActions>((set) => ({
  // Estado inicial
  isInitialized: false,
  appVersion: null,

  // Acciones
  setInitialized: (value) => set({ isInitialized: value }),
  setAppVersion: (version) => set({ appVersion: version }),
}));
