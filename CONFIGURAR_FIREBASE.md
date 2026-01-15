# ⚡ Configuración Rápida de Firebase

## ✅ Estado Actual

- [x] Autenticado como `agustingarate98@gmail.com`
- [x] Proyecto: `booked11-8b5df` 
- [x] Archivos de configuración creados
- [x] Reglas de seguridad listas
- [ ] **FALTA: Habilitar servicios y desplegar reglas**

## 🚀 Pasos para Completar (5 minutos)

### Paso 1: Habilitar Firestore

1. Abre: https://console.firebase.google.com/project/booked11-8b5df/firestore
2. Click en **"Create Database"** (si no está creado)
3. Selecciona **"Start in production mode"**
4. Elige ubicación: **us-central (Iowa)** o la más cercana
5. Click en **"Enable"**

### Paso 2: Habilitar Storage

1. Abre: https://console.firebase.google.com/project/booked11-8b5df/storage
2. Click en **"Get Started"**
3. Acepta las reglas temporales (las reemplazaremos)
4. Elige la misma ubicación que Firestore
5. Click en **"Done"**

### Paso 3: Verificar desde la terminal

Abre una terminal en `/Users/agustingarate/booked11` y ejecuta:

\`\`\`bash
cd /Users/agustingarate/booked11

# Verificar que estás en el directorio correcto
pwd
# Debe mostrar: /Users/agustingarate/booked11

# Ver archivos de configuración
ls -la | grep firebase
# Debe mostrar: firebase.json, .firebaserc, firestore.rules, firestore.indexes.json, storage.rules
\`\`\`

### Paso 4: Desplegar las reglas (IMPORTANTE)

Una vez habilitados Firestore y Storage, ejecuta:

\`\`\`bash
cd /Users/agustingarate/booked11

# Opción A: Si tienes Firebase CLI instalado localmente
firebase deploy --only firestore,storage --project booked11-8b5df

# Opción B: Si no tienes Firebase CLI, instálalo primero
npm install -g firebase-tools
firebase login
firebase deploy --only firestore,storage --project booked11-8b5df
\`\`\`

## 🧪 Verificar que Todo Funciona

### Desde Firebase Console

1. **Firestore**: https://console.firebase.google.com/project/booked11-8b5df/firestore/rules
   - Deberías ver las reglas para `users/{userId}/pdfs/{pdfId}`

2. **Storage**: https://console.firebase.google.com/project/booked11-8b5df/storage/rules
   - Deberías ver las reglas para `users/{userId}/pdfs/`

### Desde tu App

Intenta subir un PDF de prueba usando el código:

\`\`\`typescript
import { useUploadPdfMutation } from '@features/pdfs/presentation/hooks/usePdfMutations';

const uploadMutation = useUploadPdfMutation(userId);
uploadMutation.mutate({
  fileName: 'test.pdf',
  totalPages: 10,
  fileSize: 1024000,
  fileUri: 'file://...',
});
\`\`\`

## ⚠️ Si Encuentras Errores

### Error: "Missing or insufficient permissions"
**Solución**: Las reglas no se desplegaron. Ejecuta el Paso 4 de nuevo.

### Error: "firebase: command not found"
**Solución**: Instala Firebase CLI:
\`\`\`bash
npm install -g firebase-tools
\`\`\`

### Error: "CORS policy"
**Solución**: Configura CORS en Storage (ver FIREBASE_SETUP.md)

## 📊 Estructura Final

Después de completar estos pasos, tendrás:

\`\`\`
Firestore Database
└── users/
    └── {userId}/
        └── pdfs/
            └── {pdfId}/
                └── (metadata del PDF)

Firebase Storage
└── users/
    └── {userId}/
        └── pdfs/
            └── {timestamp}_{fileName}.pdf
\`\`\`

## ✅ Checklist Final

- [ ] Firestore habilitado en Console
- [ ] Storage habilitado en Console  
- [ ] Reglas desplegadas (`firebase deploy --only firestore,storage`)
- [ ] Probado subir un PDF
- [ ] Verificado que el archivo y metadata se crean

## 🎉 ¡Listo!

Una vez completados estos pasos, el módulo de PDFs estará 100% funcional.

Puedes empezar a usarlo siguiendo:
- `src/features/pdfs/QUICKSTART.md` - Ejemplos de código
- `src/features/pdfs/README.md` - Documentación completa
