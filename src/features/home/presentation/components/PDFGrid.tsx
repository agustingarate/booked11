import type { FC } from 'react';
import { View } from 'react-native';

import type { PdfModel } from '@common/data/models/PdfModel';
import {
  useBreakpointValue,
  useBreakpoints,
  useScreenWidth,
} from '@common/hooks/useBreakpoint';
import { EmptyState } from '@common/presentation/components';
import FileComponent from '@common/presentation/components/molecules/FileComponent';
import { useI18n } from '@main/index';

export interface PDFItem {
  id: string;
  title: string;
  description?: string;
  progress?: {
    numberProgress: number;
    semanticProgress: string;
  };
}

interface PDFGridProps {
  items: PdfModel[];
  onItemPress?: (pdfId: string) => void;
}

const PDFGrid: FC<PDFGridProps> = ({ items, onItemPress }) => {
  const { isMobile } = useBreakpoints();
  const { t } = useI18n();
  const width = useScreenWidth();

  const gap = useBreakpointValue({ xs: 16, md: 20, lg: 24 }) ?? 16;

  const cardWidth = isMobile ? (width - gap * 3) / 2 : 160;

  return (
    <View
      className="flex-row flex-wrap"
      style={{
        gap,
        paddingHorizontal: gap,
      }}>
      {items.length > 0 ? (
        items.map((item) => (
          <FileComponent
            key={item.id}
            title={item.fileName}
            description={`${item.totalPages} páginas`} //TODO: add date of upload
            progress={{
              numberProgress: item.progress,
              semanticProgress: `${item.progress}%`,
            }}
            onPress={() => onItemPress?.(item.id)}
            width={cardWidth}
          />
        ))
      ) : (
        <EmptyState
          title={t('homeScreen.emptyState.title')}
          description={t('homeScreen.emptyState.description')}
          className="px-6 h-96 justify-center flex-1"
        />
      )}
    </View>
  );
};

export default PDFGrid;
