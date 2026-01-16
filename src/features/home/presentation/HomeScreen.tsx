import { useRouter } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import PDFGrid from './components/PDFGrid';
import { useHomeViewModel } from './viewModels/HomeViewModel';

import { useI18n } from '@common/domain/hooks/i18n';
import { Button } from '@common/index';

export default function HomeScreen() {
  const { top } = useSafeAreaInsets();
  const { t } = useI18n();
  const router = useRouter();
  const handlePDFPress = (pdfId: string) => {
    router.push(`/reading/${pdfId}`);
  };

  const { isLoading, pdfs, loadMore, refresh, uploadPdf } = useHomeViewModel();

  return (
    <View className="flex-1">
      <ScrollView
        className="bg-background-dark"
        contentContainerClassName="flex-1"
        style={{ paddingTop: top + 20 }}>
        <View className="">
          <View className="px-6 mb-6">
            <Text className="typo-title-lg text-text-onPrimary mb-2">
              {t('homeScreen.myLibrary')}
            </Text>
            <Text className="typo-body text-text-muted">
              {t('homeScreen.exploreAndContinue')}
            </Text>
          </View>

          <PDFGrid
            items={pdfs}
            onItemPress={handlePDFPress}
          />
        </View>
      </ScrollView>
      <View className="absolute bottom-10 right-10">
        <Button
          leftIcon="add"
          onPress={() => {
            uploadPdf.mutate({
              fileName:
                'Apple_Developer_Program_License_Agreement_KH6N546W28.pdf',
              totalPages: 97,
              fileSize: 634560,
              fileUri:
                'http://127.0.0.1:9199/v0/b/booked11-8b5df.firebasestorage.app/o/users%2FH5ZWN89pTQen1g2A5TeYVGEFVf7h%2Fpdfs%2FApple_Developer_Program_License_Agreement_KH6N546W28.pdf?alt=media&token=835687ef-eb79-4690-9db7-b4a8ef53ab50',
            });
          }}
        />
      </View>
    </View>
  );
}
