# 🚀 Inicio Rápido - Emuladores Firebase

## ⚠️ Requisito Previo

**Necesitas Java 21 o superior** para ejecutar los emuladores.

Verifica tu versión:
```bash
java -version
```

Si tienes Java 17 o inferior, **[sigue esta guía](INSTALAR_JAVA_21.md)** para actualizar.

---

## ⚡ Para Empezar AHORA (2 pasos)

### 1. Terminal 1 - Iniciar Emuladores

```bash
npm run emulators
```

> **Nota**: Usa `npm run emulators` (no requiere instalar Firebase CLI globalmente)

Espera a ver:
```
✔  All emulators ready!
┌─────────────────────────────────────────────────────────────┐
│ ✔  All emulators ready! It is now safe to connect your app. │
│ i  View Emulator UI at http://127.0.0.1:4000               │
└─────────────────────────────────────────────────────────────┘
```

### 2. Terminal 2 - Iniciar App

```bash
npm run web     # Para web
# o
npm run android # Para Android
# o
npm run ios     # Para iOS
```

## ✅ Verificar que Funciona

Cuando inicies la app, deberías ver en la consola:

```
🔥 FIREBASE EMULATORS ACTIVOS - No se realizarán cargos reales
📍 Host: localhost
✅ Emuladores conectados correctamente
```

## 🖥️ Ver Datos en Vivo

Abre en tu navegador:
```
http://localhost:4000
```

Aquí podrás ver:
- 📦 Firestore: Documentos creados
- 📁 Storage: Archivos subidos
- 🔐 Auth: Usuarios registrados

## 🎯 Probar Subir un PDF

1. Ejecuta tu app
2. Ve a la pantalla de home
3. Sube un PDF de prueba
4. Verifica en `http://localhost:4000` que:
   - Aparece en **Storage** (pestaña Storage)
   - Aparece en **Firestore** (pestaña Firestore → users → {userId} → pdfs)

## ⚠️ IMPORTANTE

### ✅ CON Emuladores (Desarrollo - Por defecto)
- ✅ **Gratis** - Sin cargos
- ✅ **Local** - Todo en tu computadora
- ✅ **Rápido** - Sin latencia de red
- ✅ **Seguro** - No afecta producción

### ❌ SIN Emuladores (Producción - Solo en release)
- ❌ **Requiere plan Blaze** (pay as you go)
- ❌ **Puede generar cargos**
- ❌ Solo se activa al compilar release

## 🛡️ Protección Automática

La configuración actual **PREVIENE cargos automáticamente**:

```typescript
// En firebase_config_stg.ts
const USE_EMULATORS = __DEV__; // true en desarrollo, false en producción

if (USE_EMULATORS) {
  // Conecta a emuladores locales (GRATIS)
  connectFirestoreEmulator(firestore, 'localhost', 8080);
  connectStorageEmulator(storage, 'localhost', 9199);
}
```

## 🔍 Troubleshooting

### Error: "firebase-tools no longer supports Java version before 21"

**Solución**: Necesitas actualizar Java a versión 21 o superior.

👉 **[Sigue esta guía completa: INSTALAR_JAVA_21.md](INSTALAR_JAVA_21.md)**

**Pasos rápidos (macOS con Homebrew):**
```bash
# 1. Instalar Java 21
brew install openjdk@21

# 2. Configurar
sudo ln -sfn $(brew --prefix)/opt/openjdk@21/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk-21.jdk

# 3. Agregar a ~/.zshrc
echo 'export JAVA_HOME=$(/usr/libexec/java_home -v 21)' >> ~/.zshrc
source ~/.zshrc

# 4. Verificar
java -version  # Debe mostrar versión 21.x
```

### Error: "Cannot connect to emulator"

**Solución**: Inicia los emuladores primero
```bash
npm run emulators
```

### Error: "Port already in use"

**Solución**: Mata el proceso en ese puerto
```bash
# macOS/Linux
lsof -ti:8080 | xargs kill -9
lsof -ti:9199 | xargs kill -9

# Windows
netstat -ano | findstr :8080
taskkill /PID <PID> /F
```

### No veo los datos en la UI

**Solución**: 
1. Verifica que la app muestre "🔥 FIREBASE EMULATORS ACTIVOS"
2. Recarga `http://localhost:4000`
3. Navega a la pestaña correcta (Firestore o Storage)

## 📚 Más Información

Para documentación completa, lee:
- `EMULADORES_FIREBASE.md` - Guía detallada
- `CONFIGURAR_FIREBASE.md` - Configuración de producción

## 🎉 ¡Listo!

Ya puedes desarrollar sin preocuparte por costos. Todo se guarda localmente en los emuladores.
