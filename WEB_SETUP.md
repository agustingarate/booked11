# Configuración para Web

## ⚠️ Requisitos Previos

Para que la aplicación funcione correctamente en web, necesitas configurar el **Web Client ID** de Google OAuth.

## 📝 Cómo obtener el Web Client ID

### Opción 1: Desde Firebase Console (Recomendado)

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Selecciona tu proyecto: `booked11-8b5df`
3. Ve a **Authentication** → **Sign-in method**
4. Haz clic en **Google** en la lista de proveedores
5. En la sección de configuración web, encontrarás el **Web client ID**
6. Copia el ID (tiene el formato: `702484602442-XXXXXX.apps.googleusercontent.com`)

### Opción 2: Desde Google Cloud Console

1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Selecciona tu proyecto: `booked11-8b5df`
3. Ve a **APIs & Services** → **Credentials**
4. Busca el OAuth 2.0 Client ID de tipo **Web application**
5. Copia el Client ID

## 🔧 Configuración en el código

Una vez que tengas el Web Client ID, actualízalo en el archivo:

```typescript
src/features/auth/presentation/hooks/useGoogleSignIn.ts
```

Reemplaza la línea:

```typescript
webClientId: '702484602442-XXXXXX.apps.googleusercontent.com',
```

Con tu Web Client ID real.

## 🌐 Diferencias entre Web y Mobile

### Persistencia

La aplicación ahora usa diferentes métodos de persistencia según la plataforma:

- **Web**: `localStorage` del navegador
- **Mobile**: `AsyncStorage` de React Native

Esto se configura automáticamente en:
- `firebase_config_stg.js` - Para Firebase Auth
- `src/features/common/utils/storage.ts` - Para Zustand stores

### Google Sign In

El flujo de autenticación de Google funciona diferente en cada plataforma:

- **Web**: Usa el Web Client ID y abre un popup
- **iOS**: Usa el iOS Client ID y el sistema nativo
- **Android**: Usará el Android Client ID (cuando se configure)

## 🐛 Troubleshooting

### Pantalla en blanco en web

Si ves una pantalla en blanco al abrir la app en web:

1. **Verifica la consola del navegador** para errores
2. **Confirma que el Web Client ID está configurado** correctamente
3. **Verifica que la hidratación del store** está funcionando:
   - Abre las DevTools
   - Ve a Application → Local Storage
   - Deberías ver una entrada `auth-storage`

### Error: "redirect_uri_mismatch"

Si ves este error al intentar hacer login con Google:

1. Ve a Google Cloud Console → Credentials
2. Edita el OAuth 2.0 Client ID de Web
3. En **Authorized redirect URIs**, agrega:
   - `http://localhost:8081`
   - `https://auth.expo.io/@YOUR_USERNAME/YOUR_APP_SLUG`

### El store no se hidrata en web

Si el auth store no se carga correctamente:

1. Verifica que `universalStorage` está siendo usado en `authStore.ts`
2. Limpia el localStorage: `localStorage.clear()` en la consola del navegador
3. Recarga la página

## 📚 Documentación Adicional

- [Expo Auth Session - Web Support](https://docs.expo.dev/versions/latest/sdk/auth-session/#web-support)
- [Firebase Auth - Web](https://firebase.google.com/docs/auth/web/start)
- [Google OAuth - Web](https://developers.google.com/identity/protocols/oauth2/web-server)
