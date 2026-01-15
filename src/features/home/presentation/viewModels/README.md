# 🏠 Home ViewModels - Gestión de PDFs

ViewModels para el feature **home** que manejan la lógica de PDFs usando **MVVM** con **TanStack Query**.

Los ViewModels encapsulan los hooks de TanStack Query para proporcionar una API limpia a los componentes.

## 📋 ViewModels Disponibles

### 1. `usePdfListViewModel` - Lista de PDFs

Maneja la lista de PDFs con paginación infinita usando TanStack Query.

```typescript
import { usePdfListViewModel } from '@features/home/presentation/viewModels/PdfListViewModel';
import { useAuthStore } from '@features/auth/domain/store/authStore';

function PdfListScreen() {
  const userId = useAuthStore((state) => state.user?.id);
  
  const {
    pdfs,           // Lista de PDFs (aplanada de todas las páginas)
    isLoading,      // Estado de carga
    hasMore,        // Hay más páginas
    error,          // Error si existe
    loadMore,       // Cargar más (paginación)
    refresh,        // Refrescar lista
  } = usePdfListViewModel(userId!, 10);

  return (
    <FlatList
      data={pdfs}
      renderItem={({ item }) => <PdfItem pdf={item} />}
      onEndReached={() => hasMore && loadMore()}
      refreshing={isLoading}
      onRefresh={refresh}
      ListFooterComponent={
        isLoading ? <ActivityIndicator /> : null
      }
    />
  );
}
```

### 2. `useUploadPdfViewModel` - Subir PDF

Maneja la subida de archivos PDF usando TanStack Query mutation.

```typescript
import { useUploadPdfViewModel } from '@features/home/presentation/viewModels/UploadPdfViewModel';
import * as DocumentPicker from 'expo-document-picker';

function UploadPdfButton() {
  const userId = useAuthStore((state) => state.user?.id);
  
  const {
    isUploading,      // Estado de subida
    uploadedPdf,      // PDF subido
    error,            // Error si existe
    uploadPdf,        // Función para subir (callback)
    uploadPdfAsync,   // Función para subir (async/await)
    reset,            // Resetear estado
  } = useUploadPdfViewModel(userId!);

  const handleUpload = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: 'application/pdf',
    });

    if (result.type === 'success') {
      // Opción 1: Con callback
      uploadPdf({
        fileName: result.name,
        totalPages: 100, // TODO: Calcular páginas reales
        fileSize: result.size,
        fileUri: result.uri,
      });
      
      // Opción 2: Con async/await
      try {
        const response = await uploadPdfAsync({
          fileName: result.name,
          totalPages: 100,
          fileSize: result.size,
          fileUri: result.uri,
        });
        console.log('PDF subido:', response.pdf);
      } catch (err) {
        console.error('Error:', err);
      }
    }
  };

  return (
    <View>
      <Button 
        onPress={handleUpload} 
        disabled={isUploading}
      >
        {isUploading ? 'Subiendo...' : 'Subir PDF'}
      </Button>
      
      {error && <Text>Error: {error.message}</Text>}
      {uploadedPdf && <Text>✓ Subido: {uploadedPdf.fileName}</Text>}
    </View>
  );
}
```

### 3. `usePdfViewerViewModel` - Visualizar PDF

Maneja la visualización y actualización de progreso de un PDF usando TanStack Query.

```typescript
import { usePdfViewerViewModel } from '@features/home/presentation/viewModels/PdfViewerViewModel';

function PdfViewerScreen({ route }) {
  const { pdfId } = route.params;
  const userId = useAuthStore((state) => state.user?.id);
  
  const {
    pdf,              // Datos del PDF
    isLoading,        // Cargando PDF
    isUpdating,       // Actualizando progreso
    isDeleting,       // Eliminando PDF
    error,            // Error si existe
    loadPdf,          // Cargar PDF
    updateProgress,   // Actualizar progreso
    deletePdf,        // Eliminar PDF
  } = usePdfViewerViewModel(userId!, pdfId);

  // TanStack Query carga automáticamente, no necesitas useEffect

  const handlePageChange = (page: number) => {
    if (pdf) {
      updateProgress(page, pdf.totalPages);
    }
  };

  const handleDelete = async () => {
    await deletePdf();
    navigation.goBack();
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorView error={error} />;
  if (!pdf) return null;

  return (
    <View>
      <PDFView
        source={{ uri: pdf.url }}
        onPageChange={handlePageChange}
      />
      
      <Text>Progreso: {pdf.progress}%</Text>
      <Text>Página: {pdf.currentPage} / {pdf.totalPages}</Text>
      
      <Button onPress={handleDelete} disabled={isDeleting}>
        Eliminar PDF
      </Button>
    </View>
  );
}
```

## 🎯 Características

### ✅ **MVVM con TanStack Query**
- ViewModels que encapsulan hooks de TanStack Query
- Cache automático y sincronización
- Invalidación inteligente de queries
- Manejo de loading, error y success states

### ✅ **Arquitectura en Capas**
```
Component (UI)
    ↓ usa
ViewModel (encapsula lógica de UI)
    ↓ usa
Hooks de TanStack Query (cache + estado)
    ↓ usa
UseCases (lógica de negocio)
    ↓ usa
Repository (abstracción)
    ↓ usa
DataSource (Firebase API)
```

### ✅ **UseCases Reutilizables**
- Los UseCases están en `common/`
- Se pueden usar en cualquier feature
- Totalmente independientes del estado UI

### ✅ **Clean Architecture**
```
home/                           (Feature específico)
└── presentation/
    ├── hooks/                 (TanStack Query hooks)
    └── viewModels/            (Encapsulan hooks)

common/                        (Reutilizable)
├── domain/
│   ├── usecases/             (Lógica de negocio)
│   └── repository/           (Contratos)
└── data/
    ├── datasource/           (Firebase)
    ├── repository/           (Implementaciones)
    └── models/               (Entidades)
```

## 🔄 Flujo de Datos

```
UI Component
    ↓ usa
ViewModel (encapsula hooks)
    ↓ usa
TanStack Query Hook (cache + estado)
    ↓ usa
UseCase (lógica de negocio)
    ↓ usa
Repository (abstracción)
    ↓ usa
DataSource (Firebase API)
```

**Ventajas de usar ViewModels:**
- Encapsulan la complejidad de TanStack Query
- API limpia y consistente para los componentes
- Fácil de testear y mockear
- Lógica de UI centralizada

## 📦 Reutilizar en Otros Features

Puedes crear nuevos hooks y ViewModels en otros features usando los mismos UseCases:

```typescript
// En otro feature (ej: profile/presentation/hooks/usePdfQueries.ts)
import { useQuery } from '@tanstack/react-query';
import { resolver } from '@main/domain/di/Register';
import { $ } from '@common/domain/di/Types';
import type { ListPdfsUseCase } from '@common/domain/usecases/ListPdfsUseCase';

export const useRecentPdfsQuery = (userId: string) => {
  const listPdfsUseCase = resolver.resolve<ListPdfsUseCase>($.ListPdfsUseCase);
  
  return useQuery({
    queryKey: ['recent-pdfs', userId],
    queryFn: () => listPdfsUseCase.execute(userId, { limit: 5 }),
    staleTime: 1000 * 60 * 2, // 2 minutos
  });
};

// ViewModel en profile
const useProfileViewModel = (userId: string) => {
  const { data, isLoading } = useRecentPdfsQuery(userId);
  
  return {
    recentPdfs: data?.pdfs || [],
    isLoading,
  };
};
```

## 🚀 Ventajas de Esta Arquitectura

1. **Separación de concerns**: UI, ViewModels, TanStack Query, UseCases
2. **Cache inteligente**: TanStack Query maneja el cache automáticamente
3. **Sincronización**: Invalidación automática tras mutations
4. **Testeable**: ViewModels, hooks y UseCases son fáciles de testear
5. **Reutilizable**: UseCases se usan en múltiples features
6. **MVVM mejorado**: ViewModels + TanStack Query + UseCases

## 📝 Notas

- **Los ViewModels encapsulan los hooks de TanStack Query**
- **TanStack Query maneja**: cache, loading, error, refetch, invalidación
- **Los ViewModels exponen**: API limpia y consistente para componentes
- **Los UseCases contienen**: lógica de negocio pura y reutilizable
- **No uses Zustand** para PDFs (TanStack Query ya maneja el estado)

## 🎓 Diferencias con Arquitectura Tradicional

**Sin ViewModels (solo hooks):**
```typescript
// Componente usa directamente el hook
const { data, isLoading } = usePdfListQuery(userId);
```

**Con ViewModels (encapsulan hooks):**
```typescript
// ViewModel encapsula el hook y puede agregar lógica adicional
const { pdfs, isLoading } = usePdfListViewModel(userId);
// pdfs ya está aplanado y listo para usar
```

**Beneficio:** Los componentes no necesitan saber sobre TanStack Query, solo usan el ViewModel.
