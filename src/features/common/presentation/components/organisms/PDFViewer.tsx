import { Text, TextInput, View } from 'react-native';
import type { Source } from 'react-native-pdf';
import Pdf from 'react-native-pdf';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '../atoms/Button';
import LinearProgressBar from '../atoms/LinearProgressBar';

import usePDFViewer from '@common/hooks/PDFViewer/usePdfViewer';
import { useI18n } from '@main/index';
import { theme } from '@main/theme';

const PDFViewer = ({ source }: { source: Source }) => {
  const { t } = useI18n();
  const { bottom } = useSafeAreaInsets();
  const {
    pdfRef,
    currentProgress,
    totalPages,
    pageInput,
    pendingProgressUpdate,
    handlePageInputChange,
    handleUpdateProgress,
    handleReinitializeProgress,
    handleOnLoadComplete,
    handleOnPageChanged,
    handleOnError,
  } = usePDFViewer();

  return (
    <View className="flex-1">
      <View className="flex-1">
        <Pdf
          ref={pdfRef}
          spacing={20}
          source={source}
          minScale={0.5}
          maxScale={3}
          fitPolicy={0}
          enableDoubleTapZoom
          onLoadComplete={handleOnLoadComplete}
          onPageChanged={handleOnPageChanged}
          onError={handleOnError}
          style={{
            flex: 1,
            backgroundColor: theme.colors.surface.contrast,
            paddingVertical: 24,
            paddingHorizontal: 10,
          }}
        />
      </View>
      <View
        className="px-4 pt-4 gap-4 items-end bg-surface-dark"
        style={{ paddingBottom: bottom }}>
        <View className="flex-row items-center gap-2 justify-between w-full">
          {currentProgress === 1 && (
            <Button
              text={t('pdfViewer.reinitializeProgress')}
              textClassName="typo-label-sm text-xs"
              onPress={handleReinitializeProgress}
            />
          )}
          {pendingProgressUpdate && (
            <Button
              text={t('pdfViewer.updateProgress')}
              textClassName="typo-label-sm text-xs"
              onPress={handleUpdateProgress}
            />
          )}
          <View className="flex-row items-center gap-2  flex-1 justify-end">
            <View className="w-10">
              <TextInput
                className="bg-border-dark text-info-foreground w-10 h-8 p-2 text-center rounded-md"
                value={pageInput?.toString()}
                onChangeText={handlePageInputChange}
              />
            </View>

            <Text className="typo-body-sm text-info-foreground">
              / {totalPages}
            </Text>
          </View>
        </View>

        <LinearProgressBar
          className="bg-border-dark"
          progress={totalPages > 0 ? currentProgress : 0}
        />
      </View>
    </View>
  );
};

export default PDFViewer;
