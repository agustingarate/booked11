import * as FileSystem from 'expo-file-system';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';

export const usePdfSharing = () => {
  const shareHtmlToPdf = async (html: string, fileName: string) => {
    const { uri } = (await Print.printToFileAsync({ html })) as {
      uri: string;
    };
    const directory = await FileSystem.Directory.pickDirectoryAsync();
    if (uri) {
      const newFileName = `${directory}${fileName}.pdf`;

      await FileSystem.moveAsync({
        from: uri,
        to: newFileName,
      });

      await Sharing.shareAsync(newFileName, {
        mimeType: 'application/pdf',
        dialogTitle: 'Share Invoice PDF',
      });
    } else {
      throw new Error();
    }
  };

  return { shareHtmlToPdf };
};
