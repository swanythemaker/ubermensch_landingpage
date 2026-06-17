import type { SiteConfig } from './types';

export const normal: SiteConfig = {
  hero: {
    kicker: 'An open-weight-first cognitive runtime',
    wordmark: 'Übermensch',
    tagline: 'Persistent artificial agents that remember, retrieve, reflect and improve over time.',
    sub: 'Not a chatbot wrapper. Not a bloated agent framework. Not a cloud dashboard pretending to be cognition. A local organism that owns its state.',
    scrollHint: 'The case for persistence',
  },

  litany: [
    { text: 'The model thinks.', em: 'thinks' },
    { text: 'The runtime remembers.', em: 'remembers' },
    { text: 'The diary becomes memory.', em: 'memory' },
    { text: 'The index becomes a map.', em: 'map' },
    { text: 'The traces become training data.', em: 'training data' },
    { text: 'The core brain learns.', em: 'learns' },
  ],

  enemy: {
    kicker: 'The enemy',
    lead: 'Most current agents are temporary prompt loops with tools attached.',
    ghosts: [
      'They forget.',
      'They restart.',
      'They lose context.',
      'They rent their identity from one provider.',
      'They treat memory as an afterthought.',
    ],
    counterTitle: 'Übermensch treats persistence as the product.',
    counter:
      'The runtime is the mind structure. It owns memory, events, open loops, source pointers, schedules, and training traces. The model is only one replaceable reasoning engine inside it. Swap the model; the self survives.',
  },

  pillarsKicker: 'Four pillars',
  pillars: [
    {
      number: '01',
      name: 'Ariadne Retrieval',
      title: 'The index is the map. The source is the territory.',
      paragraphs: [
        'Most RAG systems chunk documents, embed the chunks, retrieve the closest fragments, and paste them straight into the prompt. The model receives fragments without structure, then confidently reconstructs something that was never in the source.',
        'Übermensch uses the vector index only to orient. When precision matters in scientific work, legal documents, security research, or long PDFs, the runtime follows the retrieval result back to the original file, page, paragraph, or table, and reads from the source before reasoning, citing, or deciding.',
      ],
      aside: 'Search with embeddings. Orient with source pointers. Return to the original before committing knowledge.',
    },
    {
      number: '02',
      name: 'Memory is Cognition',
      title: 'The diary is not storage. It is part of the mind.',
      paragraphs: [
        'The agent writes gist notes, not raw transcripts. Exact wording is kept only when wording matters: promises, preferences, constraints. Interrupted work becomes an open loop: current goal, next step, blocker, and why it matters. Future intentions live apart from ordinary memory: when X happens, do Y.',
        'Before planning, replying, or deciding, the runtime retrieves from its own state. And each night it consolidates. It merges duplicates, promotes patterns into semantic memory and lets low-value noise decay, the way a healthy brain sleeps and forgets.',
      ],
    },
    {
      number: '03',
      name: 'The Local Brain',
      title: 'External APIs are borrowed intelligence. The local brain is the continuity.',
      paragraphs: [
        'The local open-weight model does not need to be the smartest model in the world. It needs to be always there: owned, persistent, cheap, and trainable. A small Qwen on a laptop or a 32B on a workstation: the runtime boundary stays the same.',
        'Like a human reaching for a calculator or a colleague, the agent calls stronger external models when a task is worth it. It tracks budgets, free token pools, and rate limits, planning its intelligence economy across the day. The teachers change. The self remains.',
      ],
    },
    {
      number: '04',
      name: 'Eternal Return',
      title: 'Not an agent loop. A cognitive rhythm.',
      paragraphs: [
        'A persistent agent should not exist only when a message arrives. Übermensch runs on a daily cycle: it works, then drifts over unresolved goals and contradictions, then consolidates the day while nothing is watching and wakes up with tomorrow’s priorities already written.',
      ],
      showCycle: true,
    },
  ],

  cycle: {
    nodes: ['Wake', 'Work', 'Reflect', 'Consolidate', 'Train', 'Evaluate'],
    center: 'Return stronger',
  },

  pipeline: {
    kicker: 'Self-overcoming',
    name: 'Selbstüberwindung',
    intro:
      'Because the core brain is open-weight, experience can become training material. The agent does not get smarter because a cloud provider silently upgraded a model. It gets smarter because its own runtime turned its own life into a better local core and rolls back any version that is worse.',
    steps: ['Experience', 'Memory', 'Reflection', 'Training trace', 'Fine-tune', 'Evaluation', 'Promotion or rollback'],
    closing: 'The agent becomes more itself by overcoming its previous version.',
  },

  lexicon: {
    kicker: 'Lexicon',
    title: 'The system has a name for everything it does.',
    entries: [
      { term: 'Ariadne Retrieval', meaning: 'The thread through the labyrinth, back to the original source.' },
      { term: 'Selbstüberwindung', meaning: 'Self-overcoming through experience, training, and evaluation.' },
      { term: 'Eternal Return', meaning: 'The daily scheduler: revisit, review, improve what recurs.' },
      { term: 'Genealogy Memory', meaning: 'Memory archaeology: trace where beliefs and habits came from.' },
      { term: 'Apollonian Gate', meaning: 'The write gate: order, structure, restraint, validation.' },
      { term: 'Dionysian Drift', meaning: 'Constrained idle cognition over unresolved ideas. Not random hallucination.' },
      { term: 'Amor Fati Log', meaning: 'Failures accepted, logged, and learned from.' },
      { term: 'ÜberCore', meaning: 'The promoted local brain, after training and evaluation.' },
    ],
  },

  quote: {
    text: 'To build artificial agents that do not merely answer, but remember, return, revise, and overcome themselves.',
    attribution: 'The mission',
  },

  footer: {
    litany: ['Not a chatbot.', 'Not another fake loop.', 'Not context stuffing with a logo.'],
    ctaLabel: 'Follow the build',
    ctaHref: 'mailto:fuehrerllm@gmail.com',
    stack: 'One runtime · SQLite + Honker · Open weights',
    fineprint: 'Übermensch Framework. An open-weight-first cognitive runtime for self-improving persistent agents.',
  },
};
