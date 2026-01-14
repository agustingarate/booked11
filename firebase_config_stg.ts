import { initializeApp } from 'firebase/app';
import type { Auth } from 'firebase/auth';
import {
  browserLocalPersistence,
  // @ts-expect-error - getReactNativePersistence is not a function
  getReactNativePersistence,
  initializeAuth,
} from 'firebase/auth';
import { Platform } from 'react-native';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDnsbzIjUkWBC4m-2C1LV_OSkYuyGmfDcc',
  authDomain: 'booked11-8b5df.firebaseapp.com',
  projectId: 'booked11-8b5df',
  storageBucket: 'booked11-8b5df.firebasestorage.app',
  messagingSenderId: '702484602442',
  appId: '1:702484602442:web:28332be14ebee6e50f90b3',
  measurementId: 'G-GQ7VP2DE32',
};

const app = initializeApp(firebaseConfig);

// Inicializar Auth con persistencia según la plataforma
let auth: Auth;

if (Platform.OS === 'web') {
  // Para web, usar la persistencia del navegador
  auth = initializeAuth(app, {
    persistence: browserLocalPersistence,
  });
} else {
  // Para mobile (iOS/Android), usar AsyncStorage
  // Importación dinámica para evitar errores en web
  const AsyncStorage =
    require('@react-native-async-storage/async-storage').default;
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
}

export { app, auth };
