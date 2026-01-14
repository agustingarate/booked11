# 🚀 Guía Rápida - Ejecutar tu App en Web

## ⚡ Inicio Rápido (2 minutos)

### 1. Ejecutar en Web

```bash
pnpm expo start -c
```

Presiona **`w`** para abrir en el navegador.

### 2. ¿Qué esperar?

✅ **Debería funcionar:**
- La app carga sin pantalla en blanco
- Ves la pantalla de login
- Los tabs funcionan al navegar

⚠️ **Pendiente de configurar:**
- Google Sign-In (necesita Web Client ID)

## 🔧 Configurar Google Sign-In (5 minutos)

### Paso 1: Obtener el Web Client ID

1. Visita: [Firebase Console](https://console.firebase.google.com/)
2. Proyecto: **booked11-8b5df**
3. Ve a: **Authentication** → **Sign-in method** → **Google**
4. Copia el **Web client ID**

### Paso 2: Pegar en el Código

1. Abre: `src/features/auth/presentation/hooks/useGoogleSignIn.ts`
2. Busca:
   ```typescript
   const WEB_CLIENT_ID = '702484602442-XXXXXX.apps.googleusercontent.com';
   ```
3. Reemplaza con tu ID:
   ```typescript
   const WEB_CLIENT_ID = 'tu-id-real.apps.googleusercontent.com';
   ```

### Paso 3: Reiniciar

```bash
# Ctrl+C para detener
pnpm expo start -c
# Presiona 'w'
```

¡Listo! Google Sign-In debería funcionar.

## 📋 Verificación Rápida

### ✅ Todo funciona si:

1. **La app carga en web** → No hay pantalla en blanco
2. **Los tabs funcionan** → Puedes navegar entre Home, Profile, Settings
3. **Google Sign-In funciona** → Te autenticas sin errores
4. **Los datos persisten** → Al recargar (F5) sigues logueado

### ❌ Hay un problema si:

1. **Pantalla en blanco** → Abre consola (F12) y busca errores
2. **Error de persistencia** → Ver `RESUMEN_CAMBIOS_WEB.md` sección Troubleshooting
3. **Google Sign-In no funciona** → Ver `OBTENER_WEB_CLIENT_ID.md`

## 📚 Documentación Completa

Si necesitas más detalles:

- **`RESUMEN_CAMBIOS_WEB.md`** - Explicación completa de los cambios
- **`OBTENER_WEB_CLIENT_ID.md`** - Tutorial detallado paso a paso
- **`WEB_SETUP.md`** - Configuración avanzada
- **`CHANGELOG_WEB.md`** - Cambios técnicos

## 💡 Tips

### Abrir DevTools

```
Windows/Linux: F12 o Ctrl+Shift+I
Mac: Cmd+Option+I
```

### Ver localStorage

1. F12 → **Application** → **Local Storage**
2. Busca `auth-storage`

### Limpiar caché

```javascript
// En la consola del navegador
localStorage.clear()
```

## ✨ Características Web

Tu app ahora tiene:

- ✅ Compatibilidad completa con navegadores
- ✅ Persistencia con localStorage
- ✅ Firebase Auth funcionando
- ✅ Google OAuth configurado
- ✅ Tabs responsive
- ✅ Zustand stores funcionando
- ✅ Mismo código para mobile y web

## 🎯 Próximos Pasos

1. ✅ Ejecutar en web
2. ✅ Configurar Web Client ID
3. ✅ Probar todas las funciones
4. 🚀 ¡Comenzar a desarrollar!

---

**¿Necesitas ayuda?** Revisa `RESUMEN_CAMBIOS_WEB.md` para troubleshooting detallado.
