import type { FC } from 'react';
import { View } from 'react-native';

import {
  useBreakpointValue,
  useBreakpoints,
  useScreenWidth,
} from '@common/hooks/useBreakpoint';
import FileComponent from '@common/presentation/components/molecules/FileComponent';

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
  items: PDFItem[];
  onItemPress?: (item: PDFItem) => void;
}

const PDFGrid: FC<PDFGridProps> = ({ items, onItemPress }) => {
  const { isMobile } = useBreakpoints();
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
      {items.map((item) => (
        <FileComponent
          key={item.id}
          title={item.title}
          description={item.description}
          progress={item.progress}
          onPress={() => onItemPress?.(item)}
          width={cardWidth}
        />
      ))}
    </View>
  );
};

export default PDFGrid;
