# 📝 Crear Datos de Prueba Manualmente (Dashboard)

## 🎯 Método Más Simple: UI de Emuladores

Esta es la forma más fácil y visual de crear datos de prueba. No requiere scripts ni código.

---

## 📋 Prerequisitos

1. ✅ Emuladores corriendo: `npm run emulators`
2. ✅ Abre http://localhost:4000 en tu navegador

---

## 🗂️ Paso 1: Entender la Estructura de Datos

Tus PDFs en Firestore deben seguir esta estructura:

```
users/
  └── {userId}/              ← ID del usuario autenticado
      └── pdfs/              ← Colección de PDFs
          ├── {pdfId1}/      ← Documento generado automáticamente
          │   ├── userId: "test-user-123"
          │   ├── fileName: "clean-architecture.pdf"
          │   ├── url: "http://localhost:9199/v0/b/.../archivo.pdf?alt=media"
          │   ├── totalPages: 432
          │   ├── currentPage: 45
          │   ├── progress: 10.4
          │   ├── fileSize: 5242880
          │   ├── uploadedAt: Timestamp
          │   └── updatedAt: Timestamp
          ├── {pdfId2}/
          └── ...
```

---

## 📂 Paso 2: Subir PDFs a Storage (Si no lo has hecho)

### 2.1. Ir a Storage

1. Abre http://localhost:4000
2. Clic en pestaña **"Storage"**

### 2.2. Crear Estructura de Carpetas

Necesitas crear esta ruta: `users/{userId}/pdfs/`

1. Haz clic en el botón **"Upload file"** o similar
2. O simplemente arrastra un archivo PDF al navegador

### 2.3. Subir PDFs de Prueba

Arrastra y suelta archivos PDF en la ruta: `users/test-user-123/pdfs/`

Ejemplos de nombres:
- `clean-architecture.pdf`
- `react-native-guide.pdf`
- `typescript-handbook.pdf`

### 2.4. Copiar URLs

**IMPORTANTE**: Necesitarás las URLs de cada archivo para el siguiente paso.

Para cada archivo:
1. Haz clic en el archivo
2. Busca el botón **"Copy download URL"** o **"Get download URL"**
3. Guarda la URL (la necesitarás en el Paso 3)

Ejemplo de URL:
```
http://localhost:9199/v0/b/booked11-8b5df.firebasestorage.app/o/users%2Ftest-user-123%2Fpdfs%2Fclean-architecture.pdf?alt=media&token=...
```

---

## 📊 Paso 3: Crear Documentos en Firestore

### 3.1. Ir a Firestore

1. En http://localhost:4000
2. Clic en pestaña **"Firestore"**

### 3.2. Crear Colección de Usuario

1. Clic en **"Start collection"** (si no hay datos)
2. **Collection ID**: `users`
3. Clic en **"Next"**

### 3.3. Crear Documento de Usuario

1. **Document ID**: `test-user-123` (o deja que se genere automáticamente)
2. **NO agregues campos todavía** (solo necesitamos el documento)
3. Clic en **"Save"**

### 3.4. Crear Subcolección de PDFs

1. Ahora deberías ver el documento `users/test-user-123`
2. Dentro de este documento, busca **"Add collection"** o **"Start collection"**
3. **Collection ID**: `pdfs`
4. Clic en **"Next"**

### 3.5. Crear Primer Documento de PDF

Ahora vas a crear el primer PDF. Usa estos datos de ejemplo:

#### 📄 PDF 1: Clean Architecture (Recién iniciado - 10%)

**Document ID**: (deja que se genere automáticamente)

**Fields** (agregar uno por uno):

| Campo | Tipo | Valor |
|-------|------|-------|
| `userId` | string | `test-user-123` |
| `fileName` | string | `clean-architecture.pdf` |
| `url` | string | `http://localhost:9199/v0/b/booked11-8b5df.firebasestorage.app/o/users%2Ftest-user-123%2Fpdfs%2Fclean-architecture.pdf?alt=media` |
| `totalPages` | number | `432` |
| `currentPage` | number | `45` |
| `progress` | number | `10.4` |
| `fileSize` | number | `5242880` |
| `uploadedAt` | timestamp | (clic en reloj, selecciona fecha actual) |
| `updatedAt` | timestamp | (clic en reloj, selecciona fecha actual) |

**Pasos para agregar cada campo:**
1. Clic en **"Add field"**
2. Escribe el nombre del campo
3. Selecciona el tipo (string, number, timestamp)
4. Ingresa el valor
5. Repite para todos los campos

Cuando termines, clic en **"Save"**

---

## 📚 Datos de Ejemplo para Copiar/Pegar

Aquí tienes 5 PDFs de ejemplo con diferentes estados. Crea un documento para cada uno:

### 📄 PDF 1: Clean Architecture (10% - Recién iniciado)

```
userId: test-user-123
fileName: clean-architecture.pdf
url: http://localhost:9199/v0/b/booked11-8b5df.firebasestorage.app/o/users%2Ftest-user-123%2Fpdfs%2Fclean-architecture.pdf?alt=media
totalPages: 432
currentPage: 45
progress: 10.4
fileSize: 5242880
uploadedAt: (timestamp actual)
updatedAt: (timestamp actual)
```

### 📄 PDF 2: React Native Guide (50% - A la mitad)

```
userId: test-user-123
fileName: react-native-guide.pdf
url: http://localhost:9199/v0/b/booked11-8b5df.firebasestorage.app/o/users%2Ftest-user-123%2Fpdfs%2Freact-native-guide.pdf?alt=media
totalPages: 256
currentPage: 128
progress: 50.0
fileSize: 3145728
uploadedAt: (timestamp actual)
updatedAt: (timestamp actual)
```

### 📄 PDF 3: TypeScript Handbook (100% - Completado)

```
userId: test-user-123
fileName: typescript-handbook.pdf
url: http://localhost:9199/v0/b/booked11-8b5df.firebasestorage.app/o/users%2Ftest-user-123%2Fpdfs%2Ftypescript-handbook.pdf?alt=media
totalPages: 180
currentPage: 180
progress: 100.0
fileSize: 2097152
uploadedAt: (timestamp actual)
updatedAt: (timestamp actual)
```

### 📄 PDF 4: Firebase Docs (0% - Sin leer)

```
userId: test-user-123
fileName: firebase-docs.pdf
url: http://localhost:9199/v0/b/booked11-8b5df.firebasestorage.app/o/users%2Ftest-user-123%2Fpdfs%2Ffirebase-docs.pdf?alt=media
totalPages: 320
currentPage: 0
progress: 0.0
fileSize: 4194304
uploadedAt: (timestamp actual)
updatedAt: (timestamp actual)
```

### 📄 PDF 5: Design Patterns (50% - A la mitad)

```
userId: test-user-123
fileName: design-patterns.pdf
url: http://localhost:9199/v0/b/booked11-8b5df.firebasestorage.app/o/users%2Ftest-user-123%2Fpdfs%2Fdesign-patterns.pdf?alt=media
totalPages: 512
currentPage: 256
progress: 50.0
fileSize: 6291456
uploadedAt: (timestamp actual)
updatedAt: (timestamp actual)
```

---

## 📋 Paso 4: Crear Más PDFs (Repetir)

Para cada PDF adicional:

1. Dentro de `users/test-user-123/pdfs/`
2. Clic en **"Add document"**
3. Deja que se genere el **Document ID** automáticamente
4. Agrega los 9 campos (userId, fileName, url, totalPages, currentPage, progress, fileSize, uploadedAt, updatedAt)
5. Clic en **"Save"**

---

## ✅ Paso 5: Verificar los Datos

### 5.1. En el Dashboard

1. Ve a http://localhost:4000
2. Clic en **"Firestore"**
3. Navega a: `users` → `test-user-123` → `pdfs`
4. Deberías ver todos los documentos de PDFs

### 5.2. En tu App

```typescript
import { usePdfListViewModel } from '@features/home/presentation/viewModels/PdfListViewModel';

function HomeScreen() {
  const { pdfs, isLoading } = usePdfListViewModel('test-user-123');
  
  console.log('PDFs cargados:', pdfs);
  // Deberías ver los 5 PDFs que creaste
  
  return (
    <FlatList
      data={pdfs}
      renderItem={({ item }) => (
        <View>
          <Text>{item.fileName}</Text>
          <Text>Progreso: {item.progress}%</Text>
        </View>
      )}
    />
  );
}
```

---

## 🎨 Tips para Crear Datos Realistas

### Tamaños de Archivo Comunes (fileSize en bytes)

```
1 MB  = 1,048,576 bytes
2 MB  = 2,097,152 bytes
3 MB  = 3,145,728 bytes
5 MB  = 5,242,880 bytes
10 MB = 10,485,760 bytes
```

### Calcular Progreso

```javascript
progress = (currentPage / totalPages) * 100

Ejemplos:
- Página 45 de 432 = (45/432)*100 = 10.4%
- Página 128 de 256 = (128/256)*100 = 50.0%
- Página 180 de 180 = (180/180)*100 = 100.0%
```

### Estados Típicos para Probar

1. **Sin leer**: `currentPage: 0, progress: 0`
2. **Recién iniciado**: `currentPage: 10-50, progress: 5-15`
3. **A la mitad**: `currentPage: totalPages/2, progress: 50`
4. **Casi terminado**: `currentPage: totalPages-20, progress: 95`
5. **Completado**: `currentPage: totalPages, progress: 100`

---

## 🔄 Paso 6: Crear Datos para Diferentes Usuarios

Si quieres probar el aislamiento de datos por usuario:

1. Repite el proceso desde el Paso 3
2. Pero usa diferentes userIds:
   - `test-user-123`
   - `test-user-456`
   - `test-user-789`

Luego verifica que cada usuario solo vea sus propios PDFs.

---

## 🧹 Limpiar Datos

### Eliminar un PDF

1. Ve a Firestore en http://localhost:4000
2. Navega al documento: `users/test-user-123/pdfs/{pdfId}`
3. Clic en los tres puntos (⋮)
4. Clic en **"Delete document"**

### Eliminar Todo

1. Detén los emuladores (Ctrl+C)
2. Elimina la carpeta de datos:
   ```bash
   rm -rf firebase-emulator-data/
   ```
3. Reinicia emuladores:
   ```bash
   npm run emulators
   ```

---

## 📸 Referencia Visual de Campos

Cuando estés agregando campos en Firestore, la interfaz se ve así:

```
┌──────────────────────────────────────────────────┐
│ Add field                                   [X]  │
├──────────────────────────────────────────────────┤
│ Field name:  [userId                        ]   │
│ Type:        [string ▼]                         │
│ Value:       [test-user-123                 ]   │
│                                                  │
│              [Cancel]  [Add field]              │
└──────────────────────────────────────────────────┘
```

**Tipos de campo disponibles:**
- `string` - Para userId, fileName, url
- `number` - Para totalPages, currentPage, progress, fileSize
- `timestamp` - Para uploadedAt, updatedAt

---

## ⚡ Atajo: Usar la Opción "Duplicate"

Si los emuladores lo permiten:

1. Crea el primer PDF completo
2. Haz clic en **"Duplicate"** o **"Clone"**
3. Solo modifica los campos que cambien (fileName, url, totalPages, etc.)
4. Guarda

Esto te ahorra tiempo al crear múltiples documentos similares.

---

## 🎯 Checklist

Para cada PDF que crees, verifica que tenga:

- [ ] ✅ `userId` (string) - Mismo para todos los PDFs del usuario
- [ ] ✅ `fileName` (string) - Nombre único del archivo
- [ ] ✅ `url` (string) - URL válida de Storage
- [ ] ✅ `totalPages` (number) - Número entero positivo
- [ ] ✅ `currentPage` (number) - 0 a totalPages
- [ ] ✅ `progress` (number) - 0.0 a 100.0
- [ ] ✅ `fileSize` (number) - Tamaño en bytes
- [ ] ✅ `uploadedAt` (timestamp) - Fecha/hora actual
- [ ] ✅ `updatedAt` (timestamp) - Fecha/hora actual

---

## 🐛 Troubleshooting

### No veo la opción "Add collection"

**Causa**: Puede que necesites crear el documento primero.

**Solución**: 
1. Crea el documento `users/test-user-123` (aunque esté vacío)
2. Luego agrega la subcolección `pdfs`

### Los campos no aparecen en el orden correcto

**Causa**: Firestore ordena los campos alfabéticamente.

**Solución**: No importa el orden, tu app los leerá correctamente.

### No puedo agregar timestamp

**Causa**: Buscas el tipo "Date" pero se llama "timestamp".

**Solución**: 
1. Selecciona tipo **"timestamp"**
2. Clic en el icono de reloj
3. Selecciona fecha y hora actual

### La URL no funciona en mi app

**Causa**: Puede que la URL sea incorrecta o el archivo no exista.

**Solución**: 
1. Ve a Storage en http://localhost:4000
2. Verifica que el archivo exista
3. Copia la URL exacta desde el dashboard

---

## 🎉 ¡Listo!

Ahora tienes datos de prueba creados manualmente. Puedes:

1. ✅ Probar el listado de PDFs en tu app
2. ✅ Probar la apertura de PDFs
3. ✅ Probar actualización de progreso
4. ✅ Probar eliminación de PDFs
5. ✅ Ver los datos en tiempo real en el dashboard

**Ventajas de este método:**
- ✅ Visual y fácil de entender
- ✅ No requiere scripts ni código
- ✅ Puedes modificar datos en vivo
- ✅ Ideal para debugging

**Siguiente paso**: Prueba tu app con `userId = 'test-user-123'` 🚀
