import { ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import type { PDFItem } from './components/PDFGrid';
import PDFGrid from './components/PDFGrid';

import { useI18n } from '@common/domain/hooks/i18n';

// Datos de ejemplo - esto debería venir de un estado o API
const MOCK_PDFS: PDFItem[] = [
  {
    id: '1',
    title: 'Clean Code',
    description: 'Robert C. Martin',
    progress: {
      numberProgress: 0.85,
      semanticProgress: '85%',
    },
  },
  {
    id: '2',
    title: 'The Pragmatic Programmer',
    description: 'David Thomas & Andrew Hunt',
    progress: {
      numberProgress: 0.42,
      semanticProgress: '42%',
    },
  },
  {
    id: '3',
    title: 'Design Patterns',
    description: 'Gang of Four',
    progress: {
      numberProgress: 0.88,
      semanticProgress: '88%',
    },
  },
  {
    id: '4',
    title: 'Refactoring',
    description: 'Martin Fowler',
    progress: {
      numberProgress: 0.15,
      semanticProgress: '15%',
    },
  },
  {
    id: '5',
    title: 'Domain-Driven Design',
    description: 'Eric Evans',
    progress: {
      numberProgress: 0.5,
      semanticProgress: '50%',
    },
  },
  {
    id: '6',
    title: 'Patterns of Enterprise Application Architecture',
    description: 'Martin Fowler',
    progress: {
      numberProgress: 0.3,
      semanticProgress: '30%',
    },
  },
  {
    id: '7',
    title: 'Building Microservices',
    description: 'Sam Newman',
    progress: {
      numberProgress: 0.75,
      semanticProgress: '75%',
    },
  },
  {
    id: '8',
    title: 'Continuous Delivery',
    description: 'Jez Humble',
  },
];

export default function HomeScreen() {
  const { top } = useSafeAreaInsets();
  const { t } = useI18n();
  const handlePDFPress = (item: PDFItem) => {
    // TODO: Navegar a HomeDetailScreen cuando esté implementado
    console.log('PDF seleccionado:', item.title);
  };

  return (
    <ScrollView
      className="bg-background-dark"
      style={{ paddingTop: top + 20 }}>
      <View>
        <View className="px-6 mb-6">
          <Text className="typo-title-lg text-text-onPrimary mb-2">
            {t('homeScreen.myLibrary')}
          </Text>
          <Text className="typo-body text-text-muted">
            {t('homeScreen.exploreAndContinue')}
          </Text>
        </View>

        <PDFGrid
          items={MOCK_PDFS}
          onItemPress={handlePDFPress}
        />
      </View>
    </ScrollView>
  );
}
