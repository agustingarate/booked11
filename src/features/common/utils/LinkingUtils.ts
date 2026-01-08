/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Linking from 'expo-linking';
import { Platform } from 'react-native';

import { useI18n } from '@common/domain/hooks/i18n';

const useLinking = () => {
  const { t } = useI18n();

  const openURL = async (uri: string, warningMessage: string) => {
    try {
      const supported = await Linking.canOpenURL(uri);
      if (!supported) {
        throw new Error(t('linking.cannotOpenError'));
      }
      await Linking.openURL(uri);
    } catch {
      // ShowToast({
      //   config: 'error',
      //   title: warningMessage,
      // });
    }
  };

  const callPhoneNumber = (phone: string) => {
    const scheme = Platform.OS === 'android' ? 'tel:' : 'telprompt://';
    const sanitizedPhone = phone.replace(/[\s()-]+/g, '');
    void openURL(`${scheme}${sanitizedPhone}`, t('linking.phoneError'));
  };

  const openWhatsapp = (phone: string, message?: string) => {
    const url = message
      ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
      : `https://wa.me/${phone}`;
    void openURL(url, t('linking.whatsappError'));
  };
  const openWebLink = (link: string) => {
    void openURL(link, t('linking.webError'));
  };

  const openMaps = (address: string, lat: number, lon: number) => {
    const scheme = Platform.select({
      ios: 'maps://0,0?q=',
      android: 'geo:0,0?q=',
    });
    const coordinates = `${lat},${lon}`;
    const label = encodeURIComponent(address);
    const link = Platform.select({
      ios: `${scheme}${label}@${coordinates}`,
      android: `${scheme}${coordinates}(${label})`,
    });
    if (link) {
      void openURL(link, t('linking.mapsError'));
    }
  };

  const openEmail = (email: string) => {
    void openURL(`mailto:${email}`, t('linking.emailError'));
  };

  const shareOnTwitter = (title: string, url: string) => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      title
    )}&url=${encodeURIComponent(url)}`;
    void openURL(tweetUrl, t('linking.twitterError'));
  };

  const shareOnFacebook = (url: string) => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`;
    void openURL(facebookUrl, t('linking.facebookError'));
  };

  //   const openSLWhatsapp = (message?: string) => openWhatsapp("", message); //TODO number if neccessary

  return {
    callPhoneNumber,
    openWhatsapp,
    openWebLink,
    openMaps,
    openEmail,
    shareOnTwitter,
    shareOnFacebook,
  };
};

export { useLinking };
