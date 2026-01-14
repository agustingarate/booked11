import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import type { StateStorage } from 'zustand/middleware';

/**
 * Adaptador de storage que funciona tanto en web como en mobile.
 *
 * - En web: usa localStorage del navegador
 * - En mobile: usa AsyncStorage de React Native
 *
 * Este adaptador es compatible con la interfaz StateStorage de Zustand,
 * permitiendo usar el mismo código para persistencia en todas las plataformas.
 */
class UniversalStorage implements StateStorage {
  private storage: StateStorage;

  constructor() {
    if (Platform.OS === 'web') {
      // En web, usar localStorage
      this.storage = {
        getItem: (key: string) => {
          try {
            return localStorage.getItem(key);
          } catch {
            return null;
          }
        },
        setItem: (key: string, value: string) => {
          try {
            localStorage.setItem(key, value);
          } catch {}
        },
        removeItem: (key: string) => {
          try {
            localStorage.removeItem(key);
          } catch {}
        },
      };
    } else {
      this.storage = AsyncStorage;
    }
  }

  async getItem(key: string): Promise<string | null> {
    try {
      const value = await this.storage.getItem(key);
      return value;
    } catch {
      return null;
    }
  }

  async setItem(key: string, value: string): Promise<void> {
    try {
      await this.storage.setItem(key, value);
    } catch {}
  }

  async removeItem(key: string): Promise<void> {
    try {
      await this.storage.removeItem(key);
    } catch {}
  }
}

/**
 * Instancia única del storage universal.
 * Usar esta instancia en los stores de Zustand con persistencia.
 */
export const universalStorage = new UniversalStorage();
