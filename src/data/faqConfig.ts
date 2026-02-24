// src/data/faqConfig.ts
// ─────────────────────────────────────────────────────────────────────────────
// FAQ content configuration.
//
// HOW TO ADD A NEW CATEGORY:
//   1. Add a new key to `categoryFaqs` below matching your article's category
//      string exactly (case-insensitive matching is handled in getFaqForCategory).
//   2. Provide at least 3 FaqItem entries.
//   3. Done — the system picks it up automatically.
//
// The final item in EVERY set must be the pillar page reference (pillarFaq).
// Do not remove it.
// ─────────────────────────────────────────────────────────────────────────────

export type FaqItem = {
  question: string;
  answer: string;
};

// ── Pillar reference — appended to every FAQ set ─────────────────────────────
// Subtle, educational, not promotional.
const pillarFaq: FaqItem = {
  question: "Where can I learn more about using AI effectively in my work?",
  answer:
    "A good starting point is our guide <a href='/ai-for-business'>AI for Business: The Complete Guide for Entrepreneurs & Creators</a>. It covers how AI actually works, where it adds genuine value, and how to communicate with it in a way that gets consistently useful results.",
};

// ── Per-category FAQ sets ─────────────────────────────────────────────────────
// Keys are matched case-insensitively against article.category.
const categoryFaqs: Record<string, FaqItem[]> = {

  "ai basics": [
    {
      question: "What is the difference between AI and machine learning?",
      answer:
        "AI is the broader field — any system that performs tasks typically requiring human intelligence. Machine learning is a subset of AI where systems learn patterns from data rather than following explicitly written rules. Most of the AI tools people use today, like ChatGPT or Claude, are built on machine learning.",
    },
    {
      question: "Why does AI sometimes give wrong answers?",
      answer:
        "AI language models predict the most statistically likely continuation of your input — they do not look up facts or reason from first principles. When a model fills a gap in its training data, it produces the most probable-sounding answer, which is not always the correct one. This is why verification remains important for anything factual.",
    },
    {
      question: "Do AI tools learn from my conversations?",
      answer:
        "Most consumer AI tools do not update their underlying model in real time from your conversations. What you type in a session shapes the responses within that session, but the model itself is not retrained on your input without explicit data agreements. Check the privacy policy of any tool you use to confirm their specific practices.",
    },
    {
      question: "Is AI capable of original thinking?",
      answer:
        "AI generates output by recombining patterns from its training data. It can produce combinations that feel novel, but it does not originate ideas from lived experience, curiosity, or intent the way humans do. It is a powerful tool for accelerating and expanding thinking — not a replacement for it.",
    },
    pillarFaq,
  ],

  "information": [
    {
      question: "How do I know if information from an AI tool is accurate?",
      answer:
        "Treat AI output as a starting point, not a final source. Cross-reference claims against primary sources — official publications, peer-reviewed research, or direct data. AI tools are particularly prone to errors on recent events, statistics, and niche topics where training data is thin.",
    },
    {
      question: "Can AI tools access the internet to find current information?",
      answer:
        "It depends on the tool. Base language models have a training cutoff date and no live internet access. Some tools — like Perplexity or ChatGPT with browsing enabled — do fetch current information, but they can still misinterpret or misattribute what they find. Always check the source.",
    },
    {
      question: "What kinds of tasks is AI genuinely reliable for?",
      answer:
        "AI is most reliable for tasks where the output can be easily verified: drafting text you'll review, summarising content you already have, generating structured formats, brainstorming options, and explaining concepts in plain language. It is less reliable for factual lookups, legal or medical specifics, and anything requiring up-to-date data.",
    },
    {
      question: "Should I trust AI-generated summaries of long documents?",
      answer:
        "Summaries are generally one of AI's stronger capabilities, but they can omit nuance, misrepresent emphasis, or miss key caveats — especially in legal, medical, or technical documents. For anything consequential, read the source material and use the summary as a navigational aid, not a substitute.",
    },
    pillarFaq,
  ],

  "prompting": [
    {
      question: "What makes a prompt effective?",
      answer:
        "Effective prompts are specific about three things: who the output is for, what you want it to do, and what form it should take. Vague prompts produce vague output because the model has too much space to fill with generic patterns. The more clearly you define the goal and the audience, the more useful the result.",
    },
    {
      question: "How long should a prompt be?",
      answer:
        "Length is less important than clarity. A 20-word prompt with a clear goal outperforms a 200-word prompt that meanders. That said, providing context about your audience, constraints, and desired format almost always improves quality — just keep it purposeful rather than exhaustive.",
    },
    {
      question: "Why does rephrasing the same question give different answers?",
      answer:
        "AI models are sensitive to wording because they predict responses based on the patterns associated with your input. A slightly different phrasing activates different patterns in the model, which can produce meaningfully different output. This is why testing a few variations of a prompt is worth the extra minute.",
    },
    {
      question: "What is a system prompt, and should I use one?",
      answer:
        "A system prompt is an instruction you give at the start of a session to set the context, tone, or constraints for all responses that follow. For example: 'You are helping me write for an audience of non-technical business owners — keep language plain and avoid jargon.' If you use AI regularly for a specific purpose, a consistent system prompt will noticeably improve your results.",
    },
    {
      question: "Can I improve AI output by asking it to try again?",
      answer:
        "Yes, and being specific about what to change is more effective than a generic 'try again.' Tell the model what missed the mark — 'the tone is too formal', 'the opening paragraph is too long', 'add a concrete example in the second section' — and it will adjust accordingly. Iterating with specific feedback is one of the most practical prompting skills to develop.",
    },
    pillarFaq,
  ],

};

// ── Default FAQ — shown when no category match is found ───────────────────────
const defaultFaqs: FaqItem[] = [
  {
    question: "What can AI tools realistically help with?",
    answer:
      "AI tools are well-suited to tasks that involve language: drafting, summarising, reformatting, brainstorming, and explaining. They are less suited to tasks that require verified facts, strategic judgment, or deep knowledge of your specific context — unless you provide that context in your prompt.",
  },
  {
    question: "How do I get started with AI tools if I've never used them?",
    answer:
      "Start with a low-stakes task you already do regularly — summarising a document, drafting a reply, or brainstorming ideas for a project. Give the tool a clear, specific instruction and evaluate what it produces. Most people find their first genuinely useful result within a few tries.",
  },
  {
    question: "Is it safe to share confidential information with AI tools?",
    answer:
      "As a general rule, avoid sharing personally identifiable information, client data, or anything covered by confidentiality agreements. Most commercial AI tools use data for service delivery and may retain it for improvement purposes. Review the privacy policy of any tool before including sensitive information in your prompts.",
  },
  pillarFaq,
];

// ── Public API ────────────────────────────────────────────────────────────────
export function getFaqForCategory(category: string): FaqItem[] {
  const key = (category ?? "").trim().toLowerCase();
  return categoryFaqs[key] ?? defaultFaqs;
}