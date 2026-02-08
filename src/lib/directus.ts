import { createDirectus, rest, readItems } from '@directus/sdk';

// Types
export type Category = {
  id: string;
  name: string;
  slug: string;
  color_hex: string;
};

export type Article = {
  id: number;
  status: string;
  title: string;
  excerpt: string;
  slug: string;
  content: string;
  category: string;
  category_color?: string;
  reading_time: number;
  publish_at: string;
  is_featured: boolean;
  cover_image?: {
    id: string;
  };
  show_prompt_box?: boolean;
  prompt_content?: string;
  prompt_why_works?: string;
};

export type AICard = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: {
    id: string;
    name: string;
    slug: string;
    color_hex: string;
  };
  likes: number;
  hero_symbol: string;
  detail_description?: string;
  example_prompt?: string;
  usage_tips?: string;
};

export type AICompany = {
  id: string;
  name: string;
  color_hex: string;
  sort_order: number;
};

export type AIUpdate = {
  id: string;
  date: string;
  company: AICompany;
  title: string;
  description: string;
  source_url?: string;
  status: string;
};

// Single Schema type with both collections
type Schema = {
  articles: Article[];
  ai_cards: AICard[];
  ai_companies: AICompany[];
  ai_updates: AIUpdate[];
};

const directusUrl = import.meta.env.DIRECTUS_URL;
const directusToken = import.meta.env.DIRECTUS_TOKEN;

if (!directusUrl || !directusToken) {
  throw new Error('Missing DIRECTUS_URL or DIRECTUS_TOKEN in .env file');
}

const directus = createDirectus<Schema>(directusUrl).with(rest());

// Helper: Get image URL
export function getImageUrl(fileId: string, params?: Record<string, any>): string {
  const queryString = params 
    ? '?' + new URLSearchParams(params).toString() 
    : '';
  return `${directusUrl}/assets/${fileId}${queryString}`;
}

// Helper: Format reading time
export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`;
}

// Helper: Format publish date
export function formatPublishDate(isoDate: string): string {
  try {
    const date = new Date(isoDate);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return '';
  }
}

// Fetch all published articles
export async function getArticles(): Promise<Article[]> {
  try {
    const response = await fetch(
      `${directusUrl}/items/articles?` + new URLSearchParams({
        'fields': 'id,title,excerpt,slug,category,category_color,reading_time,publish_at,is_featured,cover_image.id',
        'filter[status][_eq]': 'published',
        'filter[publish_at][_lte]': '$NOW',
        'sort[]': '-publish_at',
        'limit': '100',
      }),
      {
        headers: {
          'Authorization': `Bearer ${directusToken}`,
        },
      }
    );

    if (!response.ok) {
      console.error('Directus API error:', response.status, response.statusText);
      return [];
    }

    const json = await response.json();
    return json.data || [];
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

// Fetch single article by slug
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const response = await fetch(
      `${directusUrl}/items/articles?` + new URLSearchParams({
        'fields': 'id,title,excerpt,slug,content,category,category_color,reading_time,publish_at,is_featured,cover_image.id,show_prompt_box,prompt_content,prompt_why_works',
        'filter[slug][_eq]': slug,
        'filter[status][_eq]': 'published',
        'filter[publish_at][_lte]': '$NOW',
        'limit': '1',
      }),
      {
        headers: {
          'Authorization': `Bearer ${directusToken}`,
        },
      }
    );

    if (!response.ok) {
      console.error('Directus API error:', response.status, response.statusText);
      return null;
    }

    const json = await response.json();
    return json.data?.[0] || null;
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
}

// Get related articles by category
export async function getRelatedArticles(
  category: string,
  currentArticleId: number,
  limit: number = 3
): Promise<Article[]> {
  try {
    const response = await fetch(
      `${directusUrl}/items/articles?` + new URLSearchParams({
        'fields': 'id,title,excerpt,slug,category,category_color,reading_time,publish_at,cover_image.id',
        'filter[category][_eq]': category,
        'filter[id][_neq]': currentArticleId.toString(),
        'filter[status][_eq]': 'published',
        'filter[publish_at][_lte]': '$NOW',
        'sort[]': '-publish_at',
        'limit': limit.toString(),
      }),
      {
        headers: {
          'Authorization': `Bearer ${directusToken}`,
        },
      }
    );

    if (!response.ok) {
      console.error('Directus API error:', response.status, response.statusText);
      return [];
    }

    const json = await response.json();
    return json.data || [];
  } catch (error) {
    console.error('Error fetching related articles:', error);
    return [];
  }
}

// Fetch AI Cards (with slug filter)
export async function getAICards(limit: number = 5): Promise<AICard[]> {
  try {
    const response = await fetch(
      `${directusUrl}/items/ai_cards?` + new URLSearchParams({
        'fields': 'id,slug,title,subtitle,likes,hero_symbol,category.id,category.name,category.slug,category.color_hex',
        'filter[slug][_nnull]': 'true',
        'sort[]': '-likes',
        'limit': limit.toString(),
      }),
      {
        headers: {
          'Authorization': `Bearer ${directusToken}`,
        },
      }
    );

    if (!response.ok) {
      console.error('Directus API error:', response.status, response.statusText);
      return [];
    }

    const json = await response.json();
    return json.data || [];
  } catch (error) {
    console.error('Error fetching AI cards:', error);
    return [];
  }
}

// Fetch single AI Card by slug
export async function getAICardBySlug(slug: string): Promise<AICard | null> {
  try {
    const response = await fetch(
      `${directusUrl}/items/ai_cards?` + new URLSearchParams({
        'fields': 'id,slug,title,subtitle,likes,hero_symbol,detail_description,example_prompt,usage_tips,category.id,category.name,category.slug,category.color_hex',
        'filter[slug][_eq]': slug,
        'limit': '1',
      }),
      {
        headers: {
          'Authorization': `Bearer ${directusToken}`,
        },
      }
    );

    if (!response.ok) {
      console.error('Directus API error:', response.status, response.statusText);
      return null;
    }

    const json = await response.json();
    return json.data?.[0] || null;
  } catch (error) {
    console.error('Error fetching AI card:', error);
    return null;
  }
}

// Get all AI Cards (for generating static paths)
export async function getAllAICards(): Promise<AICard[]> {
  try {
    const response = await fetch(
      `${directusUrl}/items/ai_cards?` + new URLSearchParams({
        'fields': 'id,slug,title,subtitle,likes,hero_symbol,detail_description,example_prompt,usage_tips,category.id,category.name,category.slug,category.color_hex',
        'filter[slug][_nnull]': 'true',
        'limit': '200',
      }),
      {
        headers: {
          'Authorization': `Bearer ${directusToken}`,
        },
      }
    );

    if (!response.ok) {
      console.error('Directus API error:', response.status, response.statusText);
      return [];
    }

    const json = await response.json();
    return json.data || [];
  } catch (error) {
    console.error('Error fetching all AI cards:', error);
    return [];
  }
}

// Fetch AI updates with pagination
export async function getAIUpdates(limit: number = 10, offset: number = 0): Promise<AIUpdate[]> {
  try {
    const response = await fetch(
      `${directusUrl}/items/ai_updates?` + new URLSearchParams({
        'fields': 'id,date,title,description,source_url,company.id,company.name,company.color_hex',
        'filter[status][_eq]': 'published',
        'sort[]': '-date',
        'limit': limit.toString(),
        'offset': offset.toString(),
      }),
      {
        headers: {
          'Authorization': `Bearer ${directusToken}`,
        },
      }
    );

    if (!response.ok) {
      console.error('Directus API error:', response.status, response.statusText);
      return [];
    }

    const json = await response.json();
    return json.data || [];
  } catch (error) {
    console.error('Error fetching AI updates:', error);
    return [];
  }
}

// Get total count of published AI updates
export async function getAIUpdatesCount(): Promise<number> {
  try {
    const response = await fetch(
      `${directusUrl}/items/ai_updates?` + new URLSearchParams({
        'filter[status][_eq]': 'published',
        'aggregate[count]': '*',
      }),
      {
        headers: {
          'Authorization': `Bearer ${directusToken}`,
        },
      }
    );

    if (!response.ok) {
      console.error('Directus API error:', response.status, response.statusText);
      return 0;
    }

    const json = await response.json();
    return json.data?.[0]?.count || 0;
  } catch (error) {
    console.error('Error fetching AI updates count:', error);
    return 0;
  }
}

// Get recent AI updates for sidebar widget (limited to 4)
export async function getRecentAIUpdates(limit: number = 4): Promise<AIUpdate[]> {
  return getAIUpdates(limit, 0);
}