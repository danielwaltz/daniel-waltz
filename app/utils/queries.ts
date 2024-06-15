import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types';

export const allPublishedArticlesQuery = {
  path: '/articles',
  sort: [{ date: -1 }],
  where: [{ status: 'published' }],
} satisfies QueryBuilderParams;
