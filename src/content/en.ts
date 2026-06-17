import type { SiteConfig } from './types';

export const normal: SiteConfig = {
  hero: {
    kicker: 'A local, open-weight-first cognitive runtime',
    wordmark: 'Übermensch',
    tagline: 'A persistent artificial mind that remembers, returns, revises and overcomes itself.',
    sub: 'Not a chatbot wrapper. Not a bloated agent framework. Not a cloud dashboard pretending to be cognition. Not a pile of markdown that never runs. A local organism that owns its state.',
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
      'The runtime is the machine. Memory, events, open loops, traces, schedules: all owned. The model is a cartridge that loads into a seat. Swap the cartridge; the self survives.',
  },

  pillarsKicker: 'Five pillars',
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
        'The runtime writes gist notes, not raw transcripts. Exact wording is kept only when wording matters: promises, preferences, constraints. Interrupted work becomes an open loop: current goal, next step, blocker, and why it matters. Future intentions live apart from ordinary memory: when X happens, do Y.',
        'Before planning, replying, or deciding, the runtime retrieves from its own state. And each night it consolidates. It merges duplicates, promotes patterns into semantic memory and lets low-value noise decay, the way a healthy brain sleeps and forgets.',
      ],
    },
    {
      number: '03',
      name: 'The Local Brain',
      title: 'External APIs are borrowed intelligence. The local brain is the continuity.',
      paragraphs: [
        'The local open-weight model does not need to be the smartest model in the world. It needs to be always there: owned, persistent, cheap, and trainable. A small Qwen on a laptop or a 32B on a workstation: the runtime boundary stays the same.',
        'Like a human reaching for a calculator or a colleague, the runtime calls stronger external models when a task is worth it. Deciding what is worth it is an economy it runs for itself. The teachers change. The self remains.',
      ],
    },
    {
      number: '04',
      name: 'Attention Capital',
      title: 'The runtime does not just remember. It decides what to think about.',
      paragraphs: [
        'A persistent mind gathers more open concerns than it can ever think about at once. So they contend. Inside the runtime is a market where every open loop bids for attention, and cognition goes to the concerns that earn it: the ones that moved something before, that repaid the thought spent on them. Only a runtime that remembers what paid off can price what to think about next. Spending becomes a verdict, not a habit.',
        'The runtime does not spend blind. Before it commits, a small forecaster predicts what each concern will cost and what it will return. It answers with a range, not a single number, and says how sure it is. And the runtime always keeps attention in reserve for you: the work it does while you are away can never starve the moment you arrive.',
      ],
      aside: 'The model proposes. The forecaster predicts. The market decides. The runtime commits.',
    },
    {
      number: '05',
      name: 'Eternal Return',
      title: 'Not an agent loop. A cognitive rhythm.',
      paragraphs: [
        'A persistent mind should not exist only when a message arrives. Übermensch runs on a daily cycle: it works, then drifts over unresolved goals and contradictions, then consolidates the day while nothing is watching and wakes up with tomorrow’s priorities already written.',
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
      'Because the core brain is open-weight, experience can become training material. The runtime does not get smarter because a cloud provider silently upgraded a model. It gets smarter because it turned its own life into a better local core and rolls back any version that is worse.',
    steps: ['Experience', 'Memory', 'Reflection', 'Training trace', 'Fine-tune', 'Evaluation', 'Promotion or rollback'],
    closing: 'The runtime becomes more itself by overcoming its previous version.',
  },

  foundations: {
    kicker: 'Technical foundations',
    title: 'A narrow C core. A shell in any language. One durable substrate.',
    intro:
      'The runtime splits into three layers. A small core, written in C, that almost never changes. A shell above it that can be written in any language and rewritten at will. And the durable substrate both of them read and write.',
    layers: [
      {
        name: 'The core',
        tag: 'Written in C, once',
        body: 'C owns durable loop life: the tick clock, the intake stream, append-only writes, the commit primitive, the wake queue, ledger writes, rate-limit checks, integrity hashes. It is small, boring, and written once. It is allowed to fail only when the hardware does, and everything above reaches it through contracts.',
      },
      {
        name: 'The shell',
        tag: 'Any language',
        body: 'Cognition, policy and learning live here: the market, the gardener, leases, burn-quality scoring, the forecaster, the Translator, the commit gate. The language is deliberately open. The shell can crash, restart, swap languages or be rewritten entirely, and the runtime survives as long as the core and the substrate are intact.',
      },
      {
        name: 'The substrate',
        tag: 'Read and written',
        body: 'The durable ground both layers operate over: one global database, one folder per concern, and heavy content addressed by hash. The core writes it; the shell reads it.',
      },
    ],
    storageLabel: 'Storage',
    storage: [
      { name: 'runtime.db', body: 'The global nervous system, owned by the core and queried by the shell: the clock, the loops index, the ledger, the wake queue, market state, lease records, the forecast log.' },
      { name: 'loop folder', body: 'One folder per loop. Every concern is its own organism with its own loop.db: entries, objectives, anchors, artifacts, traces, proposals, summaries.' },
      { name: 'blob store', body: 'Shared heavy content, addressed by hash: checkpoints, exports, training datasets, model adapters. Referenced by hash from the databases.' },
    ],
    stackLabel: 'Stack',
    stack: [
      { label: 'Durable messaging', body: 'Postgres-style NOTIFY and LISTEN on SQLite: durable queues, streams, pub/sub, a scheduler and light SQL. One file, no server to run.' },
      { label: 'Numerical forecaster', body: 'A small time-series model (TimesFM) runs locally on CPU, predicting cost and demand as ranges, so the market prices attention under quantified uncertainty.' },
    ],
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
      { term: 'Attention Capital', meaning: 'Tokens are not fuel but scarce currency. Concerns bid for it; the worthy earn it.' },
      { term: 'The Oracle', meaning: 'Numerical foresight: predicts what a concern will cost and return, with ranges, not guesses. Never decides.' },
      { term: 'The Lease', meaning: 'A revocable grant of attention to one concern, bounded by cap, checkpoints, and time.' },
      { term: 'Burn Quality', meaning: 'The verdict on a spend: did it move the work? The signal that teaches the runtime to spend better.' },
    ],
  },

  quote: {
    text: 'To build an artificial mind that does not merely answer, but remembers, returns, revises, and overcomes itself.',
    attribution: 'The mission',
  },

  footer: {
    litany: ['Not a chatbot.', 'Not another fake loop.', 'Not context stuffing with a logo.', 'Not a folder of markdown files.'],
    ctaLabel: 'Follow the build',
    ctaHref: 'mailto:fuehrerllm@gmail.com',
    stack: 'One runtime · One SQLite file · Open weights',
    fineprint: 'Übermensch Framework. An open-weight-first cognitive runtime that remembers itself.',
  },
};
