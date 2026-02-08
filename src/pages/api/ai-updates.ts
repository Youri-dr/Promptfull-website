import type { APIRoute } from 'astro';
import { getAIUpdates, getAIUpdatesCount } from '../../lib/directus';

export const GET: APIRoute = async ({ url }) => {
  const offset = parseInt(url.searchParams.get('offset') || '0');
  const limit = 10;

  const updates = await getAIUpdates(limit, offset);
  const totalCount = await getAIUpdatesCount();
  
  const hasMore = (offset + limit) < totalCount;

  return new Response(
    JSON.stringify({
      updates,
      hasMore,
      total: totalCount,
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};