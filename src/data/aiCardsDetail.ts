export type AICardDetail = {
  id: string;
  slug: string;
  category: string;
  categoryColorHex: string;
  heroSymbol: string;
  title: string;
  subtitle: string;
  likes: number;
  
  // Detail view fields
  fullDescription: string;
  secondaryDescription: string;
  examplePrompt: string;
  usageTips: string[];
};

export const aiCardsDetail: AICardDetail[] = [
  {
    id: "c1",
    slug: "make-prompts-predictable",
    category: "AI",
    categoryColorHex: "#7C5CFF",
    heroSymbol: "sparkles",
    title: "Make prompts predictable",
    subtitle: "A simple input → output structure you can reuse.",
    likes: 12,
    
    fullDescription: "Use this card whenever you need a reliable prompt structure that works across different AI models and tasks.",
    secondaryDescription: "Perfect for creating consistent outputs in content generation, data analysis, and creative work.",
    examplePrompt: `You are an expert copywriter and conversion specialist.

Analyze the following text step by step:
1) Summarize in max 5 bullets what it's about.
2) Identify 5 strong points.
3) Identify 5 improvement points (clarity, structure, persuasion).
4) Provide concrete improvements + 3 examples.

Text:
[PASTE HERE]`,
    usageTips: [
      "Always add context: target audience + goal.",
      "Ask for 2 variants: 'short and punchy' + 'detailed'.",
      "Repeat the same analysis after each change to compare.",
    ],
  },
  {
    id: "c2",
    slug: "newsroom-layout-rules",
    category: "Design",
    categoryColorHex: "#FF9F0A",
    heroSymbol: "wand",
    title: "Newsroom layout rules",
    subtitle: "Keep it calm: spacing, type, and hierarchy.",
    likes: 8,
    
    fullDescription: "Apply Apple Newsroom design principles to create clean, editorial layouts that feel premium without adding noise.",
    secondaryDescription: "Focus on typography, white space, and restraint to let your content breathe.",
    examplePrompt: `You are a design system architect.

Create a layout specification for:
- Typography scale (4-5 sizes maximum)
- Spacing system (8px base)
- Color palette (monochromatic + 1 accent)
- Component hierarchy

Keep it minimal and editorial. Prioritize readability over decoration.`,
    usageTips: [
      "Use fewer font sizes—consistency over variety.",
      "Let white space do the work—don't fill every pixel.",
      "Make color intentional—it should mean something.",
    ],
  },
  {
    id: "c3",
    slug: "daily-prompt-practice",
    category: "Productivity",
    categoryColorHex: "#007AFF",
    heroSymbol: "bolt",
    title: "Daily prompt practice",
    subtitle: "Small reps that compound into skill.",
    likes: 21,
    
    fullDescription: "Build prompt engineering skills through daily practice. Small, focused exercises that improve your intuition over time.",
    secondaryDescription: "Treat prompts like any other craft—deliberate practice makes the difference.",
    examplePrompt: `Daily prompt challenge:

Take a vague request and make it specific:
- Vague: "Write about productivity"
- Specific: "Write 3 actionable tips for knowledge workers who struggle with context switching between deep work and meetings"

Your turn: [PASTE VAGUE REQUEST]`,
    usageTips: [
      "Practice with real tasks—don't use toy examples.",
      "Compare outputs—run the same prompt across different models.",
      "Keep a prompt journal—track what works and why.",
    ],
  },
  {
    id: "c4",
    slug: "stop-vague-instructions",
    category: "AI",
    categoryColorHex: "#7C5CFF",
    heroSymbol: "brain",
    title: "Stop vague instructions",
    subtitle: "Turn fuzzy asks into measurable outputs.",
    likes: 5,
    
    fullDescription: "Transform unclear requests into concrete, measurable prompts that produce consistent results.",
    secondaryDescription: "The difference between 'make it better' and 'improve readability by shortening sentences to under 20 words'.",
    examplePrompt: `You are a clarity coach.

Convert this vague request into a specific, measurable instruction:
"[VAGUE REQUEST]"

Rewrite as:
1) Clear goal (what success looks like)
2) Constraints (what to avoid)
3) Format (how to deliver it)
4) Examples (show don't tell)`,
    usageTips: [
      "Replace adjectives with metrics—not 'better', but 'shorter than 15 words'.",
      "Add examples—show the AI what you mean, don't just tell.",
      "Specify format—'bullet points' vs 'paragraph' matters.",
    ],
  },
  {
    id: "c5",
    slug: "one-insight-per-card",
    category: "AI",
    categoryColorHex: "#7C5CFF",
    heroSymbol: "sparkles",
    title: "One insight per card",
    subtitle: "No encyclopedias. Just one clean mental model.",
    likes: 15,
    
    fullDescription: "Each prompt card should teach one concept clearly. No 10-step frameworks, no feature lists—just one reusable insight.",
    secondaryDescription: "Atomic prompts are easier to remember, adapt, and combine.",
    examplePrompt: `You are a content distiller.

Take this complex topic and extract ONE core insight:
"[COMPLEX TOPIC]"

Return:
- The insight (1 sentence)
- Why it matters (2 sentences)
- How to apply it (3 bullet points)

No fluff. No context dumping. One idea, clearly expressed.`,
    usageTips: [
      "If your card has 'and' in the title, split it into two cards.",
      "Test: Can you explain it in one sentence? If not, too complex.",
      "Focus depth over breadth—go deep on one thing.",
    ],
  },
];