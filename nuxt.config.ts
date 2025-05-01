import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@/assets/css/tailwind.css', '@/assets/css/global.css'],
  modules: [
    '@nuxt/eslint',
    [
      '@nuxtjs/google-fonts',
      {
        families: { Poppins: [300, 400, 500, 600, 700] },
        display: 'swap',
        preconnect: true,
        preload: true,
      },
    ],
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/test-utils',
    '@nuxt/ui',
    [
      '@nuxtjs/i18n',
      {
        locales: [
          { code: 'en', iso: 'en-US', name: 'English' },
          { code: 'pt', iso: 'pt-BR', name: 'Português' },
        ],
        defaultLocale: 'en',
      },
    ],
    [
      '@nuxtjs/color-mode',
      {
        preference: 'system',
        fallback: 'light',
        classSuffix: '',
      },
    ],
  ],
});
