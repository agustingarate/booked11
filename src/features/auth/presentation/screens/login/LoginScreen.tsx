import { useNavigation, useRouter } from 'expo-router';
import type { FC } from 'react';
import React, { useEffect, useLayoutEffect } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useAuthStore } from '../../../domain/store/authStore';
import { useLoginViewModel } from '../../viewModels/LoginViewModel';

import { useI18n } from '@common/domain/hooks/i18n';
import { TextInputField } from '@common/presentation/components/atoms/TextInputField';
import FileComponent from '@common/presentation/components/molecules/FileComponent';

/**
 * LoginScreen component.
 *
 * This component renders a login screen that allows users to enter their email and password,
 * and then log in or navigate to registration or forgot password screens.
 *
 * @returns {JSX.Element} The login screen component.
 */
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

  const { email, password, isLoading, error, login, setEmail, setPassword } =
    useLoginViewModel({
      onSuccess: (data) => {
        // Guarda los datos de autenticación en el store
        setAuthData(data);
        router.push('/(protected)/(tabs)/home');
      },
    });

  /**
   * Logs in the user with the current email and password state.
   *
   * If the login is successful, navigates to the home screen.
   * If the login fails, displays an error alert.
   */
  const handleLogin = async () => {
    try {
      console.log('handleLogin');
      await login();
    } catch (_err) {}
  };

  useEffect(() => {
    if (error === 'login-missing-fields') {
      Alert.alert(t('loginScreen.error.title'), t('loginScreen.error.message'));
    } else if (error !== null) {
      Alert.alert(t('loginScreen.error.title'), error);
    }
  }, [error, t]);

  if (isLoading === true) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>{t('loginScreen.loading')}</Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      className="flex-1 justify-center bg-background-dark"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View
        className=""
        accessible={false}>
        <Text
          testID="loginScreen.title"
          className="text-title-lg text-primary-300 text-center mb-7">
          {t('loginScreen.title')}
        </Text>
        {/* 
        <LinearProgressBar
          // progress={0.5}
          progress={51}
          // isLoading
        /> */}

        <ScrollView
          horizontal
          className="flex-row h-80 "
          contentContainerStyle={{ gap: 10 }}>
          <FileComponent
            title="Design system para principiantes V2.0.pdf"
            description="Hace 2 horas"
            progress={{
              numberProgress: 51,
              semanticProgress: '51% completado',
            }}
          />
          <FileComponent />
          <FileComponent />
          <FileComponent />
          <FileComponent />
          <FileComponent />
        </ScrollView>

        <TextInputField
          placeholder={t('loginScreen.emailPlaceholder')}
          keyboardType="email-address"
          value={email}
          onChange={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
          errorMessage="Email is required"
          enable={false}
          readOnly
        />

        <TextInputField
          placeholder={t('loginScreen.passwordPlaceholder')}
          keyboardType="default"
          value={password}
          onChange={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          isPassword
        />

        <TextInputField
          placeholder={t('loginScreen.emailPlaceholder')}
          keyboardType="email-address"
          value={email}
          onChange={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />

        {/* <TextInput
          className={INPUT_CLASSES}
          placeholder={t('loginScreen.emailPlaceholder')}
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="emailAddress"
          testID="loginScreen.email"
        />
        <TextInput
          className={INPUT_CLASSES}
          placeholder={t('loginScreen.passwordPlaceholder')}
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="oneTimeCode"
          testID="loginScreen.password"
        /> */}
        {/* <Button
          text={t('loginScreen.login')}
          leftIcon="account-tree"
          onPress={handleLogin}
          disabled={isLoading}
          testID="loginScreen.login"
          variant="primary"
          radius={ButtonRadius.ROUNDED}
        /> */}
        {/* <TouchableOpacity
          className="h-14 bg-blue-600 rounded-xl justify-center items-center"
          onPress={handleLogin}
          disabled={isLoading}
          testID="loginScreen.login">
          <Text className="text-white text-lg font-bold">
            {t('loginScreen.login')}
          </Text>
        </TouchableOpacity> */}
        <View className="mt-4 flex items-center">
          <TouchableOpacity
            onPress={() => router.push('/auth/register')}
            testID="loginScreen.register">
            <Text className="text-blue-600 text-lg font-bold">
              {t('loginScreen.signupAction')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
