/* eslint-disable no-return-await */
import { useActionSheet } from '@expo/react-native-action-sheet';
import type { DocumentPickerAsset } from 'expo-document-picker';
// import type { ImagePickerAsset } from "expo-image-picker";
import * as DocumentPicker from 'expo-document-picker';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ShowToast } from '@common/presentation/components/atoms/Toast';
import { useI18n } from '@main/index';
// import * as ImagePicker from "expo-image-picker";

type DocumentResponse = DocumentPicker.DocumentPickerResult;

type DocumentType =
  | 'application/pdf'
  | 'application/msword'
  | 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  | 'image/jpeg'
  | 'image/png'
  | 'image/jpg';

const useDocumentPicker = () => {
  const { showActionSheetWithOptions } = useActionSheet();

  const { t } = useI18n();
  const { bottom } = useSafeAreaInsets();

  const getDocument = async ({
    type,
  }: {
    type: DocumentType[];
  }): Promise<DocumentPicker.DocumentPickerResult> => {
    return await DocumentPicker.getDocumentAsync({
      multiple: false,
      type,
    });
  };

  const launchDocumentActionSheet = async ({
    type,
  }: {
    type: DocumentType[];
  }): Promise<DocumentResponse | null> => {
    return new Promise((resolve) => {
      const timeoutId = setTimeout(() => {
        resolve(null);
      }, 10000);

      showActionSheetWithOptions(
        {
          options: [t('documentPicker.selectFromFiles'), t('general.cancel')],
          destructiveButtonIndex: 2,
          cancelButtonIndex: 2,
          containerStyle: {
            paddingBottom: Platform.OS === 'android' ? bottom || 34 : undefined,
            borderRadius: Platform.OS === 'android' ? 20 : undefined,
          },
        },
        async (selectedIndex: number | undefined) => {
          clearTimeout(timeoutId);

          if (selectedIndex === undefined || selectedIndex === 2) {
            resolve(null);
            return;
          }

          let result: DocumentResponse | null = null;
          try {
            if (selectedIndex === 0) {
              result = await getDocument({ type });
            }
          } catch {
            ShowToast({
              title: t('documentPicker.genericErrorTitle'),
              config: 'error',
            });
          }
          resolve(result);
        }
      );
    });
  };

  const base64ToUint8Array = (base64: string): Uint8Array => {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);

    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    return bytes;
  };

  return {
    launchDocumentActionSheet,
    base64ToUint8Array,
  };
};

export { useDocumentPicker };
export type { DocumentPickerAsset, DocumentResponse };
