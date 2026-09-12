// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// TODO(launch): the business is now The Sorted Sequoia - no domain chosen yet.
// Points at the Workers URL so that no canonical, sitemap or og:image URL
// claims a domain we don't own. Drives canonicals, the sitemap and the
// LocalBusiness schema.
const SITE = 'https://thesortedsequoia.office-simplysorted.workers.dev';

export default defineConfig({
  site: SITE,
  integrations: [sitemap()],
  server: {
    port: 4321,
  },
  build: {
    format: 'directory',
  },
  compressHTML: true,
});
