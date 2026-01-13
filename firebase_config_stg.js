import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';

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

// Inicializar Auth con persistencia de React Native
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { app, auth };
