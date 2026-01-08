import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import es from '@common/presentation/locale/es.json';

const resources = {
  es,
};

// eslint-disable-next-line import/no-named-as-default-member
i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v4',
    resources,
    lng: 'es',
  })
  .catch((error) => console.error('i18n init error:', error));

export default i18n;
