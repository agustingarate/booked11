# 🔥 Configuración de Firebase - PDFs

## Estado Actual

✅ Código implementado  
✅ Reglas de seguridad creadas (`firestore.rules`, `storage.rules`)  
✅ `firebase.json` creado  
⚠️ **FALTA**: Configurar Firebase Console y desplegar reglas

## 📋 Pasos para Configurar

### 1. Autenticarse en Firebase CLI

```bash
firebase login
```

### 2. Establecer el proyecto activo

```bash
cd /Users/agustingarate/booked11
firebase use booked11-8b5df
```

### 3. Habilitar Firestore en Firebase Console

**Opción A: Desde la consola web**
1. Ve a [Firebase Console](https://console.firebase.google.com/project/booked11-8b5df/firestore)
2. Click en "Firestore Database"
3. Click en "Create Database"
4. Selecciona una ubicación (recomendado: `us-central1` o la más cercana)
5. Selecciona "Start in production mode" (las reglas ya están definidas en `firestore.rules`)

**Opción B: Desde la terminal**
```bash
# Esto se puede hacer después de autenticarte
firebase firestore:databases:create default --location=us-central1
```

### 4. Habilitar Firebase Storage

1. Ve a [Firebase Console - Storage](https://console.firebase.google.com/project/booked11-8b5df/storage)
2. Click en "Get Started"
3. Acepta las reglas por defecto (las sobrescribiremos después)

### 5. Desplegar las reglas de seguridad

```bash
# Desplegar reglas de Firestore
firebase deploy --only firestore:rules

# Desplegar índices de Firestore
firebase deploy --only firestore:indexes

# Desplegar reglas de Storage
firebase deploy --only storage:rules

# O desplegar todo junto
firebase deploy --only firestore,storage
```

### 6. Verificar la configuración

```bash
# Ver el estado del proyecto
firebase projects:list

# Ver las reglas actuales
firebase firestore:rules:get
firebase storage:rules:get
```

## 🗂️ Estructura de Datos en Firestore

Después de la configuración, la estructura será:

```
booked11-8b5df (Firestore)
└── users/
    └── {userId}/
        └── pdfs/
            └── {pdfId}/
                ├── userId: string
                ├── fileName: string
                ├── url: string (Storage URL)
                ├── totalPages: number
                ├── currentPage: number
                ├── progress: number (0-100)
                ├── fileSize: number
                ├── uploadedAt: timestamp
                └── updatedAt: timestamp
```

## 📦 Estructura de Storage

```
booked11-8b5df.firebasestorage.app
└── users/
    └── {userId}/
        └── pdfs/
            └── {timestamp}_{fileName}.pdf
```

## 🔒 Reglas de Seguridad Aplicadas

### Firestore
- ✅ Solo el usuario autenticado puede ver sus PDFs
- ✅ Validación de estructura de datos
- ✅ Solo se pueden actualizar campos específicos (currentPage, progress)
- ✅ Validación de rangos (progress 0-100, etc.)

### Storage
- ✅ Solo archivos PDF permitidos (`application/pdf`)
- ✅ Límite de 50MB por archivo
- ✅ Solo el propietario puede acceder/eliminar
- ✅ No se permiten actualizaciones de archivos

## 🧪 Probar la Configuración

### Usando los emuladores locales (Recomendado para desarrollo)

```bash
# Iniciar emuladores
firebase emulators:start

# O solo Firestore y Storage
firebase emulators:start --only firestore,storage
```

Luego actualiza `firebase_config_stg.ts` para usar los emuladores en desarrollo:

```typescript
import { connectFirestoreEmulator } from 'firebase/firestore';
import { connectStorageEmulator } from 'firebase/storage';

// ... después de inicializar

if (__DEV__) {
  const firestore = getFirestore(app);
  const storage = getStorage(app);
  
  connectFirestoreEmulator(firestore, 'localhost', 8080);
  connectStorageEmulator(storage, 'localhost', 9199);
}
```

### Probar en producción

1. Asegúrate de que un usuario esté autenticado
2. Intenta subir un PDF usando `useUploadPdfMutation`
3. Verifica en Firebase Console que:
   - El archivo aparece en Storage
   - El documento aparece en Firestore

## ⚠️ Problemas Comunes

### Error: "Missing or insufficient permissions"
- **Causa**: Las reglas no están desplegadas o el usuario no está autenticado
- **Solución**: Despliega las reglas y verifica que `auth.currentUser` exista

### Error: "CORS policy"
- **Causa**: Storage no permite el origen
- **Solución**: Configura CORS en Firebase Storage (ver abajo)

### Configurar CORS para Storage (si es necesario)

Crea un archivo `cors.json`:

```json
[
  {
    "origin": ["*"],
    "method": ["GET", "POST", "PUT", "DELETE"],
    "maxAgeSeconds": 3600
  }
]
```

Aplica la configuración:

```bash
gsutil cors set cors.json gs://booked11-8b5df.firebasestorage.app
```

## 📊 Monitoreo

### Ver uso de Firestore
```bash
firebase firestore:databases:list
```

### Ver archivos en Storage (desde consola web)
[Storage Console](https://console.firebase.google.com/project/booked11-8b5df/storage)

## ✅ Checklist de Configuración

- [ ] Autenticado en Firebase CLI (`firebase login`)
- [ ] Proyecto establecido (`firebase use booked11-8b5df`)
- [ ] Firestore habilitado en Console
- [ ] Firebase Storage habilitado en Console
- [ ] Reglas de Firestore desplegadas (`firebase deploy --only firestore:rules`)
- [ ] Índices de Firestore desplegados (`firebase deploy --only firestore:indexes`)
- [ ] Reglas de Storage desplegadas (`firebase deploy --only storage:rules`)
- [ ] Probado subir un PDF de prueba
- [ ] Verificado que el archivo y metadata se crean correctamente

## 🚀 Próximos Pasos Después de la Configuración

1. Implementar tu ViewModel con TanStack Query
2. Crear las pantallas de UI para subir/listar PDFs
3. Implementar el cálculo real de páginas del PDF
4. Agregar indicadores de progreso durante la subida
5. Configurar los emuladores para desarrollo local

## 📞 Soporte

Si encuentras problemas:
1. Verifica los logs: `firebase functions:log`
2. Revisa la consola de Firebase
3. Verifica las reglas desplegadas
4. Consulta la documentación en `src/features/pdfs/README.md`
