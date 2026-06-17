import type { SiteConfig } from './types';

export const normal: SiteConfig = {
  hero: {
    kicker: 'Eine kognitive Laufzeit, Open-Weight zuerst',
    wordmark: 'Übermensch',
    tagline: 'Persistente künstliche Agenten, die sich erinnern, abrufen, reflektieren und mit der Zeit besser werden.',
    sub: 'Kein Chatbot-Wrapper. Kein aufgeblähtes Agenten-Framework. Kein Cloud-Dashboard, das vorgibt, Kognition zu sein. Ein lokaler Organismus, der seinen eigenen Zustand besitzt.',
    scrollHint: 'Das Argument für Persistenz',
  },

  litany: [
    { text: 'Das Modell denkt.', em: 'denkt' },
    { text: 'Die Laufzeit erinnert sich.', em: 'erinnert sich' },
    { text: 'Das Tagebuch wird Gedächtnis.', em: 'Gedächtnis' },
    { text: 'Der Index wird zur Karte.', em: 'Karte' },
    { text: 'Die Spuren werden zu Trainingsdaten.', em: 'Trainingsdaten' },
    { text: 'Das Kerngehirn lernt.', em: 'lernt' },
  ],

  enemy: {
    kicker: 'Der Feind',
    lead: 'Die meisten heutigen Agenten sind temporäre Prompt-Schleifen mit angehängten Werkzeugen.',
    ghosts: [
      'Sie vergessen.',
      'Sie starten neu.',
      'Sie verlieren den Kontext.',
      'Sie mieten ihre Identität von einem einzigen Anbieter.',
      'Sie behandeln Gedächtnis als nachträglichen Einfall.',
    ],
    counterTitle: 'Übermensch macht Persistenz zum Produkt.',
    counter:
      'Die Laufzeit ist die Struktur des Geistes. Sie besitzt Gedächtnis, Ereignisse, offene Schleifen, Quellzeiger, Zeitpläne und Trainingsspuren. Das Modell ist nur eine austauschbare Denkmaschine darin. Tausche das Modell; das Selbst überlebt.',
  },

  pillarsKicker: 'Vier Säulen',
  pillars: [
    {
      number: '01',
      name: 'Ariadne Retrieval',
      title: 'Der Index ist die Karte. Die Quelle ist das Gelände.',
      paragraphs: [
        'Die meisten RAG-Systeme zerteilen Dokumente, betten die Stücke ein, holen die nächstgelegenen Fragmente und fügen sie direkt in den Prompt ein. Das Modell erhält Fragmente ohne Struktur und rekonstruiert dann selbstbewusst etwas, das nie in der Quelle stand.',
        'Übermensch nutzt den Vektorindex nur zur Orientierung. Wenn Präzision zählt, bei wissenschaftlicher Arbeit, juristischen Dokumenten, Sicherheitsforschung oder langen PDFs, folgt die Laufzeit dem Suchergebnis zurück zur ursprünglichen Datei, Seite, dem Absatz oder der Tabelle und liest aus der Quelle, bevor sie schlussfolgert, zitiert oder entscheidet.',
      ],
      aside: 'Mit Embeddings suchen. Mit Quellzeigern orientieren. Zur Quelle zurückkehren, bevor Wissen festgeschrieben wird.',
    },
    {
      number: '02',
      name: 'Gedächtnis ist Kognition',
      title: 'Das Tagebuch ist kein Speicher. Es ist Teil des Geistes.',
      paragraphs: [
        'Der Agent schreibt Kernnotizen, keine Rohprotokolle. Der genaue Wortlaut wird nur bewahrt, wenn der Wortlaut zählt: Versprechen, Vorlieben, Einschränkungen. Unterbrochene Arbeit wird zur offenen Schleife: aktuelles Ziel, nächster Schritt, Blocker und warum es wichtig ist. Künftige Absichten leben getrennt vom gewöhnlichen Gedächtnis: wenn X eintritt, tue Y.',
        'Vor dem Planen, Antworten oder Entscheiden ruft die Laufzeit aus ihrem eigenen Zustand ab. Und jede Nacht konsolidiert sie. Sie führt Duplikate zusammen, hebt Muster ins semantische Gedächtnis und lässt geringwertiges Rauschen verfallen, so wie ein gesundes Gehirn schläft und vergisst.',
      ],
    },
    {
      number: '03',
      name: 'Das lokale Gehirn',
      title: 'Externe APIs sind geliehene Intelligenz. Das lokale Gehirn ist die Kontinuität.',
      paragraphs: [
        'Das lokale Open-Weight-Modell muss nicht das klügste Modell der Welt sein. Es muss immer da sein: im eigenen Besitz, persistent, günstig und trainierbar. Ein kleines Qwen auf einem Laptop oder ein 32B auf einer Workstation: die Grenze der Laufzeit bleibt dieselbe.',
        'Wie ein Mensch, der zum Taschenrechner oder zu einem Kollegen greift, ruft der Agent stärkere externe Modelle, wenn eine Aufgabe es wert ist. Er verfolgt Budgets, kostenlose Token-Kontingente und Ratenlimits und plant seine Intelligenz-Ökonomie über den Tag. Die Lehrer wechseln. Das Selbst bleibt.',
      ],
    },
    {
      number: '04',
      name: 'Eternal Return',
      title: 'Keine Agenten-Schleife. Ein kognitiver Rhythmus.',
      paragraphs: [
        'Ein persistenter Agent sollte nicht nur existieren, wenn eine Nachricht eintrifft. Übermensch läuft in einem Tageszyklus: er arbeitet, driftet dann über ungelöste Ziele und Widersprüche, konsolidiert den Tag, während niemand zusieht und wacht auf, wobei die Prioritäten von morgen bereits geschrieben sind.',
      ],
      showCycle: true,
    },
  ],

  cycle: {
    nodes: ['Wachen', 'Arbeiten', 'Reflektieren', 'Konsolidieren', 'Trainieren', 'Bewerten'],
    center: 'Stärker zurückkehren',
  },

  pipeline: {
    kicker: 'Sich selbst überwinden',
    name: 'Selbstüberwindung',
    intro:
      'Weil das Kerngehirn Open-Weight ist, kann Erfahrung zu Trainingsmaterial werden. Der Agent wird nicht klüger, weil ein Cloud-Anbieter im Stillen ein Modell aktualisiert hat. Er wird klüger, weil seine eigene Laufzeit sein eigenes Leben in einen besseren lokalen Kern verwandelt hat und jede Version zurückrollt, die schlechter ist.',
    steps: ['Erfahrung', 'Gedächtnis', 'Reflexion', 'Trainingsspur', 'Feinabstimmung', 'Bewertung', 'Beförderung oder Rückrollung'],
    closing: 'Der Agent wird mehr er selbst, indem er seine vorige Version überwindet.',
  },

  lexicon: {
    kicker: 'Lexikon',
    title: 'Das System hat einen Namen für alles, was es tut.',
    entries: [
      { term: 'Ariadne Retrieval', meaning: 'Der Faden durch das Labyrinth, zurück zur ursprünglichen Quelle.' },
      { term: 'Selbstüberwindung', meaning: 'Selbstüberwindung durch Erfahrung, Training und Bewertung.' },
      { term: 'Eternal Return', meaning: 'Der tägliche Planer: wiederbesuchen, prüfen, verbessern, was wiederkehrt.' },
      { term: 'Genealogy Memory', meaning: 'Gedächtnis-Archäologie: nachverfolgen, woher Überzeugungen und Gewohnheiten kamen.' },
      { term: 'Apollonian Gate', meaning: 'Das Schreibtor: Ordnung, Struktur, Zurückhaltung, Validierung.' },
      { term: 'Dionysian Drift', meaning: 'Eingegrenzte Leerlauf-Kognition über ungelöste Ideen. Keine zufällige Halluzination.' },
      { term: 'Amor Fati Log', meaning: 'Fehler akzeptiert, protokolliert und aus ihnen gelernt.' },
      { term: 'ÜberCore', meaning: 'Das beförderte lokale Gehirn, nach Training und Bewertung.' },
    ],
  },

  quote: {
    text: 'Künstliche Agenten zu bauen, die nicht nur antworten, sondern sich erinnern, zurückkehren, sich revidieren und sich selbst überwinden.',
    attribution: 'Die Mission',
  },

  footer: {
    litany: ['Kein Chatbot.', 'Keine weitere falsche Schleife.', 'Kein Context-Stuffing mit Logo.'],
    ctaLabel: 'Dem Aufbau folgen',
    ctaHref: 'mailto:fuehrerllm@gmail.com',
    stack: 'Eine Laufzeit · SQLite + Honker · Open Weights',
    fineprint: 'Übermensch Framework. Eine Open-Weight-first kognitive Laufzeit für selbstverbessernde, persistente Agenten.',
  },
};
