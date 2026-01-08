// import type { DocumentPickerAsset } from "expo-document-picker";
// import type { ImagePickerAsset } from "expo-image-picker";
// import { Platform } from "react-native";
// import { useSafeAreaInsets } from "react-native-safe-area-context";
// import * as DocumentPicker from "expo-document-picker";
// import * as ImagePicker from "expo-image-picker";
// import { useActionSheet } from "@expo/react-native-action-sheet";

// import { ShowToast } from "@sanlorenzo/ui";

// import { useI18n } from "../domain/hooks/i18n";

// type DocumentResponse =
//   | DocumentPicker.DocumentPickerResult
//   | ImagePicker.ImagePickerResult;

// type DocumentType =
//   | "application/pdf"
//   | "application/msword"
//   | "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
//   | "image/jpeg"
//   | "image/png"
//   | "image/jpg";

// const useDocumentPicker = () => {
//   const { showActionSheetWithOptions } = useActionSheet();
//   const [cameraPermissionStatus, requestPermission] =
//     ImagePicker.useCameraPermissions();
//   const { t } = useI18n();
//   const { bottom } = useSafeAreaInsets();

//   const getDocument = async ({
//     type,
//   }: {
//     type: DocumentType[];
//   }): Promise<DocumentResponse> => {
//     return await DocumentPicker.getDocumentAsync({
//       multiple: false,
//       type,
//     });
//   };

//   const openCamera = async (): Promise<DocumentResponse | null> => {
//     const status = await requestPermission();
//     if (status.granted) {
//       return await ImagePicker.launchCameraAsync({
//         allowsMultipleSelection: false,
//         mediaTypes: ["images"],
//         cameraType: ImagePicker.CameraType.back,
//         base64: true,
//       });
//     }
//     return null;
//   };

//   const launchDocumentActionSheet = async ({
//     type,
//   }: {
//     type: DocumentType[];
//   }): Promise<DocumentResponse | null> => {
//     return new Promise((resolve) => {
//       const timeoutId = setTimeout(() => {
//         resolve(null);
//       }, 10000);

//       showActionSheetWithOptions(
//         {
//           options: [
//             t("documentPicker.selectFromFiles"),
//             t("documentPicker.openCamera"),
//             t("general.cancel"),
//           ],
//           destructiveButtonIndex: 2,
//           cancelButtonIndex: 2,
//           containerStyle: {
//             paddingBottom: Platform.OS === "android" ? bottom || 34 : undefined,
//             borderRadius: Platform.OS === "android" ? 20 : undefined,
//           },
//         },
//         async (selectedIndex: number | undefined) => {
//           clearTimeout(timeoutId);

//           if (selectedIndex === undefined || selectedIndex === 2) {
//             resolve(null);
//             return;
//           }

//           let result: DocumentResponse | null = null;
//           try {
//             if (selectedIndex === 0) {
//               result = await getDocument({ type });
//             } else if (selectedIndex === 1) {
//               result = await openCamera();
//             }
//           } catch {
//             ShowToast({
//               title: t("documentPicker.genericErrorTitle"),
//               config: "error",
//             });
//           }
//           resolve(result);
//         },
//       );
//     });
//   };

//   const launchImageActionSheet =
//     async (): Promise<ImagePicker.ImagePickerResult | null> => {
//       return new Promise((resolve) => {
//         const timeoutId = setTimeout(() => {
//           resolve(null);
//         }, 10000);

//         showActionSheetWithOptions(
//           {
//             options: [
//               t("documentPicker.selectFromGallery"),
//               t("documentPicker.openCamera"),
//               t("general.cancel"),
//             ],
//             destructiveButtonIndex: 2,
//             cancelButtonIndex: 2,
//             containerStyle: {
//               paddingBottom:
//                 Platform.OS === "android" ? bottom || 34 : undefined,
//               borderRadius: Platform.OS === "android" ? 20 : undefined,
//             },
//           },
//           async (selectedIndex: number | undefined) => {
//             clearTimeout(timeoutId);

//             if (selectedIndex === undefined || selectedIndex === 2) {
//               resolve(null);
//               return;
//             }

//             let result: ImagePicker.ImagePickerResult | null = null;
//             try {
//               if (selectedIndex === 0) {
//                 result = await ImagePicker.launchImageLibraryAsync({
//                   allowsMultipleSelection: false,
//                   mediaTypes: "images",
//                   base64: true,
//                   quality: 0.5,
//                 });
//               } else if (selectedIndex === 1) {
//                 result = (await openCamera()) as ImagePicker.ImagePickerResult;
//               }
//             } catch {
//               ShowToast({
//                 title: t("documentPicker.genericErrorTitle"),
//                 config: "error",
//               });
//             }

//             resolve(result);
//           },
//         );
//       });
//     };

//   function base64ToUint8Array(base64: string): Uint8Array {
//     const binaryString = atob(base64);
//     const len = binaryString.length;
//     const bytes = new Uint8Array(len);

//     for (let i = 0; i < len; i++) {
//       bytes[i] = binaryString.charCodeAt(i);
//     }

//     return bytes;
//   }

//   return {
//     launchDocumentActionSheet,
//     launchImageActionSheet,
//     cameraPermissionStatus,
//     base64ToUint8Array,
//   };
// };

// export { useDocumentPicker };
// export type { DocumentPickerAsset, DocumentResponse, ImagePickerAsset };
