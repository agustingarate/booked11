import { z } from 'zod';

import { useI18n } from '@common/domain/hooks/i18n';

export const passwordValidators = {
  minLength: (value: string) => value.length >= 6,
  letters: (value: string) => ({
    uppercase: /[A-Z]/.test(value),
    lowercase: /[a-z]/.test(value),
  }),
  characters: (value: string) => ({
    number: /[0-9]/.test(value),
    special: /[^A-Za-z0-9]/.test(value),
  }),
  passwordMatch: (value: string, confirmPassword: string) =>
    value === confirmPassword && value.length > 0,
};

export const getPasswordValidatorsList = (
  newPasswordValue: string,
  confirmNewPasswordValue: string,
  strings: {
    minLength: string;
    upperAndLowercase: string;
    numberAndSpecial: string;
    passwordMatch: string;
  }
) => [
  {
    isValid: passwordValidators.minLength(newPasswordValue),
    text: strings.minLength,
  },
  {
    isValid:
      passwordValidators.letters(newPasswordValue).uppercase &&
      passwordValidators.letters(newPasswordValue).lowercase,
    text: strings.upperAndLowercase,
  },
  {
    isValid:
      passwordValidators.characters(newPasswordValue).number &&
      passwordValidators.characters(newPasswordValue).special,
    text: strings.numberAndSpecial,
  },
  {
    isValid: passwordValidators.passwordMatch(
      newPasswordValue,
      confirmNewPasswordValue
    ),
    text: strings.passwordMatch,
  },
];

const useValidators = () => {
  const { t } = useI18n();
  const password = (showErrors: boolean | undefined = false) =>
    z
      .string()
      .refine(passwordValidators.minLength, {
        message: showErrors ? t('inputErrors.password.minLength') : '',
      })
      .refine((value) => passwordValidators.letters(value).uppercase, {
        message: showErrors ? t('inputErrors.password.uppercase') : '',
      })
      .refine((value) => passwordValidators.letters(value).lowercase, {
        message: showErrors ? t('inputErrors.password.lowercase') : '',
      })
      .refine((value) => passwordValidators.characters(value).number, {
        message: showErrors ? t('inputErrors.password.number') : '',
      })
      .refine((value) => passwordValidators.characters(value).special, {
        message: showErrors ? t('inputErrors.password.special') : '',
      });

  const email = () =>
    z.email({ message: 'El correo electrónico no es válido' });

  const code = () => z.array(z.string().length(1).regex(/^\d$/));

  const dni = () =>
    z
      .string()
      .min(7, { message: t('inputErrors.dni.minLength') })
      .max(8, { message: t('inputErrors.dni.maxLength') })
      .regex(/^\d+$/, { message: t('inputErrors.dni.onlyNumbers') });

  const name = (message?: string) =>
    z
      .string()
      .min(1, { message: message ?? t('inputErrors.firstNameMandatory') });

  const lastName = () => name(t('inputErrors.lastNameMandatory'));
  const mmddyyyy = (message?: string) =>
    z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/, {
      message: message ?? t('inputErrors.date.mmddyyyy'),
    });

  const phone = () =>
    z
      .string()
      .length(10, { message: t('inputErrors.phone.length') })
      .regex(/^[1-9]\d{9}$/, { message: t('inputErrors.phone.format') });

  const address = () => z.string();

  return {
    password,
    email,
    dni,
    code,
    name,
    lastName,
    mmddyyyy,
    phone,
    address,
  };
};

export { useValidators };
