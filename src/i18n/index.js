import { createI18n } from 'vue-i18n'

// Ready translated locale messages
const messages = {
  en: {
    message: {
      hello: 'hello world',
    },
  },
  ja: {
    message: {
      hello: 'こんにちは、世界',
    },
  },
}

// Create VueI18n instance with options
export const i18n = createI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en',
  messages, // set locale messages
})

export default i18n
