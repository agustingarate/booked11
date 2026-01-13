import { FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRouter } from 'expo-router';
import type { FC } from 'react';
import React, { useEffect, useLayoutEffect } from 'react';
import {
  ActivityIndicator,
  Alert,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAuthStore } from '../../../domain/store/authStore';
import { Header } from '../../components/header';
import { useLoginViewModel } from '../../viewModels/LoginViewModel';

import { useI18n } from '@common/domain/hooks/i18n';
import { theme } from '@main/theme';

const LoginScreen: FC = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const { t } = useI18n();
  const setAuthData = useAuthStore((state) => state.setAuthData);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: t('loginScreen.appbar'),
    });
  }, [navigation, t]);

  const { isLoading, error, googleSignIn, googleRequest } = useLoginViewModel({
    onSuccess: (data) => {
      setAuthData(data);
      router.push('/(protected)/(tabs)/home');
    },
  });

  const handleGoogleSignIn = async () => {
    await googleSignIn();
  };

  // Efecto para manejar errores (de cualquier tipo de login)
  useEffect(() => {
    if (error === 'login-missing-fields') {
      Alert.alert(t('loginScreen.error.title'), t('loginScreen.error.message'));
    } else if (error !== null) {
      Alert.alert(t('loginScreen.error.title'), error);
    }
  }, [error, t]);

  return (
    <SafeAreaView className="flex-1 bg-background-dark justify-around p-5">
      <Header />

      <View className="gap-3">
        <Text className="typo-subtitle text-surface-muted text-center">
          {t('loginScreen.subtitle')}
        </Text>
        <Text className="typo-subtitle text-gray-400 text-sm text-center mb-7 leading-relaxed px-3">
          {t('loginScreen.description')}
        </Text>

        <TouchableOpacity
          activeOpacity={0.8}
          className="h-14 bg-white border-2 border-gray-300 rounded-xl justify-center items-center flex-row mb-4 gap-2"
          onPress={handleGoogleSignIn}
          disabled={!googleRequest || isLoading}
          testID="loginScreen.googleSignIn">
          {isLoading ? (
            <ActivityIndicator
              size="small"
              color={theme.colors.primary.DEFAULT}
            />
          ) : (
            <>
              <FontAwesome
                name="google"
                size={24}
              />
              <Text className="typo-body">{t('loginScreen.googleSignIn')}</Text>
            </>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
