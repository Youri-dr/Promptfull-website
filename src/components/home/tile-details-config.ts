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
    content: `Most prompting advice gives you **templates to copy**. They work once, maybe twice. Then you're stuck.

**Promptfull is different.** We teach you why prompts work, not just what to type.

When you understand how AI thinks, you can **write better prompts for any task**—no templates needed.

That's how you actually learn prompting.`,
    seoKeywords: ['learn prompting', 'AI understanding', 'prompt engineering basics', 'how AI works']
  },

  friction: {
    subject: 'friction',
    headline: 'Clear prompts = instant results.',
    content: `Ever spent 20 minutes rewording a prompt, trying to get AI to understand what you want?

**That's friction.** And it's exhausting.

Good prompts work immediately. They're **clear, structured, and specific**.

We show you exactly how to reduce friction—so you get better results with **less guessing, less frustration, less time wasted**.

Learn prompting techniques that actually work.`,
    seoKeywords: ['prompt clarity', 'better AI results', 'prompt structure', 'effective prompting']
  },

  human: {
    subject: 'human',
    headline: 'No bootcamps. No pressure. Just you.',
    content: `Learning shouldn't feel like cramming for an exam.

**Promptfull fits your life.** Bite-sized lessons. No deadlines. No overwhelming courses.

Learn prompting at your own pace. **One insight at a time.**

Whether you have 5 minutes or an hour, you're making progress.

That's human-centered learning.`,
    seoKeywords: ['self-paced learning', 'AI learning cards', 'prompting practice', 'learn AI basics']
  },

  structured: {
    subject: 'structured',
    headline: 'One card. One insight. Real progress.',
    content: `Information overload doesn't help you learn. **Focus does.**

Each Promptfull card teaches **one clear concept**. No fluff. No tangents.

You learn it. You practice it. You move forward.

**Structured thinking** beats endless scrolling. That's how you master prompting—one focused insight at a time.`,
    seoKeywords: ['structured learning', 'AI learning cards', 'focused practice', 'prompt mastery']
  }
};

// Helper to get detail by subject
export const getTileDetail = (subject: string): TileDetail | null => {
  return tileDetails[subject] || null;
};