/**
 * Exporta todos los stores globales y de features.
 *
 * Este archivo centraliza las exportaciones de los stores
 * para facilitar su importación desde cualquier parte de la aplicación.
 */
export { useGlobalStore } from './globalStore';
// Re-exporta el store de auth para facilitar su acceso
export { useAuthStore } from '@features/auth/domain/store/authStore';

