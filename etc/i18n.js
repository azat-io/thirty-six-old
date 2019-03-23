import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './translations/en.json'
import ru from './translations/ru.json'

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en,
    ru,
  },
}, error => {
  if (error) {
    console.log(`I18n Error: ${error}`)
  }
})
