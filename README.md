# RN Layout - Plantilla de Proyecto React Native

## 📋 Descripción del Proyecto

> **Nota para desarrolladores:** Esta sección debe ser personalizada según el proyecto específico. A continuación se muestra un ejemplo de cómo completarla.

### Ejemplo de Descripción

**RN Layout** es una aplicación móvil desarrollada con React Native y Expo que proporciona una base sólida y escalable para construir aplicaciones móviles modernas. Esta plantilla incluye una arquitectura limpia basada en Clean Architecture, sistema de autenticación completo, gestión de estado con Zustand, y todas las herramientas necesarias para comenzar un proyecto profesional.

La aplicación permite a los usuarios:

- Autenticarse de forma segura
- Navegar entre diferentes secciones mediante un sistema de tabs
- Gestionar su perfil y configuraciones
- Acceder a funcionalidades principales desde la pantalla de inicio

### Cómo Completar Esta Sección

Al personalizar el README para tu proyecto, reemplaza el ejemplo anterior con:

1. **Nombre y propósito real de tu aplicación**

   ```markdown
   **Mi Aplicación** es una aplicación móvil que permite a los usuarios [descripción del propósito principal].
   ```

2. **Funcionalidades principales**
   - Lista las características clave de tu aplicación
   - Explica el valor que proporciona a los usuarios

3. **Público objetivo**
   - Describe quién es el usuario final
   - Menciona casos de uso principales

4. **Estado del proyecto**
   - Versión actual
   - Estado de desarrollo (en desarrollo, beta, producción)

---

## 🏗️ Arquitectura y Estructura del Proyecto

### Tipo de Arquitectura

Este proyecto utiliza **Clean Architecture** (Arquitectura Limpia) combinada con principios de **Feature-Based Architecture**. La arquitectura se organiza en capas que separan las responsabilidades:

1. **Presentation Layer (Capa de Presentación)**
   - Componentes React, pantallas, ViewModels
   - Maneja la UI y la interacción del usuario

2. **Domain Layer (Capa de Dominio)**
   - Casos de uso (Use Cases)
   - Interfaces de repositorios
   - Lógica de negocio pura
   - Stores de estado (Zustand)

3. **Data Layer (Capa de Datos)**
   - Implementaciones de repositorios
   - Data sources (API, Base de datos)
   - Modelos de datos

### Estructura de Directorios

```
rn-layout/
├── src/
│   ├── app/                    # Expo Router - Rutas de la aplicación
│   │   ├── (protected)/        # Rutas protegidas (requieren autenticación)
│   │   │   ├── (tabs)/         # Navegación por tabs
│   │   │   │   ├── home/
│   │   │   │   ├── profile/
│   │   │   │   └── settings/
│   │   │   └── list/           # Otras rutas protegidas
│   │   ├── auth/               # Rutas de autenticación
│   │   │   ├── login.tsx
│   │   │   └── register.tsx
│   │   └── _layout.tsx        # Layout raíz
│   │
│   ├── features/               # Features organizados por funcionalidad
│   │   ├── auth/               # Feature de autenticación
│   │   │   ├── data/           # Capa de datos
│   │   │   │   ├── datasource/   # Fuentes de datos (API, DB)
│   │   │   │   ├── models/       # Modelos de datos
│   │   │   │   └── repository/    # Implementaciones de repositorios
│   │   │   ├── domain/           # Capa de dominio
│   │   │   │   ├── di/           # Dependency Injection
│   │   │   │   ├── repository/   # Interfaces de repositorios
│   │   │   │   ├── store/        # Estado global (Zustand)
│   │   │   │   └── usecases/     # Casos de uso
│   │   │   └── presentation/     # Capa de presentación
│   │   │       ├── hooks/        # Custom hooks
│   │   │       ├── screens/      # Pantallas
│   │   │       └── viewModels/   # ViewModels
│   │   ├── common/               # Feature común (utilidades compartidas)
│   │   ├── home/                 # Feature de inicio
│   │   ├── profile/              # Feature de perfil
│   │   └── settings/             # Feature de configuración
│   │
│   └── main/                    # Configuración principal de la app
│       ├── config/               # Configuraciones (Sentry, etc.)
│       ├── domain/               # Dominio principal
│       │   ├── di/               # Registro de dependencias
│       │   └── store/            # Store global
│       └── presentation/         # Presentación principal
│
├── assets/                      # Recursos estáticos (imágenes, fuentes)
├── app.config.js                # Configuración de Expo
├── eas.json                     # Configuración de EAS Build
├── package.json                 # Dependencias del proyecto
├── tsconfig.json                # Configuración de TypeScript
└── tailwind.config.js           # Configuración de TailwindCSS
```

### Tipos de Archivos y su Propósito

#### Archivos de Configuración

- **`app.config.js`**: Configuración de Expo (nombre, iconos, esquemas, etc.)
- **`eas.json`**: Configuración de builds para EAS (Expo Application Services)
- **`tsconfig.json`**: Configuración de TypeScript y path aliases
- **`tailwind.config.js`**: Configuración de TailwindCSS/NativeWind
- **`babel.config.js`**: Configuración de Babel para transpilación
- **`metro.config.js`**: Configuración del bundler Metro

#### Archivos de Código

- **`*.tsx`**: Componentes React con TypeScript
- **`*.ts`**: Código TypeScript (utilidades, tipos, lógica)
- **`*Store.ts`**: Stores de Zustand para gestión de estado
- **`*Repository.ts`**: Interfaces e implementaciones de repositorios
- **`*UseCase.ts`**: Casos de uso (lógica de negocio)
- **`*ViewModel.ts`**: ViewModels que conectan UI con lógica de negocio
- **`*Api.ts`**: Clientes HTTP para APIs

---

## 🎯 Features

### Auth (Autenticación)

El feature de autenticación maneja todo lo relacionado con el login, registro y gestión de sesiones de usuario.

#### Estructura

```
auth/
├── data/
│   ├── datasource/
│   │   ├── api/AuthApi.ts          # Cliente API para autenticación
│   │   └── database/AuthDatabase.ts # Persistencia local (si aplica)
│   ├── models/
│   │   └── LoginResponse.ts        # Modelo de respuesta del login
│   └── repository/
│       └── AuthRepository.ts       # Implementación del repositorio
├── domain/
│   ├── di/                         # Dependency Injection
│   ├── repository/                  # Interface del repositorio
│   ├── store/
│   │   └── authStore.ts            # Store de Zustand para estado de auth
│   └── usecases/
│       └── LoginUseCase.ts         # Caso de uso para login
└── presentation/
    ├── hooks/
    │   └── useLoginMutation.ts      # Hook para mutaciones de login
    ├── screens/
    │   └── login/
    │       ├── LoginScreen.tsx      # Pantalla de login
    │       └── WelcomeScreen.tsx    # Pantalla de bienvenida
    └── viewModels/
        └── LoginViewModel.ts        # ViewModel para login
```

#### Funcionalidades

- **Login**: Autenticación de usuarios con email y contraseña
- **Registro**: Creación de nuevas cuentas de usuario
- **Gestión de sesión**: Persistencia de tokens y datos de usuario
- **Logout**: Cierre de sesión y limpieza de datos

#### Estado de Autenticación

El estado se gestiona mediante Zustand con persistencia en AsyncStorage:

```typescript
// El store incluye:
- token: Token de autenticación
- refreshToken: Token de refresco
- user: Información del usuario
- isAuthenticated: Estado de autenticación
```

### Common (Común)

El feature común contiene utilidades, componentes y funcionalidades compartidas entre todas las features de la aplicación.

#### Estructura

```
common/
├── data/
│   ├── datasource/
│   │   └── api/                    # APIs compartidas (Users, Events, etc.)
│   ├── http/
│   │   ├── HttpClient.ts           # Cliente HTTP base con Axios
│   │   └── AxiosInterceptor.ts     # Interceptores de Axios
│   ├── models/                     # Modelos de datos compartidos
│   └── repository/                 # Implementaciones de repositorios
├── domain/
│   ├── hooks/
│   │   └── i18n.ts                 # Hook para internacionalización
│   ├── interfaces/
│   │   ├── HttpClient.ts           # Interface del cliente HTTP
│   │   └── Resolver.ts             # Interface para DI
│   ├── repository/                  # Interfaces de repositorios
│   ├── store/
│   │   └── AppSlice.ts             # Slice global de la app
│   └── usecases/                   # Casos de uso compartidos
├── hooks/
│   ├── useCalendarSelector.tsx     # Hook para selector de calendario
│   └── useDocumentPicker.tsx       # Hook para selección de documentos
├── presentation/
│   ├── components/
│   │   └── molecules/              # Componentes moleculares
│   ├── i18n.ts                     # Configuración de i18next
│   ├── locale/
│   │   └── es.json                 # Traducciones en español
│   ├── providers/
│   │   └── QueryClientProvider.tsx # Provider de React Query
│   └── theme/
│       └── unistyles.ts            # Configuración de temas
└── utils/                          # Utilidades varias
```

#### Funcionalidades Principales

- **HttpClient**: Cliente HTTP centralizado con interceptores para tokens
- **Internacionalización (i18n)**: Sistema de traducciones con i18next
- **React Query**: Configuración para gestión de estado del servidor
- **Componentes compartidos**: Componentes reutilizables (Toast, etc.)
- **Utilidades**: Funciones helper para fechas, validaciones, etc.
- **Hooks personalizados**: Hooks reutilizables para funcionalidades comunes

### Home (Inicio)

El feature de home contiene las pantallas principales de la aplicación que se muestran después del login.

#### Estructura

```
home/
└── presentation/
    ├── HomeScreen.tsx              # Pantalla principal de inicio
    ├── HomeListScreen.tsx          # Pantalla de lista
    └── HomeDetailScreen.tsx        # Pantalla de detalle
```

#### Funcionalidades

- **Pantalla principal**: Primera pantalla visible después del login
- **Navegación**: Acceso a otras secciones de la aplicación
- **Contenido principal**: Muestra el contenido principal de la app

---

## 🛠️ Tecnologías Utilizadas

### Core

- **React Native** (`0.81.5`): Framework para desarrollo móvil multiplataforma
- **React** (`19.1.0`): Biblioteca para construcción de interfaces
- **Expo** (`~54.0.27`): Framework y herramientas para React Native
- **TypeScript** (`~5.9.2`): Superset de JavaScript con tipado estático

### Navegación y Routing

- **Expo Router** (`~6.0.17`): Sistema de routing basado en archivos
- **React Navigation** (`^7.1.8`): Biblioteca de navegación
  - `@react-navigation/bottom-tabs` (`^7.4.0`): Navegación por tabs
  - `@react-navigation/elements` (`^2.6.3`): Elementos de navegación

### Gestión de Estado

- **Zustand** (`^5.0.9`): Biblioteca ligera para gestión de estado
- **TanStack Query** (`^5.90.12`): Gestión de estado del servidor y caché

### Estilos

- **NativeWind** (`^4.2.1`): TailwindCSS para React Native
- **TailwindCSS** (`^3.4.17`): Framework de utilidades CSS
- **React Native Unistyles** (`^3.0.19`): Sistema de estilos type-safe

### HTTP y Networking

- **Axios** (`^1.13.2`): Cliente HTTP para peticiones a APIs

### Internacionalización

- **i18next** (`^25.7.2`): Framework de internacionalización
- **react-i18next** (`^16.4.1`): Integración de i18next con React

### Dependency Injection

- **Inversify** (`^7.10.6`): Contenedor de inyección de dependencias

### Utilidades

- **date-fns** (`^4.1.0`): Utilidades para manipulación de fechas
- **date-fns-tz** (`^3.2.0`): Soporte de zonas horarias para date-fns
- **zod** (`^4.1.13`): Validación de esquemas TypeScript-first

### Expo SDK

- `expo-constants`: Constantes del entorno de Expo
- `expo-device`: Información del dispositivo
- `expo-file-system`: Sistema de archivos
- `expo-font`: Carga de fuentes personalizadas
- `expo-haptics`: Feedback háptico
- `expo-image`: Componente de imagen optimizado
- `expo-linking`: Deep linking
- `expo-notifications`: Notificaciones push
- `expo-print`: Impresión de documentos
- `expo-sharing`: Compartir archivos
- `expo-splash-screen`: Pantalla de splash
- `expo-status-bar`: Barra de estado
- `expo-symbols`: Símbolos del sistema
- `expo-system-ui`: UI del sistema
- `expo-web-browser`: Navegador web

### UI y Componentes

- `@expo/vector-icons`: Iconos vectoriales
- `react-native-toast-message` (`^2.3.3`): Mensajes toast
- `react-native-safe-area-context` (`5.4.0`): Manejo de áreas seguras
- `react-native-gesture-handler` (`~2.28.0`): Gestos nativos
- `react-native-reanimated` (`~4.2.1`): Animaciones de alto rendimiento
- `react-native-screens` (`~4.16.0`): Pantallas nativas optimizadas

### Persistencia

- `@react-native-async-storage/async-storage` (`^2.2.0`): Almacenamiento local asíncrono

### Desarrollo

- **ESLint** (`^9.25.0`): Linter para JavaScript/TypeScript
- **Prettier**: Formateador de código (plugin para TailwindCSS)

---

## 🔐 Variables de Entorno

### Configuración Inicial

El proyecto utiliza variables de entorno para configurar diferentes aspectos de la aplicación, especialmente URLs de APIs según el entorno (desarrollo, UAT, producción).

### Crear Archivo de Variables de Entorno

1. **Copia el archivo de ejemplo:**

   ```bash
   cp .env.local.example .env.local
   ```

2. **Edita `.env.local`** con tus valores reales:
   ```env
   EXPO_PUBLIC_EXAMPLE=valor_ejemplo
   EXPO_PUBLIC_UAT_API_URL="https://api-uat.tudominio.com"
   EXPO_PUBLIC_PROD_API_URL="https://api.tudominio.com"
   EXPO_PUBLIC_STG_API_URL="https://api-stg.tudominio.com"
   ```

### Variables Disponibles

- **`EXPO_PUBLIC_EXAMPLE`**: Variable de ejemplo (reemplazar según necesidad)
- **`EXPO_PUBLIC_UAT_API_URL`**: URL de la API para entorno UAT (User Acceptance Testing)
- **`EXPO_PUBLIC_PROD_API_URL`**: URL de la API para entorno de producción
- **`EXPO_PUBLIC_STG_API_URL`**: URL de la API para entorno de staging

### Importante

- Todas las variables de entorno deben comenzar con `EXPO_PUBLIC_` para que sean accesibles en el código de la aplicación
- El archivo `.env.local` está en `.gitignore` y no se sube al repositorio
- Las variables se cargan automáticamente al iniciar la aplicación con Expo
- El archivo `.env.local.example` sirve como plantilla y documentación de las variables necesarias

### Uso en el Código

Las variables se acceden mediante `process.env.EXPO_PUBLIC_*`:

```typescript
const apiUrl = process.env.EXPO_PUBLIC_STG_API_URL;
```

### Configuración por Entorno

El archivo `app.config.js` utiliza la variable `EXPO_PUBLIC_RELEASE_CHANNEL` (definida en `eas.json`) para seleccionar automáticamente la URL de API correcta según el entorno de build.

El archivo de configuración de variables de entorno `.env.local` proporciona las variables de entorno solo para builds y compilaciones locales. En caso de estar utilizando el servicio remoto de expo (EAS), estas variables deben configurase alli también.

---

## 🚀 Comandos del Proyecto

### Inicialización

```bash
# Instalar dependencias
npm install

# O si usas pnpm
pnpm install
```

### Desarrollo

```bash
# Iniciar el servidor de desarrollo
npm start
# o
npx expo start

# Iniciar en modo web
npm run web

# Iniciar en Android
npm run android

# Iniciar en iOS
npm run ios
```

### Testing

```bash
# Ejecutar linter
npm run lint
```

> **Nota**: El proyecto actualmente no incluye tests unitarios configurados. Se recomienda agregar Jest y React Native Testing Library para testing.

### Build y Compilación

#### Desarrollo

```bash
# Build de desarrollo para Android
eas build --profile development --platform android

# Build de desarrollo para iOS (simulador)
eas build --profile simulator --platform ios

# Build de desarrollo para iOS (dispositivo)
eas build --profile development --platform ios
```

#### Preview/Staging

```bash
# Build de preview (staging)
eas build --profile preview --platform android
eas build --profile preview --platform ios

# Build de preview UAT
eas build --profile uat-preview --platform android
eas build --profile uat-preview --platform ios
```

#### Producción

```bash
# Build de producción
eas build --profile production --platform android
eas build --profile production --platform ios
```

### Otros Comandos

```bash
# Resetear el proyecto (mueve código a app-example)
npm run reset-project
```

---

## ⚙️ Configuración de `app.config.js`

El archivo `app.config.js` contiene la configuración principal de Expo. A continuación se detallan los valores que debes modificar según tu proyecto:

### Valores Básicos

```javascript
expo: {
  name: 'rn-layout',              // ⚠️ Cambiar: Nombre de la aplicación
  slug: 'rn-layout',             // ⚠️ Cambiar: Slug único del proyecto
  version: '1.0.0',               // ⚠️ Cambiar: Versión de la app
  scheme: 'rnlayout',             // ⚠️ Cambiar: Esquema para deep linking
}
```

### Configuración iOS

```javascript
ios: {
  bundleIdentifier: 'com.rnlayout.app',  // ⚠️ Cambiar: Identificador único iOS
  appleTeamId: '',                       // ⚠️ Agregar: ID del equipo de Apple
}
```

**Valores a modificar:**

- `bundleIdentifier`: Debe ser único (formato: `com.tudominio.tuapp`)
- `appleTeamId`: ID de tu equipo de desarrollador de Apple (obtenible en Apple Developer)

### Configuración Android

```javascript
android: {
  package: 'com.rnlayout.app',            // ⚠️ Cambiar: Package name único
}
```

**Valores a modificar:**

- `package`: Debe ser único (formato: `com.tudominio.tuapp`)

### Configuración de Iconos y Splash

```javascript
icon: './assets/images/icon.png',        // ⚠️ Reemplazar: Icono de la app
ios: {
  // ...
},
android: {
  adaptiveIcon: {
    foregroundImage: './assets/images/android-icon-foreground.png',
    backgroundImage: './assets/images/android-icon-background.png',
    monochromeImage: './assets/images/android-icon-monochrome.png',
  },
},
plugins: [
  ['expo-splash-screen', {
    image: './assets/images/splash-icon.png',  // ⚠️ Reemplazar: Imagen de splash
  }],
]
```

**Archivos a reemplazar:**

- `./assets/images/icon.png`: Icono principal (1024x1024px)
- `./assets/images/android-icon-foreground.png`: Icono Android foreground
- `./assets/images/android-icon-background.png`: Icono Android background
- `./assets/images/android-icon-monochrome.png`: Icono Android monocromo
- `./assets/images/splash-icon.png`: Imagen de splash screen

### Configuración EAS

```javascript
extra: {
  eas: {
    projectId: '',  // ⚠️ Agregar: Se genera automáticamente al crear proyecto en EAS
  },
}
```

**Cómo obtener el projectId:**

1. Ejecuta `eas init` en el proyecto
2. O crea un proyecto en [expo.dev](https://expo.dev)
3. El `projectId` se agregará automáticamente

### Configuración de Owner

```javascript
owner: '',  // ⚠️ Agregar: Usuario u organización de Expo
```

**Valor a modificar:**

- `owner`: Tu username de Expo o nombre de organización

### Configuración de Runtime Version

```javascript
runtimeVersion: {
  policy: 'appVersion',  // Usa la versión de la app como runtime version
},
```

Esta configuración es importante para OTA (Over-The-Air) updates. Mantén `appVersion` para que coincida con la versión de la app.

### Checklist de Configuración

Antes de hacer un build, asegúrate de haber modificado:

- [ ] `name`: Nombre de la aplicación
- [ ] `slug`: Slug único del proyecto
- [ ] `version`: Versión inicial (ej: "1.0.0")
- [ ] `scheme`: Esquema para deep linking
- [ ] `ios.bundleIdentifier`: Identificador único iOS
- [ ] `ios.appleTeamId`: ID del equipo de Apple (si aplica)
- [ ] `android.package`: Package name único Android
- [ ] `owner`: Usuario u organización de Expo
- [ ] `extra.eas.projectId`: ID del proyecto EAS
- [ ] Iconos y splash screen en `./assets/images/`

---

## 📱 Path Aliases

El proyecto utiliza path aliases configurados en `tsconfig.json` para facilitar las importaciones:

```typescript
// En lugar de:
import { something } from '../../../features/common/...';

// Puedes usar:
import { something } from '@common/...';
```

### Aliases Disponibles

- `@app/*` → `./src/app/*`
- `@main/*` → `./src/main/*`
- `@common/*` → `./src/features/common/*`
- `@home/*` → `./src/features/home/*`
- `@profile/*` → `./src/features/profile/*`
- `@settings/*` → `./src/features/settings/*`
- `@features/*` → `./src/features/*`

### Ejemplo de Uso

```typescript
import { useAuthStore } from '@features/auth/domain/store/authStore';
import { useI18n } from '@common/domain/hooks/i18n';
import { HomeScreen } from '@home/presentation/HomeScreen';
```

---

## 🔄 Dependency Injection

El proyecto utiliza **Inversify** para la inyección de dependencias, siguiendo el patrón de Clean Architecture.

### Registro de Dependencias

Las dependencias se registran en:

- `src/main/domain/di/Register.ts`: Registro principal
- `src/features/*/domain/di/Register.ts`: Registro por feature

### Uso del Resolver

```typescript
import { useResolver } from '@common/domain/hooks/Resolver';

const MyComponent = () => {
  const resolver = useResolver();
  const httpClient = resolver.resolve($.HttpClient);
  // ...
};
```

---

## 📦 EAS Build Profiles

El archivo `eas.json` define diferentes perfiles de build para distintos entornos:

- **development**: Builds de desarrollo con development client
- **simulator**: Builds para simulador iOS
- **preview**: Builds de preview/staging
- **uat-preview**: Builds de preview para UAT
- **production-preview**: Builds de preview para producción
- **production**: Builds de producción final

Cada perfil puede tener diferentes configuraciones de:

- Entorno (development, preview, production)
- Canal de actualización OTA
- Variables de entorno
- Configuración de plataforma específica

---

## 🌐 Internacionalización (i18n)

El proyecto utiliza **i18next** para la internacionalización. Los archivos de traducción se encuentran en:

```
src/features/common/presentation/locale/
└── es.json
```

### Agregar Nuevos Idiomas

1. Crea un nuevo archivo JSON en `src/features/common/presentation/locale/` (ej: `en.json`)
2. Configura el idioma en `src/features/common/presentation/i18n.ts`

### Uso en Componentes

```typescript
import { useI18n } from '@common/domain/hooks/i18n';

const MyComponent = () => {
  const { t } = useI18n();
  return <Text>{t('miClave.traduccion')}</Text>;
};
```

---

## 🎨 Estilos (Design System)

- **NativeWind** + **Tailwind** con tokens centralizados en `src/main/theme.ts`.
- Clases tipográficas semánticas sin `@apply` ni plugins web-only (`tailwind.typography.plugin.js`).
- Usa fontFamily por peso (sin `font-weight` con fuentes custom).

### Tokens Clave
- Colores: `primary`, `secondary`, `success`, `warning`, `error`, `info`, `disabled`, `background`, `surface`, `text`, `border`.
- Tipografía: familias `lexend-*` y `noto-*`, tamaños `xs..7xl`, line-height `tight|snug|normal|relaxed`, letterSpacing `tighter..wider`.
- Layout: `spacing`, `borderRadius`, `shadows`, `opacity`.

### Tipografía Reutilizable (className)

```tsx
<View className="p-4 bg-surface-muted">
  <Text className="text-display-2 text-primary-700">Título principal</Text>
  <Text className="text-title-md text-text-secondary mt-2">Subtítulo</Text>
  <Text className="text-body mt-3 text-text-primary">
    Texto de cuerpo con tipografía Noto Sans.
  </Text>
  <Text className="text-label mt-4 text-text-muted">Etiqueta</Text>
  <Pressable className="mt-6 bg-primary-500 rounded-lg px-4 py-3">
    <Text className="text-button text-text-inverse">Acción</Text>
  </Pressable>
</View>
```

Clases disponibles (principales):  
`text-display-1|2`, `text-title-lg|md|sm`, `text-subtitle`,  
`text-body-lg|text-body|text-body-sm|text-body-xs`,  
`text-label-lg|text-label|text-label-sm`, `text-caption`, `text-overline`,  
`text-button-lg|text-button|text-button-sm`, `text-lead`, `text-muted`, `text-inverse`, `text-code`, `text-code-lg`.

---

## 📝 Convenciones de Código

### Nomenclatura

- **Componentes**: PascalCase (ej: `LoginScreen.tsx`)
- **Hooks**: camelCase con prefijo "use" (ej: `useLoginMutation.ts`)
- **Utilidades**: camelCase (ej: `dateUtils.ts`)
- **Stores**: camelCase con sufijo "Store" (ej: `authStore.ts`)
- **Use Cases**: PascalCase con sufijo "UseCase" (ej: `LoginUseCase.ts`)
- **ViewModels**: PascalCase con sufijo "ViewModel" (ej: `LoginViewModel.ts`)

### Estructura de Features

Cada feature debe seguir la estructura:

```
feature/
├── data/          # Capa de datos
├── domain/        # Capa de dominio
└── presentation/  # Capa de presentación
```

---

## 🐛 Debugging

### React Native Debugger

El proyecto es compatible con React Native Debugger y las herramientas de desarrollo de React.

### Logs

Utiliza `console.log` para debugging. En producción, considera usar una librería de logging como Sentry (ya configurada en el proyecto).

---

## 📚 Recursos Adicionales

### Documentación Oficial

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Expo Router Documentation](https://docs.expo.dev/router/introduction/)
- [Zustand Documentation](https://zustand-demo.pmnd.rs/)
- [TanStack Query Documentation](https://tanstack.com/query/latest)

### Comunidad

- [Expo Discord](https://chat.expo.dev/)
- [React Native Community](https://reactnative.dev/community/overview)

---

## 📄 Licencia

[Especificar la licencia del proyecto]

---

## 👥 Contribuidores

[Lista de contribuidores o información de contacto]

---

## 📞 Soporte

[Información de contacto para soporte o preguntas]

---

**Última actualización**: [Fecha de última actualización del README]
