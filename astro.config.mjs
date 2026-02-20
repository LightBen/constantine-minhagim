import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://constantine-minhagim.web.app',
  integrations: [tailwind()],
  output: 'static',
  prefetch: true,
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'he'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false
    }
  }
});
