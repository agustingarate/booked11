# Theme System Usage Examples

This guide contains practical examples of how to use the theme system in different scenarios.

## 📱 Components with StyleSheet

### Card Component

```tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, radius, shadows } from '@common/presentation/theme';

interface CardProps {
  title: string;
  description: string;
  isDark?: boolean;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  isDark = false,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDark ? colors.surfaceCard : colors.surfaceLight,
        },
      ]}>
      <Text
        style={[
          styles.title,
          { color: isDark ? colors.textPrimaryDark : colors.textPrimaryLight },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.description,
          {
            color: isDark
              ? colors.textSecondaryDark
              : colors.textSecondaryLight,
          },
        ]}>
        {description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing[4],
    borderRadius: radius.lg,
    ...shadows.md,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: spacing[2],
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
  },
});
```

## 🎨 Components with NativeWind

### Button Component

```tsx
import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { cn } from '@common/utils'; // cn function to combine classes

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  isLoading?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  isLoading = false,
  disabled = false,
}) => {
  const baseClasses =
    'py-3 px-6 rounded-lg items-center justify-center active:scale-95';

  const variantClasses = {
    primary: 'bg-primary',
    secondary: 'bg-surface-dark dark:bg-surface-light',
    outline: 'border-2 border-primary bg-transparent',
  };

  const textClasses = {
    primary: 'text-white',
    secondary: 'text-white dark:text-slate-900',
    outline: 'text-primary',
  };

  return (
    <TouchableOpacity
      className={cn(
        baseClasses,
        variantClasses[variant],
        disabled && 'opacity-50'
      )}
      onPress={onPress}
      disabled={disabled || isLoading}>
      {isLoading ? (
        <ActivityIndicator
          color={variant === 'primary' ? 'white' : undefined}
        />
      ) : (
        <Text className={cn('text-base font-bold', textClasses[variant])}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};
```

### Document Card (Based on Stitch)

```tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface DocumentCardProps {
  title: string;
  size: string;
  date: string;
  progress?: number;
  thumbnail?: string;
  hasAI?: boolean;
  onPress: () => void;
}

export const DocumentCard: React.FC<DocumentCardProps> = ({
  title,
  size,
  date,
  progress,
  thumbnail,
  hasAI,
  onPress,
}) => {
  return (
    <TouchableOpacity
      className="flex-row items-center p-3 gap-4 rounded-2xl bg-white dark:bg-surface-dark border border-transparent dark:border-slate-800 hover:border-primary/30 shadow-sm active:scale-[0.99]"
      onPress={onPress}>
      {/* Thumbnail */}
      <View className="relative shrink-0 h-16 w-16 rounded-lg bg-gray-100 dark:bg-slate-800 overflow-hidden">
        {thumbnail ? (
          <Image
            source={{ uri: thumbnail }}
            className="w-full h-full opacity-80"
          />
        ) : (
          <View className="w-full h-full items-center justify-center">
            <MaterialIcons
              name="picture-as-pdf"
              size={36}
              color="#94a3b8"
            />
          </View>
        )}

        {hasAI && (
          <View className="absolute bottom-0 right-0 bg-purple-500 px-1 py-0.5 rounded-tl-md flex-row items-center gap-0.5">
            <MaterialIcons
              name="auto-awesome"
              size={8}
              color="white"
            />
            <Text className="text-white text-[8px] font-bold">AI</Text>
          </View>
        )}

        {!hasAI && (
          <View className="absolute bottom-0 right-0 bg-red-500 px-1 py-0.5 rounded-tl-md">
            <Text className="text-white text-[8px] font-bold">PDF</Text>
          </View>
        )}
      </View>

      {/* Info */}
      <View className="flex-1 min-w-0">
        <Text
          className="text-base font-semibold text-slate-900 dark:text-white leading-tight mb-1"
          numberOfLines={1}>
          {title}
        </Text>
        <View className="flex-row items-center gap-2">
          <Text className="text-xs text-slate-500 dark:text-slate-400">
            {size}
          </Text>
          <View className="w-1 h-1 rounded-full bg-slate-400" />
          <Text className="text-xs text-slate-500 dark:text-slate-400">
            {date}
          </Text>
        </View>

        {progress !== undefined && (
          <View className="mt-2">
            <View className="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <View
                className="h-full bg-primary rounded-full"
                style={{ width: `${progress}%` }}
              />
            </View>
          </View>
        )}
      </View>

      {/* More Button */}
      <TouchableOpacity className="shrink-0 p-2 rounded-full">
        <MaterialIcons
          name="more-vert"
          size={22}
          color="#94a3b8"
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
```

## 🎯 Components with Tokens + StyleSheet

### Screen Container

```tsx
import React from 'react';
import { ScrollView, View, StyleSheet, useColorScheme } from 'react-native';
import { colors, spacing } from '@common/presentation/theme';

interface ScreenContainerProps {
  children: React.ReactNode;
  withPadding?: boolean;
}

export const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  withPadding = true,
}) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <ScrollView
      style={[
        styles.container,
        {
          backgroundColor: isDark
            ? colors.backgroundDark
            : colors.backgroundLight,
        },
      ]}>
      <View style={[styles.content, withPadding && styles.withPadding]}>
        {children}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  withPadding: {
    padding: spacing[4],
  },
});
```

### Responsive Card Grid

```tsx
import React from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import { spacing } from '@common/presentation/theme';

interface CardGridProps<T> {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string;
}

export function CardGrid<T>({
  data,
  renderItem,
  keyExtractor,
}: CardGridProps<T>) {
  const { width } = Dimensions.get('window');
  const numColumns = width >= 768 ? 3 : 2;

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.cardWrapper}>{renderItem(item)}</View>
      )}
      keyExtractor={keyExtractor}
      numColumns={numColumns}
      key={numColumns} // Important: change key when numColumns changes
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing[4],
  },
  row: {
    gap: spacing[4],
  },
  cardWrapper: {
    flex: 1,
  },
});
```

## 🌗 Dark Mode with NativeWind

### Theme Display

With NativeWind, dark mode is handled automatically based on the system. Here's a component that shows the current state:

```tsx
import React from 'react';
import { View, Text, useColorScheme } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export const ThemeIndicator: React.FC = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View className="flex-row items-center gap-2 p-3 rounded-xl bg-surface-light dark:bg-surface-dark">
      <MaterialIcons
        name={isDark ? 'dark-mode' : 'light-mode'}
        size={24}
        color={isDark ? '#fff' : '#0f172a'}
      />
      <Text className="text-base font-medium text-slate-900 dark:text-white">
        {isDark ? 'Dark Mode' : 'Light Mode'}
      </Text>
    </View>
  );
};
```

**Note**: NativeWind automatically detects the system theme. It's not necessary to change it manually from the app.

## 📄 PDF Reader Header (Based on Stitch)

```tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface PDFHeaderProps {
  title: string;
  subtitle: string;
  onBack: () => void;
  onSearch: () => void;
}

export const PDFHeader: React.FC<PDFHeaderProps> = ({
  title,
  subtitle,
  onBack,
  onSearch,
}) => {
  return (
    <View className="absolute top-0 left-0 right-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-white/5 px-4 pt-12 pb-3">
      <View className="flex-row items-center justify-between">
        <TouchableOpacity
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 active:scale-95"
          onPress={onBack}>
          <MaterialIcons
            name="arrow-back-ios"
            size={20}
            color="white"
          />
        </TouchableOpacity>

        <View className="flex-col items-center">
          <Text className="text-white text-base font-bold tracking-tight">
            {title}
          </Text>
          <Text className="text-xs text-gray-400 font-normal">{subtitle}</Text>
        </View>

        <TouchableOpacity
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 active:scale-95"
          onPress={onSearch}>
          <MaterialIcons
            name="search"
            size={24}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
```

## 🎨 Bottom Navigation (Based on Stitch)

```tsx
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface TabItem {
  id: string;
  icon: string;
  label: string;
}

interface BottomNavProps {
  tabs: TabItem[];
  activeTab: string;
  onTabPress: (tabId: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  tabs,
  activeTab,
  onTabPress,
}) => {
  return (
    <View className="fixed bottom-0 left-0 w-full z-50 bg-white/95 dark:bg-[#111822]/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 pb-6 pt-2">
      <View className="flex-row justify-around items-center h-16 px-2">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;

          return (
            <TouchableOpacity
              key={tab.id}
              className="flex flex-col items-center justify-center w-full gap-1"
              onPress={() => onTabPress(tab.id)}>
              {isActive ? (
                <View className="bg-primary/10 px-4 py-1 rounded-full">
                  <MaterialIcons
                    name={tab.icon as any}
                    size={24}
                    color="#136dec"
                  />
                </View>
              ) : (
                <MaterialIcons
                  name={tab.icon as any}
                  size={24}
                  color="#94a3b8"
                />
              )}
              <Text
                className={`text-[10px] ${
                  isActive
                    ? 'font-bold text-primary'
                    : 'font-medium text-slate-400 dark:text-slate-500'
                }`}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

// Usage:
// const tabs = [
//   { id: 'library', icon: 'grid-view', label: 'Library' },
//   { id: 'favorites', icon: 'favorite', label: 'Favorites' },
//   { id: 'ai', icon: 'smart-toy', label: 'AI Tools' },
//   { id: 'settings', icon: 'settings', label: 'Settings' },
// ];
```

## 💡 Tips

### 1. Use commonStyles for quick components

```tsx
import { View, TouchableOpacity } from 'react-native';
import { commonStyles } from '@common/presentation/theme';

// Quick FAB
<TouchableOpacity style={commonStyles.fab}>
  <Icon name="add" />
</TouchableOpacity>

// Quick Card
<View style={commonStyles.card}>
  {/* content */}
</View>
```

### 2. Combine NativeWind with inline styles

```tsx
<View
  className="p-4 rounded-lg"
  style={{ backgroundColor: colors.primary }}>
  <Text className="text-white font-bold">Style combination</Text>
</View>
```

### 3. Useful hooks for theme

```tsx
import { useColorScheme } from 'react-native';
import { getColorByTheme } from '@common/presentation/theme';

function MyComponent() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const bgColor = getColorByTheme(
    isDark,
    colors.backgroundLight,
    colors.backgroundDark
  );

  return <View style={{ backgroundColor: bgColor }} />;
}
```

### 4. Responsive with Dimensions

```tsx
import { Dimensions, StyleSheet } from 'react-native';
import { spacing } from '@common/presentation/theme';

function MyComponent() {
  const { width } = Dimensions.get('window');

  const containerWidth =
    width < 380 ? '100%' : width < 768 ? '90%' : width < 1024 ? '80%' : '70%';

  return (
    <View style={[styles.container, { width: containerWidth }]}>
      {/* content */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing[4],
  },
});
```
