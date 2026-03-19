// ============================================
// TILE DETAILS CONFIGURATION
// ============================================
// Easy-to-edit content for tile detail modals
// Use **bold** for highlights in content

export interface TileDetail {
  subject: string;
  headline: string;
  content: string;
  seoKeywords: string[];
}

export const tileDetails: Record<string, TileDetail> = {
  welcome: {
    subject: 'welcome',
    headline: 'Stop copying templates. Start understanding.',
    content: `Templates work once. Maybe twice. **Then you're stuck.**

Promptfull teaches you **why prompts work** — not just what to type. Understand how AI thinks, and better prompts come naturally.

**No templates needed.**`,
    seoKeywords: ['learn prompting', 'AI understanding', 'prompt engineering basics', 'how AI works']
  },
  friction: {
    subject: 'friction',
    headline: 'Clear prompts = instant results.',
    content: `Rewording the same prompt for 20 minutes? **That's friction.**

Good prompts are clear, structured, and specific. **They work first time.**

We show you exactly how to get there — less guessing, less frustration, faster results.`,
    seoKeywords: ['prompt clarity', 'better AI results', 'prompt structure', 'effective prompting']
  },
  human: {
    subject: 'human',
    headline: 'No bootcamps. No pressure. Just you.',
    content: `**Bite-sized lessons. No deadlines. No overwhelm.**

Learn at your own pace — 5 minutes or an hour. Every session moves you forward.

Promptfull **fits your life**, not the other way around.`,
    seoKeywords: ['self-paced learning', 'AI learning cards', 'prompting practice', 'learn AI basics']
  },
  structured: {
    subject: 'structured',
    headline: 'One card. One insight. Real progress.',
    content: `**One concept per card.** No fluff. No tangents.

You learn it. You practice it. You move on. That's it.

**Structured thinking** beats endless scrolling — every time.`,
    seoKeywords: ['structured learning', 'AI learning cards', 'focused practice', 'prompt mastery']
  }
};

// Helper to get detail by subject
export const getTileDetail = (subject: string): TileDetail | null => {
  return tileDetails[subject] || null;
};

// ============================================
// SLIDESHOW CONFIGURATION
// ============================================

export interface Theme {
  themeId: string;
  themeTitle: string;
  themeColor: string;
  themeSymbol: string;
  slides: Slide[];
}

export interface Slide {
  title?: string;
  text: string;
  hasImage: boolean;
  imageSrc?: string;
  imageScale?: number;
  durationMs: number;
  slideType?: 'text' | 'interactive' | 'cta';
  interactive?: {
    question: string;
    options: string[];
  };
}

export interface TileConfig {
  subject: string;
  icon: string;
  headline: string;
  description: string;
  startSlideIndex: number;
}

// ============================================
// PROMPTFULL BRAND PALETTE TOKENS
// ============================================
// Derived from logo colors — do not introduce unrelated hues.

const palette = {
  deepNavy:      '#05244E',
  darkBlue:      '#1D3A60',
  midBlue:       '#536885',
  skyBlue:       '#70A2F0',
  indigo:        '#7887F4',
  violet:        '#8667FA',
  brightViolet:  '#865BFC',
  softLavender:  '#C5B4FC',
} as const;

// ============================================
// THEME DEFINITIONS
// ============================================

export const themesData: Theme[] = [
  // THEME 1: No shortcuts. No tricks.
  // Color: Indigo — strong, confident, brand-core
  {
    themeId: 'welcome',
    themeTitle: 'No shortcuts. No tricks.',
    themeColor: palette.indigo,
    themeSymbol: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/></svg>',
    slides: [
      {
        title: 'Prompts aren\'t magic',
        text: 'Most prompt advice focuses on quick wins.',
        hasImage: false,
        durationMs: 3500
      },
      {
        title: 'Shortcuts don\'t teach you',
        text: 'Templates may work briefly, but without understanding, progress stops.',
        hasImage: false,
        durationMs: 3500
      },
      {
        title: 'That\'s where Promptfull starts',
        text: 'We focus on learning why prompts work — not just copying what looks clever.',
        hasImage: false,
        durationMs: 4000
      }
    ]
  },

  // THEME 2: Understanding how prompts work
  // Color: Sky blue — clear, open, lighter contrast from welcome
  {
    themeId: 'friction',
    themeTitle: 'Understanding how prompts work',
    themeColor: palette.skyBlue,
    themeSymbol: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/></svg>',
    slides: [
      {
        title: 'Prompts work for a reason',
        text: 'Clear intent, structure, and context matter.',
        hasImage: false,
        durationMs: 3500
      },
      {
        title: 'Understanding changes everything',
        text: 'Once you understand how AI responds, you can write better prompts for any task.',
        hasImage: false,
        durationMs: 3500
      },
      {
        text: 'We help you think before you type — so better prompts become natural.',
        hasImage: true,
        imageSrc: '/images/mockup-friction-example.png',
        durationMs: 4500
      }
    ]
  },

  // THEME 3: Better results, naturally
  // Color: Bright violet — energetic, warm-purple, distinct from indigo
  {
    themeId: 'human',
    themeTitle: 'Better results, naturally',
    themeColor: palette.brightViolet,
    themeSymbol: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    slides: [
      {
        title: 'Learn one insight at a time',
        text: '100+ focused AI learning cards.',
        hasImage: true,
        imageSrc: '/images/ImageSlideShow7.png',
        imageScale: 1.8,
        durationMs: 4000
      },
      {
        title: 'Go deeper when it matters',
        text: 'In-depth articles that explain how AI thinks.',
        hasImage: true,
        imageSrc: '/images/mockup-human-progress.png',
        durationMs: 4000
      },
      {
        title: 'Practice without pressure',
        text: 'Daily challenges. Small steps. Real progress.',
        hasImage: true,
        imageSrc: '/images/mockup-human-tracking.png',
        durationMs: 4000
      },
      {
        title: 'Better prompts. Better output.',
        text: 'Understanding turns into results.',
        hasImage: false,
        durationMs: 0,
        slideType: 'cta'
      }
    ]
  }
];

// ============================================
// TILE CONFIGURATION (Homepage Cards)
// ============================================

export const tiles: TileConfig[] = [
  {
    subject: 'welcome',
    icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/></svg>',
    headline: 'Learn by understanding',
    description: 'Not shortcuts or tricks',
    startSlideIndex: 0
  },
  {
    subject: 'friction',
    icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/></svg>',
    headline: 'Reduce friction',
    description: 'Clear prompts, better results',
    startSlideIndex: 3
  },
  {
    subject: 'human',
    icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    headline: 'Human-centered',
    description: 'Practice at your own pace',
    startSlideIndex: 6
  },
  {
    subject: 'structured',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="6" width="16" height="16" rx="3" fill="white" opacity="0.9"/><rect x="26" y="6" width="16" height="16" rx="3" fill="white" opacity="0.9"/><rect x="6" y="26" width="16" height="16" rx="3" fill="white" opacity="0.9"/><rect x="26" y="26" width="16" height="16" rx="3" fill="white" opacity="0.9"/></svg>',
    headline: 'Structured thinking',
    description: 'One insight per card',
    startSlideIndex: 0
  }
];

// ============================================
// LEGACY SUPPORT - EXPORTED AS 'slides' and 'themes'
// ============================================

export interface LegacySlide {
  id: string;
  subject: string;
  type: 'text' | 'interactive' | 'cta';
  headline?: string;
  subtext?: string;
  duration: number;
  hasImage?: boolean;
  imageSrc?: string;
  imageScale?: number;
  interactive?: {
    question: string;
    options: string[];
  };
}

// Flatten themes into legacy slide format
export const slides: LegacySlide[] = themesData.flatMap((theme, themeIndex) =>
  theme.slides.map((slide, slideIndex) => ({
    id: `${theme.themeId}-${slideIndex + 1}`,
    subject: slide.slideType === 'cta' ? 'cta' : theme.themeId,
    type: slide.slideType || (slide.interactive ? 'interactive' : 'text'),
    headline: slide.title,
    subtext: slide.text,
    duration: slide.durationMs,
    hasImage: slide.hasImage,
    imageSrc: slide.imageSrc,
    imageScale: slide.imageScale,
    interactive: slide.interactive
  }))
);

// Theme metadata for background colors - exported as 'themes'
export const themes: Record<string, { bg: string; symbol: string }> = {
  welcome:    { bg: palette.indigo,       symbol: themesData[0].themeSymbol },
  friction:   { bg: palette.skyBlue,      symbol: themesData[1].themeSymbol },
  human:      { bg: palette.brightViolet, symbol: themesData[2].themeSymbol },
  // CTA and structured use dark blue gradient — premium, distinct from the three above
  cta:        { 
    bg: `linear-gradient(135deg, ${palette.deepNavy} 0%, ${palette.darkBlue} 100%)`,
    symbol: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>'
  },
  structured: { 
    bg: `linear-gradient(135deg, ${palette.deepNavy} 0%, ${palette.darkBlue} 100%)`,
    symbol: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="6" width="16" height="16" rx="3" fill="white" opacity="0.9"/><rect x="26" y="6" width="16" height="16" rx="3" fill="white" opacity="0.9"/><rect x="6" y="26" width="16" height="16" rx="3" fill="white" opacity="0.9"/><rect x="26" y="26" width="16" height="16" rx="3" fill="white" opacity="0.9"/></svg>'
  }
};

// Export alias for compatibility
export const themeMetadata = themes;

// ============================================
// CONFIGURATION HELPERS
// ============================================

export const getTotalSlides = (): number => slides.length;

export const getThemeSlideRange = (themeId: string): { start: number; end: number } | null => {
  let currentIndex = 0;
  for (const theme of themesData) {
    const slideCount = theme.slides.length;
    if (theme.themeId === themeId) {
      return { start: currentIndex, end: currentIndex + slideCount - 1 };
    }
    currentIndex += slideCount;
  }
  return null;
};

export const getThemeForSlide = (slideIndex: number): Theme | null => {
  let currentIndex = 0;
  for (const theme of themesData) {
    const slideCount = theme.slides.length;
    if (slideIndex >= currentIndex && slideIndex < currentIndex + slideCount) {
      return theme;
    }
    currentIndex += slideCount;
  }
  return null;
};