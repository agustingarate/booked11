import { initializeApp } from 'firebase/app';
import type { Auth } from 'firebase/auth';
import {
  browserLocalPersistence,
  connectAuthEmulator,
  // @ts-expect-error - getReactNativePersistence is not a function
  getReactNativePersistence,
  initializeAuth,
} from 'firebase/auth';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { connectStorageEmulator, getStorage } from 'firebase/storage';
import { Platform } from 'react-native';

// ⚠️ IMPORTANTE: Control de entorno
// Por defecto, usa EMULADORES en desarrollo para evitar costos
const USE_EMULATORS = __DEV__; // true en desarrollo, false en producción

// Configuración de Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDnsbzIjUkWBC4m-2C1LV_OSkYuyGmfDcc',
  authDomain: 'booked11-8b5df.firebaseapp.com',
  projectId: 'booked11-8b5df',
  storageBucket: 'booked11-8b5df.firebasestorage.app',
  messagingSenderId: '702484602442',
  appId: '1:702484602442:web:28332be14ebee6e50f90b3',
  measurementId: 'G-GQ7VP2DE32',
};

// Inicializar Firebase App
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

// Inicializar Firestore y Storage
const firestore = getFirestore(app);
const storage = getStorage(app);

// 🔥 CONECTAR A EMULADORES EN DESARROLLO
if (USE_EMULATORS) {
  // Determinar el host correcto según la plataforma
  const emulatorHost =
    Platform.OS === 'android' ? '10.0.2.2' : 'localhost';

  console.warn(
    '🔥 FIREBASE EMULATORS ACTIVOS - No se realizarán cargos reales'
  );
  console.warn(`📍 Host: ${emulatorHost}`);

  try {
    // Conectar Auth Emulator
    connectAuthEmulator(auth, `http://${emulatorHost}:9099`, {
      disableWarnings: true,
    });

    // Conectar Firestore Emulator
    connectFirestoreEmulator(firestore, emulatorHost, 8080);

    // Conectar Storage Emulator
    connectStorageEmulator(storage, emulatorHost, 9199);

    console.warn('✅ Emuladores conectados correctamente');
  } catch (error) {
    console.error('❌ Error conectando emuladores:', error);
    console.error('Asegúrate de ejecutar: npm run emulators');
  }
} else {
  console.log('🌐 Usando Firebase en PRODUCCIÓN');
}

export { app, auth, firestore, storage };
