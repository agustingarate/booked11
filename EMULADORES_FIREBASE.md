# 🔥 Guía de Emuladores de Firebase

## 📋 Requisitos Previos

### ☕ Java 21 o superior (REQUERIDO)

Los emuladores de Firebase requieren **Java 21+**.

**Verificar tu versión:**
```bash
java -version
```

**Si necesitas actualizar**: Lee **[INSTALAR_JAVA_21.md](INSTALAR_JAVA_21.md)** para instrucciones completas.

---

## ⚠️ IMPORTANTE: Seguridad de Costos

Esta configuración está diseñada para **EVITAR CARGOS** mientras desarrollas:

- ✅ **Por defecto**: Usa emuladores en desarrollo (`__DEV__ = true`)
- ✅ **Gratis**: Los emuladores son 100% locales, sin cargos
- ✅ **Producción**: Solo se usa Firebase real cuando compilas para release

## 🎯 Estado Actual

```
DESARROLLO (__DEV__ = true)  → 🔥 EMULADORES (sin cargos)
PRODUCCIÓN (__DEV__ = false) → 🌐 Firebase real (requiere plan Blaze)
```

## 🚀 Cómo Usar los Emuladores

### 1. Iniciar Emuladores

Abre una terminal y ejecuta:

```bash
npm run emulators
```

> **Nota**: Este comando usa `npx firebase-tools` internamente, por lo que **NO necesitas instalar Firebase CLI globalmente**.

Si prefieres usar Firebase CLI directamente (requiere instalación global):

```bash
# Instalar globalmente (opcional)
npm install -g firebase-tools

# Luego puedes usar
firebase emulators:start
```

**Esto iniciará:**
- 🔐 Auth Emulator en `http://localhost:9099`
- 📦 Firestore Emulator en `http://localhost:8080`
- 📁 Storage Emulator en `http://localhost:9199`
- 🖥️ UI de Emuladores en `http://localhost:4000`

### 2. Iniciar tu App

En **otra terminal**, inicia tu aplicación:

```bash
# Para web
npm run web

# Para Android
npm run android

# Para iOS
npm run ios
```

### 3. Verificar Conexión

Cuando inicies la app, deberías ver en la consola:

```
🔥 FIREBASE EMULATORS ACTIVOS - No se realizarán cargos reales
📍 Host: localhost (o 10.0.2.2 en Android)
✅ Emuladores conectados correctamente
```

## 🖥️ UI de Emuladores

Abre `http://localhost:4000` en tu navegador para:

- Ver datos de Firestore en tiempo real
- Ver archivos en Storage
- Ver usuarios autenticados
- Exportar/importar datos
- Ver logs de operaciones

## 💾 Persistir Datos entre Sesiones

### Exportar datos:

```bash
# Mientras los emuladores están corriendo, en otra terminal:
npm run emulators:export
```

Esto guardará los datos en `./firebase-emulator-data/`

### Importar datos:

```bash
npm run emulators:import
```

Esto iniciará los emuladores con los datos guardados.

## 📱 Configuración por Plataforma

### Web
```
Auth:      http://localhost:9099
Firestore: http://localhost:8080
Storage:   http://localhost:9199
```

### Android (Emulador/Dispositivo físico)
```
Auth:      http://10.0.2.2:9099
Firestore: http://10.0.2.2:8080
Storage:   http://10.0.2.2:9199
```

### iOS (Simulador)
```
Auth:      http://localhost:9099
Firestore: http://localhost:8080
Storage:   http://localhost:9199
```

## ⚙️ Configuración en Código

La configuración está en `firebase_config_stg.ts`:

```typescript
// Por defecto usa emuladores en desarrollo
const USE_EMULATORS = __DEV__;

if (USE_EMULATORS) {
  // Conecta a emuladores locales
  connectAuthEmulator(auth, ...);
  connectFirestoreEmulator(firestore, ...);
  connectStorageEmulator(storage, ...);
}
```

## 🛡️ Protección contra Cargos Accidentales

### Opción 1: Variable de Entorno (Más Seguro)

Crea un archivo `.env`:

```env
USE_FIREBASE_EMULATORS=true
```

Y modifica `firebase_config_stg.ts`:

```typescript
const USE_EMULATORS = 
  process.env.USE_FIREBASE_EMULATORS === 'true' || __DEV__;
```

### Opción 2: Nunca Desplegar sin Verificar

Antes de compilar para producción:

1. ✅ Verifica que el plan Blaze esté activo
2. ✅ Configura límites de gasto en Firebase Console
3. ✅ Revisa las reglas de seguridad

## 🧪 Probar la Configuración

### 1. Subir un PDF de Prueba

```typescript
import { useUploadPdfViewModel } from '@features/home/presentation/viewModels/UploadPdfViewModel';

function TestUpload() {
  const { uploadPdf } = useUploadPdfViewModel(userId);
  
  const handleTest = async () => {
    await uploadPdf({
      fileName: 'test.pdf',
      totalPages: 10,
      fileSize: 1024000,
      fileUri: 'file://...',
    });
  };
  
  return <Button onPress={handleTest}>Subir PDF de Prueba</Button>;
}
```

### 2. Verificar en UI de Emuladores

1. Abre `http://localhost:4000`
2. Ve a la pestaña **Storage**
3. Deberías ver el archivo `test.pdf`
4. Ve a la pestaña **Firestore**
5. Navega a `users/{userId}/pdfs/{pdfId}`
6. Deberías ver los metadatos

## ❌ Errores Comunes

### "firebase-tools no longer supports Java version before 21"

**Causa**: Tu versión de Java es anterior a 21.

**Solución**: Actualiza a Java 21 o superior.

👉 **[Guía completa: INSTALAR_JAVA_21.md](INSTALAR_JAVA_21.md)**

**Instalación rápida (macOS):**
```bash
brew install openjdk@21
sudo ln -sfn $(brew --prefix)/opt/openjdk@21/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk-21.jdk
echo 'export JAVA_HOME=$(/usr/libexec/java_home -v 21)' >> ~/.zshrc
source ~/.zshrc
```

### "Cannot connect to emulator"

**Causa**: Los emuladores no están corriendo.

**Solución**:
```bash
npm run emulators
```

### "ECONNREFUSED"

**Causa**: Puerto incorrecto o emuladores no iniciados.

**Solución**:
1. Verifica que los emuladores estén corriendo
2. Revisa los puertos en `firebase.json`
3. Reinicia los emuladores

### "Already connected to emulator"

**Causa**: Intentaste conectar dos veces al emulador.

**Solución**: 
- Normal si recargas la app en desarrollo
- Ignora la advertencia

## 🌐 Cambiar a Producción

### ⚠️ SOLO cuando estés listo para producción:

1. **Activa el plan Blaze** en Firebase Console
2. **Configura límites de gasto**
3. **Compila para release**:

```bash
# Esto automáticamente usa __DEV__ = false
expo build:android --release
expo build:ios --release
```

4. La app usará Firebase real automáticamente

## 📊 Monitoreo de Costos

Cuando uses producción:

1. **Firebase Console** → **Usage and billing**
2. Configura **Budget alerts**
3. Establece límites:
   - Storage: 5 GB gratis/mes
   - Firestore: 20K escrituras/día gratis
   - Functions: 2M invocaciones/mes gratis

## 🔍 Debugging

### Ver logs de emuladores:

```bash
# En la terminal donde corriste npm run emulators
# Verás logs en tiempo real
```

### Ver tráfico de red:

- Abre React Native Debugger
- Ve a la pestaña Network
- Verás requests a `localhost:8080`, `localhost:9199`, etc.

## ✅ Checklist de Desarrollo

Cada vez que desarrolles:

- [ ] Inicia emuladores: `npm run emulators`
- [ ] Inicia tu app: `npm run web/android/ios`
- [ ] Verifica consola: "🔥 FIREBASE EMULATORS ACTIVOS"
- [ ] Abre UI: `http://localhost:4000`
- [ ] Desarrolla sin preocuparte por costos

## 🎉 Beneficios de los Emuladores

1. ✅ **Gratis**: Desarrollo sin cargos
2. ✅ **Rápido**: Sin latencia de red
3. ✅ **Offline**: No necesitas internet
4. ✅ **Debugging**: UI visual de datos
5. ✅ **Testing**: Puedes resetear datos fácilmente
6. ✅ **Seguro**: No afectas producción

## 📚 Recursos

- [Firebase Emulator Suite](https://firebase.google.com/docs/emulator-suite)
- [Configurar Emuladores](https://firebase.google.com/docs/emulator-suite/connect_and_prototype)
- [Firestore Emulator](https://firebase.google.com/docs/emulator-suite/connect_firestore)
- [Storage Emulator](https://firebase.google.com/docs/emulator-suite/connect_storage)
