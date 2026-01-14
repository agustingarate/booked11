# 🔑 Cómo Obtener el Web Client ID para Google OAuth

## Método 1: Desde Firebase Console (Más Fácil)

### Paso 1: Acceder a Firebase Console

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Selecciona tu proyecto: **booked11-8b5df**

### Paso 2: Habilitar Google Sign-In

1. En el menú lateral, selecciona **Authentication** (Autenticación)
2. Ve a la pestaña **Sign-in method** (Método de inicio de sesión)
3. En la lista de proveedores, busca **Google**
4. Si no está habilitado, haz clic en él y actívalo

### Paso 3: Obtener el Web Client ID

Una vez que Google está habilitado, verás:

- **Web SDK configuration** (Configuración del SDK web)
- **Web client ID**: Este es el que necesitas
- Tendrá el formato: `702484602442-XXXXXXXXXXXXXXXX.apps.googleusercontent.com`

### Paso 4: Copiar y Pegar

1. Copia el **Web client ID** completo
2. Abre el archivo: `src/features/auth/presentation/hooks/useGoogleSignIn.ts`
3. Busca la línea:
   ```typescript
   const WEB_CLIENT_ID = '702484602442-XXXXXX.apps.googleusercontent.com';
   ```
4. Reemplaza con tu ID real:
   ```typescript
   const WEB_CLIENT_ID = '702484602442-tu-id-real-aqui.apps.googleusercontent.com';
   ```

## Método 2: Desde Google Cloud Console

### Paso 1: Acceder a Google Cloud Console

1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Asegúrate de que el proyecto seleccionado sea **booked11-8b5df**

### Paso 2: Ir a Credentials

1. En el menú lateral, busca **APIs & Services** → **Credentials**
2. En la lista, busca los **OAuth 2.0 Client IDs**

### Paso 3: Identificar el Web Client

Verás varios Client IDs:
- **iOS client** (el que ya tienes configurado)
- **Web client** (el que necesitas)
- Posiblemente otros...

El **Web client** tendrá:
- **Application type**: Web application
- **Client ID**: `702484602442-XXXXXXXXXXXXXXXX.apps.googleusercontent.com`

### Paso 4: Copiar el Client ID

1. Copia el **Client ID** del tipo Web application
2. Úsalo en el archivo `useGoogleSignIn.ts` como se explicó arriba

## Si No Existe un Web Client ID

Si no encuentras un Web Client ID, necesitas crearlo:

### Crear Nuevo Web Client ID

1. En **Google Cloud Console** → **APIs & Services** → **Credentials**
2. Haz clic en **+ CREATE CREDENTIALS**
3. Selecciona **OAuth client ID**
4. Elige **Application type**: **Web application**
5. Dale un nombre: "Booked11 Web Client"

### Configurar Authorized Redirect URIs

Agrega las siguientes URIs:

**Para desarrollo:**
```
http://localhost:8081
https://localhost:8081
```

**Para producción (cuando despliegues):**
```
https://tu-dominio.com
```

### Guardar y Obtener el ID

1. Haz clic en **CREATE**
2. Se mostrará una ventana con tu nuevo **Client ID**
3. Cópialo y úsalo en tu código

## Verificar que Funciona

### 1. Actualizar el código

Después de pegar el Web Client ID:

```typescript
// useGoogleSignIn.ts
const WEB_CLIENT_ID = '702484602442-abc123xyz.apps.googleusercontent.com';
```

### 2. Reiniciar el servidor

```bash
# Detén el servidor actual (Ctrl+C)
pnpm expo start -c
# Presiona 'w' para abrir en web
```

### 3. Probar Google Sign-In

1. Haz clic en el botón "Sign in with Google"
2. Debería abrirse una ventana popup de Google
3. Selecciona tu cuenta
4. Debería redirigirte de vuelta a la app

### 4. Verificar en DevTools

1. Abre DevTools del navegador (F12)
2. Ve a **Application** → **Local Storage**
3. Busca la entrada `auth-storage`
4. Deberías ver tus datos de autenticación almacenados

## Problemas Comunes

### Error: "redirect_uri_mismatch"

**Causa:** La URI de redirección no está autorizada.

**Solución:**
1. Ve a Google Cloud Console → Credentials
2. Edita el Web Client ID
3. En **Authorized redirect URIs**, agrega:
   - `http://localhost:8081`
   - La URI que aparece en el error

### Error: "access_denied"

**Causa:** El usuario canceló el login o hay un problema de permisos.

**Solución:**
1. Intenta de nuevo
2. Verifica que tu cuenta de Google tiene acceso al proyecto

### Error: "invalid_client"

**Causa:** El Client ID es incorrecto o no existe.

**Solución:**
1. Verifica que copiaste el Client ID completo
2. Asegúrate de que es el Web Client ID, no el iOS o Android
3. Verifica que no hay espacios extra al inicio o final

## Información del Proyecto

**Proyecto Firebase:** booked11-8b5df
**Project Number:** 702484602442
**iOS Client ID:** 702484602442-i8alo0o5fv9dtem02dhpio54s56mntoa.apps.googleusercontent.com

Tu **Web Client ID** debe tener este formato:
`702484602442-[diferentes-caracteres].apps.googleusercontent.com`

## Siguiente Paso

Una vez configurado el Web Client ID:
1. ✅ La app debería funcionar completamente en web
2. ✅ Google Sign-In debería funcionar sin errores
3. ✅ Los datos deberían persistir entre recargas
4. ✅ Puedes continuar desarrollando normalmente

Si sigues teniendo problemas, revisa `WEB_SETUP.md` para más troubleshooting.
