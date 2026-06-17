import type { SiteConfig } from './types';

export const normal: SiteConfig = {
  hero: {
    kicker: 'Un runtime cognitivo, primero open-weight',
    wordmark: 'Übermensch',
    tagline: 'Agentes artificiales persistentes que recuerdan, recuperan, reflexionan y mejoran con el tiempo.',
    sub: 'No es un envoltorio de chatbot. No es un framework de agentes inflado. No es un panel en la nube que finge ser cognición. Un organismo local que posee su propio estado.',
    scrollHint: 'El argumento a favor de la persistencia',
  },

  litany: [
    { text: 'El modelo piensa.', em: 'piensa' },
    { text: 'El runtime recuerda.', em: 'recuerda' },
    { text: 'El diario se vuelve memoria.', em: 'memoria' },
    { text: 'El índice se vuelve un mapa.', em: 'mapa' },
    { text: 'Las trazas se vuelven datos de entrenamiento.', em: 'datos de entrenamiento' },
    { text: 'El cerebro central aprende.', em: 'aprende' },
  ],

  enemy: {
    kicker: 'El enemigo',
    lead: 'La mayoría de los agentes actuales son bucles de prompts temporales con herramientas adosadas.',
    ghosts: [
      'Olvidan.',
      'Se reinician.',
      'Pierden el contexto.',
      'Alquilan su identidad a un solo proveedor.',
      'Tratan la memoria como una ocurrencia tardía.',
    ],
    counterTitle: 'Übermensch convierte la persistencia en el producto.',
    counter:
      'El runtime es la estructura de la mente. Posee memoria, eventos, bucles abiertos, punteros a la fuente, calendarios y trazas de entrenamiento. El modelo es solo un motor de razonamiento reemplazable dentro de él. Cambia el modelo; el yo sobrevive.',
  },

  pillarsKicker: 'Cuatro pilares',
  pillars: [
    {
      number: '01',
      name: 'Ariadne Retrieval',
      title: 'El índice es el mapa. La fuente es el territorio.',
      paragraphs: [
        'La mayoría de los sistemas RAG fragmentan documentos, incrustan los fragmentos, recuperan los más cercanos y los pegan directamente en el prompt. El modelo recibe fragmentos sin estructura y luego reconstruye con confianza algo que nunca estuvo en la fuente.',
        'Übermensch usa el índice vectorial solo para orientarse. Cuando la precisión importa en trabajo científico, documentos legales, investigación de seguridad o PDFs largos, el runtime sigue el resultado de la búsqueda de vuelta al archivo, la página, el párrafo o la tabla originales, y lee de la fuente antes de razonar, citar o decidir.',
      ],
      aside: 'Buscar con embeddings. Orientarse con punteros a la fuente. Volver al original antes de fijar el conocimiento.',
    },
    {
      number: '02',
      name: 'La memoria es cognición',
      title: 'El diario no es almacenamiento. Es parte de la mente.',
      paragraphs: [
        'El agente escribe notas de lo esencial, no transcripciones en bruto. La redacción exacta se conserva solo cuando la redacción importa: promesas, preferencias, restricciones. El trabajo interrumpido se convierte en un bucle abierto: objetivo actual, siguiente paso, bloqueo y por qué importa. Las intenciones futuras viven aparte de la memoria ordinaria: cuando ocurra X, haz Y.',
        'Antes de planificar, responder o decidir, el runtime recupera de su propio estado. Y cada noche consolida. Fusiona duplicados, promueve patrones a la memoria semántica y deja que el ruido de bajo valor decaiga, como un cerebro sano duerme y olvida.',
      ],
    },
    {
      number: '03',
      name: 'El cerebro local',
      title: 'Las APIs externas son inteligencia prestada. El cerebro local es la continuidad.',
      paragraphs: [
        'El modelo open-weight local no necesita ser el más inteligente del mundo. Necesita estar siempre ahí: propio, persistente, barato y entrenable. Un Qwen pequeño en un portátil o un 32B en una estación de trabajo: el límite del runtime sigue siendo el mismo.',
        'Como un humano que recurre a una calculadora o a un colega, el agente llama a modelos externos más potentes cuando una tarea lo merece. Rastrea presupuestos, cuotas gratuitas de tokens y límites de tasa, planificando su economía de inteligencia a lo largo del día. Los maestros cambian. El yo permanece.',
      ],
    },
    {
      number: '04',
      name: 'Eternal Return',
      title: 'No es un bucle de agente. Es un ritmo cognitivo.',
      paragraphs: [
        'Un agente persistente no debería existir solo cuando llega un mensaje. Übermensch funciona en un ciclo diario: trabaja, luego deriva sobre objetivos y contradicciones sin resolver, después consolida el día mientras nadie observa y despierta con las prioridades de mañana ya escritas.',
      ],
      showCycle: true,
    },
  ],

  cycle: {
    nodes: ['Despertar', 'Trabajar', 'Reflexionar', 'Consolidar', 'Entrenar', 'Evaluar'],
    center: 'Volver más fuerte',
  },

  pipeline: {
    kicker: 'Autosuperación',
    name: 'Selbstüberwindung',
    intro:
      'Como el cerebro central es open-weight, la experiencia puede volverse material de entrenamiento. El agente no se vuelve más inteligente porque un proveedor en la nube actualizó un modelo en silencio. Se vuelve más inteligente porque su propio runtime convirtió su propia vida en un mejor núcleo local y revierte cualquier versión que sea peor.',
    steps: ['Experiencia', 'Memoria', 'Reflexión', 'Traza de entrenamiento', 'Ajuste fino', 'Evaluación', 'Promoción o reversión'],
    closing: 'El agente se vuelve más él mismo al superar su versión anterior.',
  },

  lexicon: {
    kicker: 'Léxico',
    title: 'El sistema tiene un nombre para todo lo que hace.',
    entries: [
      { term: 'Ariadne Retrieval', meaning: 'El hilo a través del laberinto, de vuelta a la fuente original.' },
      { term: 'Selbstüberwindung', meaning: 'Autosuperación a través de la experiencia, el entrenamiento y la evaluación.' },
      { term: 'Eternal Return', meaning: 'El planificador diario: revisitar, revisar, mejorar lo que se repite.' },
      { term: 'Genealogy Memory', meaning: 'Arqueología de la memoria: rastrear de dónde vinieron creencias y hábitos.' },
      { term: 'Apollonian Gate', meaning: 'La puerta de escritura: orden, estructura, contención, validación.' },
      { term: 'Dionysian Drift', meaning: 'Cognición en reposo, acotada, sobre ideas sin resolver. No alucinación aleatoria.' },
      { term: 'Amor Fati Log', meaning: 'Fallos aceptados, registrados y aprendidos.' },
      { term: 'ÜberCore', meaning: 'El cerebro local promovido, tras entrenamiento y evaluación.' },
    ],
  },

  quote: {
    text: 'Construir agentes artificiales que no solo respondan, sino que recuerden, regresen, revisen y se superen a sí mismos.',
    attribution: 'La misión',
  },

  footer: {
    litany: ['No es un chatbot.', 'No es otro bucle falso.', 'No es relleno de contexto con un logo.'],
    ctaLabel: 'Sigue la construcción',
    ctaHref: 'mailto:fuehrerllm@gmail.com',
    stack: 'Un runtime · SQLite + Honker · Open weights',
    fineprint: 'Übermensch Framework. Un runtime cognitivo, primero open-weight, para agentes persistentes que se automejoran.',
  },
};
