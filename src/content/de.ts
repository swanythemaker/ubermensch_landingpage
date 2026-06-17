import type { SiteConfig } from './types';

export const normal: SiteConfig = {
  hero: {
    kicker: 'Eine lokale kognitive Laufzeit, Open-Weight zuerst',
    wordmark: 'Übermensch',
    tagline: 'Ein persistenter künstlicher Geist, der sich erinnert, zurückkehrt, sich revidiert und sich selbst überwindet.',
    sub: 'Kein Chatbot-Wrapper. Kein aufgeblähtes Agenten-Framework. Kein Cloud-Dashboard, das vorgibt, Kognition zu sein. Kein Stapel Markdown, der nie läuft. Ein lokaler Organismus, der seinen eigenen Zustand besitzt.',
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
      'Die Laufzeit ist die Maschine. Gedächtnis, Ereignisse, offene Schleifen, Spuren, Zeitpläne: alles im eigenen Besitz. Das Modell ist eine Kassette, die in einen Sitz geladen wird. Tausche die Kassette; das Selbst überlebt.',
  },

  pillarsKicker: 'Fünf Säulen',
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
        'Die Laufzeit schreibt Kernnotizen, keine Rohprotokolle. Der genaue Wortlaut wird nur bewahrt, wenn der Wortlaut zählt: Versprechen, Vorlieben, Einschränkungen. Unterbrochene Arbeit wird zur offenen Schleife: aktuelles Ziel, nächster Schritt, Blocker und warum es wichtig ist. Künftige Absichten leben getrennt vom gewöhnlichen Gedächtnis: wenn X eintritt, tue Y.',
        'Vor dem Planen, Antworten oder Entscheiden ruft die Laufzeit aus ihrem eigenen Zustand ab. Und jede Nacht konsolidiert sie. Sie führt Duplikate zusammen, hebt Muster ins semantische Gedächtnis und lässt geringwertiges Rauschen verfallen, so wie ein gesundes Gehirn schläft und vergisst.',
      ],
    },
    {
      number: '03',
      name: 'Das lokale Gehirn',
      title: 'Externe APIs sind geliehene Intelligenz. Das lokale Gehirn ist die Kontinuität.',
      paragraphs: [
        'Das lokale Open-Weight-Modell muss nicht das klügste Modell der Welt sein. Es muss immer da sein: im eigenen Besitz, persistent, günstig und trainierbar. Ein kleines Qwen auf einem Laptop oder ein 32B auf einer Workstation: die Grenze der Laufzeit bleibt dieselbe.',
        'Wie ein Mensch, der zum Taschenrechner oder zu einem Kollegen greift, ruft die Laufzeit stärkere externe Modelle, wenn eine Aufgabe es wert ist. Zu entscheiden, was es wert ist, ist eine Ökonomie, die sie für sich selbst betreibt. Die Lehrer wechseln. Das Selbst bleibt.',
      ],
    },
    {
      number: '04',
      name: 'Attention Capital',
      title: 'Der Agent erinnert sich nicht nur. Er entscheidet, worüber er nachdenkt.',
      paragraphs: [
        'Ein persistenter Geist sammelt mehr offene Anliegen, als er je auf einmal bedenken kann. Also wetteifern sie. In der Laufzeit liegt ein Markt, auf dem jede offene Schleife um Aufmerksamkeit bietet, und die Kognition geht an die Anliegen, die sie sich verdienen: jene, die zuvor etwas bewegt haben, die den auf sie verwendeten Gedanken zurückzahlten. Nur eine Laufzeit, die sich erinnert, was sich gelohnt hat, kann bepreisen, worüber als Nächstes nachzudenken ist. Ausgeben wird zum Urteil, nicht zur Gewohnheit.',
        'Die Laufzeit gibt nicht blind aus. Bevor sie sich festlegt, sagt ein kleiner Prognostiker voraus, was jedes Anliegen kosten und was es einbringen wird. Er antwortet mit einem Bereich, nicht mit einer einzelnen Zahl, und sagt, wie sicher er ist. Und die Laufzeit hält stets Aufmerksamkeit für dich in Reserve: die Arbeit, die sie verrichtet, während du fort bist, darf den Moment deiner Ankunft niemals aushungern.',
      ],
      aside: 'Das Modell schlägt vor. Der Prognostiker sagt voraus. Der Markt entscheidet. Die Laufzeit legt sich fest.',
    },
    {
      number: '05',
      name: 'Eternal Return',
      title: 'Keine Agenten-Schleife. Ein kognitiver Rhythmus.',
      paragraphs: [
        'Ein persistenter Geist sollte nicht nur existieren, wenn eine Nachricht eintrifft. Übermensch läuft in einem Tageszyklus: er arbeitet, driftet dann über ungelöste Ziele und Widersprüche, konsolidiert den Tag, während niemand zusieht und wacht auf, wobei die Prioritäten von morgen bereits geschrieben sind.',
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
      'Weil das Kerngehirn Open-Weight ist, kann Erfahrung zu Trainingsmaterial werden. Die Laufzeit wird nicht klüger, weil ein Cloud-Anbieter im Stillen ein Modell aktualisiert hat. Sie wird klüger, weil sie ihr eigenes Leben in einen besseren lokalen Kern verwandelt hat und jede Version zurückrollt, die schlechter ist.',
    steps: ['Erfahrung', 'Gedächtnis', 'Reflexion', 'Trainingsspur', 'Feinabstimmung', 'Bewertung', 'Beförderung oder Rückrollung'],
    closing: 'Die Laufzeit wird mehr sie selbst, indem sie ihre vorige Version überwindet.',
  },

  foundations: {
    kicker: 'Technische Grundlagen',
    title: 'Ein schmaler C-Kern. Eine Schale in jeder Sprache. Ein dauerhaftes Substrat.',
    intro:
      'Die Laufzeit teilt sich in drei Schichten. Ein kleiner Kern, in C geschrieben, der sich fast nie ändert. Eine Schale darüber, die in jeder Sprache geschrieben und nach Belieben neu geschrieben werden kann. Und das dauerhafte Substrat, das beide lesen und schreiben.',
    layers: [
      {
        name: 'Der Kern',
        tag: 'In C geschrieben, einmal',
        body: 'C besitzt das dauerhafte Leben der Schleife: die Tick-Uhr, den Eingangsstrom, das ausschließlich anhängende Schreiben, das Commit-Primitiv, die Weckschlange, die Ledger-Schreibvorgänge, die Ratenlimit-Prüfungen, die Integritäts-Hashes. Er ist klein, langweilig und einmal geschrieben. Er darf nur dann versagen, wenn die Hardware versagt, und alles darüber erreicht ihn über Verträge.',
      },
      {
        name: 'Die Schale',
        tag: 'Jede Sprache',
        body: 'Kognition, Politik und Lernen leben hier: der Markt, der Gärtner, die Leases, die Bewertung der Verbrennungsqualität, der Prognostiker, der Übersetzer, das Commit-Tor. Die Sprache ist bewusst offen. Die Schale kann abstürzen, neu starten, die Sprache wechseln oder vollständig neu geschrieben werden, und die Laufzeit überlebt, solange Kern und Substrat intakt sind.',
      },
      {
        name: 'Das Substrat',
        tag: 'Gelesen und geschrieben',
        body: 'Der dauerhafte Boden, über dem beide Schichten arbeiten: eine globale Datenbank, ein Ordner pro Anliegen und schwere Inhalte, adressiert per Hash. Der Kern schreibt es; die Schale liest es.',
      },
    ],
    storageLabel: 'Speicher',
    storage: [
      { name: 'runtime.db', body: 'Das globale Nervensystem, im Besitz des Kerns und von der Schale abgefragt: die Uhr, der Schleifenindex, das Ledger, die Weckschlange, der Marktzustand, die Lease-Einträge, das Prognoseprotokoll.' },
      { name: 'Schleifenordner', body: 'Ein Ordner pro Schleife. Jedes Anliegen ist ein eigener Organismus mit eigener loop.db: Einträge, Ziele, Anker, Artefakte, Spuren, Vorschläge, Zusammenfassungen.' },
      { name: 'Blob-Speicher', body: 'Gemeinsame schwere Inhalte, adressiert per Hash: Checkpoints, Exporte, Trainingsdatensätze, Modell-Adapter. Aus den Datenbanken per Hash referenziert.' },
    ],
    stackLabel: 'Technologie',
    stack: [
      { label: 'Dauerhaftes Messaging', body: 'NOTIFY und LISTEN im Postgres-Stil auf SQLite: dauerhafte Warteschlangen, Streams, Pub/Sub, ein Planer und leichtes SQL. Eine Datei, kein Server zu betreiben.' },
      { label: 'Numerischer Prognostiker', body: 'Ein kleines Zeitreihenmodell (TimesFM) läuft lokal auf der CPU und sagt Kosten und Nachfrage als Bereiche voraus, damit der Markt Aufmerksamkeit unter quantifizierter Unsicherheit bepreist.' },
    ],
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
      { term: 'Attention Capital', meaning: 'Token sind kein Treibstoff, sondern knappe Währung. Anliegen bieten darum; die Würdigen verdienen es.' },
      { term: 'The Oracle', meaning: 'Numerische Voraussicht: sagt voraus, was ein Anliegen kosten und einbringen wird, mit Bereichen, nicht Vermutungen. Entscheidet nie.' },
      { term: 'The Lease', meaning: 'Eine widerrufliche Gewährung von Aufmerksamkeit an ein Anliegen, begrenzt durch Obergrenze, Checkpoints und Zeit.' },
      { term: 'Burn Quality', meaning: 'Das Urteil über eine Ausgabe: hat sie die Arbeit bewegt? Das Signal, das die Laufzeit lehrt, besser auszugeben.' },
    ],
  },

  quote: {
    text: 'Einen künstlichen Geist zu bauen, der nicht nur antwortet, sondern sich erinnert, zurückkehrt, sich revidiert und sich selbst überwindet.',
    attribution: 'Die Mission',
  },

  footer: {
    litany: ['Kein Chatbot.', 'Keine weitere falsche Schleife.', 'Kein Context-Stuffing mit Logo.', 'Kein Ordner voller Markdown-Dateien.'],
    ctaLabel: 'Dem Aufbau folgen',
    ctaHref: 'mailto:fuehrerllm@gmail.com',
    stack: 'Eine Laufzeit · Eine SQLite-Datei · Open Weights',
    fineprint: 'Übermensch Framework. Eine Open-Weight-first kognitive Laufzeit, die sich an sich selbst erinnert.',
  },
};
