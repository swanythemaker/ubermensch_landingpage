import type { SiteConfig } from './types';

export const normal: SiteConfig = {
  hero: {
    kicker: 'Un runtime cognitivo local, primero open-weight',
    wordmark: 'Übermensch',
    tagline: 'Una mente artificial persistente que recuerda, regresa, revisa y se supera a sí misma.',
    sub: 'No es un envoltorio de chatbot. No es un framework de agentes inflado. No es un panel en la nube que finge ser cognición. No es un montón de markdown que nunca se ejecuta. Un organismo local que posee su propio estado.',
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
      'El runtime es la máquina. Memoria, eventos, bucles abiertos, trazas, calendarios: todo le pertenece. El modelo es un cartucho que se carga en un asiento. Cambia el cartucho; el yo sobrevive.',
  },

  pillarsKicker: 'Cinco pilares',
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
        'El runtime escribe notas de lo esencial, no transcripciones en bruto. La redacción exacta se conserva solo cuando la redacción importa: promesas, preferencias, restricciones. El trabajo interrumpido se convierte en un bucle abierto: objetivo actual, siguiente paso, bloqueo y por qué importa. Las intenciones futuras viven aparte de la memoria ordinaria: cuando ocurra X, haz Y.',
        'Antes de planificar, responder o decidir, el runtime recupera de su propio estado. Y cada noche consolida. Fusiona duplicados, promueve patrones a la memoria semántica y deja que el ruido de bajo valor decaiga, como un cerebro sano duerme y olvida.',
      ],
    },
    {
      number: '03',
      name: 'El cerebro local',
      title: 'Las APIs externas son inteligencia prestada. El cerebro local es la continuidad.',
      paragraphs: [
        'El modelo open-weight local no necesita ser el más inteligente del mundo. Necesita estar siempre ahí: propio, persistente, barato y entrenable. Un Qwen pequeño en un portátil o un 32B en una estación de trabajo: el límite del runtime sigue siendo el mismo.',
        'Como un humano que recurre a una calculadora o a un colega, el runtime llama a modelos externos más potentes cuando una tarea lo merece. Decidir qué lo merece es una economía que gestiona para sí mismo. Los maestros cambian. El yo permanece.',
      ],
    },
    {
      number: '04',
      name: 'Attention Capital',
      title: 'El agente no solo recuerda. Decide en qué pensar.',
      paragraphs: [
        'Una mente persistente acumula más asuntos abiertos de los que jamás puede pensar a la vez. Así que compiten. Dentro del runtime hay un mercado donde cada bucle abierto puja por atención, y la cognición va a los asuntos que la ganan: los que antes movieron algo, los que devolvieron el pensamiento gastado en ellos. Solo un runtime que recuerda qué valió la pena puede poner precio a en qué pensar después. Gastar se vuelve un veredicto, no un hábito.',
        'El runtime no gasta a ciegas. Antes de comprometerse, un pequeño pronosticador predice cuánto costará cada asunto y cuánto rendirá. Responde con un rango, no con un solo número, y dice cuán seguro está. Y el runtime siempre guarda atención en reserva para ti: el trabajo que hace mientras no estás nunca puede dejar sin recursos el momento en que llegas.',
      ],
      aside: 'El modelo propone. El pronosticador predice. El mercado decide. El runtime se compromete.',
    },
    {
      number: '05',
      name: 'Eternal Return',
      title: 'No es un bucle de agente. Es un ritmo cognitivo.',
      paragraphs: [
        'Una mente persistente no debería existir solo cuando llega un mensaje. Übermensch funciona en un ciclo diario: trabaja, luego deriva sobre objetivos y contradicciones sin resolver, después consolida el día mientras nadie observa y despierta con las prioridades de mañana ya escritas.',
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
      'Como el cerebro central es open-weight, la experiencia puede volverse material de entrenamiento. El runtime no se vuelve más inteligente porque un proveedor en la nube actualizó un modelo en silencio. Se vuelve más inteligente porque convirtió su propia vida en un mejor núcleo local y revierte cualquier versión que sea peor.',
    steps: ['Experiencia', 'Memoria', 'Reflexión', 'Traza de entrenamiento', 'Ajuste fino', 'Evaluación', 'Promoción o reversión'],
    closing: 'El runtime se vuelve más él mismo al superar su versión anterior.',
  },

  foundations: {
    kicker: 'Fundamentos técnicos',
    title: 'Un núcleo C estrecho. Una cáscara en cualquier lenguaje. Un sustrato duradero.',
    intro:
      'El runtime se divide en tres capas. Un núcleo pequeño, escrito en C, que casi nunca cambia. Una cáscara encima que puede escribirse en cualquier lenguaje y reescribirse a voluntad. Y el sustrato duradero que ambos leen y escriben.',
    layers: [
      {
        name: 'El núcleo',
        tag: 'Escrito en C, una vez',
        body: 'C posee la vida duradera del bucle: el reloj de tics, el flujo de entrada, las escrituras de solo anexar, el primitivo de commit, la cola de despertar, las escrituras del ledger, las comprobaciones de límite de tasa, los hashes de integridad. Es pequeño, aburrido y se escribe una sola vez. Solo se le permite fallar cuando falla el hardware, y todo lo que está encima lo alcanza mediante contratos.',
      },
      {
        name: 'La cáscara',
        tag: 'Cualquier lenguaje',
        body: 'La cognición, la política y el aprendizaje viven aquí: el mercado, el jardinero, los leases, la puntuación de calidad de gasto, el pronosticador, el Traductor, la puerta de commit. El lenguaje es deliberadamente abierto. La cáscara puede caerse, reiniciarse, cambiar de lenguaje o reescribirse por completo, y el runtime sobrevive mientras el núcleo y el sustrato estén intactos.',
      },
      {
        name: 'El sustrato',
        tag: 'Leído y escrito',
        body: 'El suelo duradero sobre el que operan ambas capas: una base de datos global, una carpeta por asunto y contenido pesado direccionado por hash. El núcleo lo escribe; la cáscara lo lee.',
      },
    ],
    storageLabel: 'Almacenamiento',
    storage: [
      { name: 'runtime.db', body: 'El sistema nervioso global, propiedad del núcleo y consultado por la cáscara: el reloj, el índice de bucles, el ledger, la cola de despertar, el estado del mercado, los registros de leases, el registro de pronósticos.' },
      { name: 'carpeta de bucle', body: 'Una carpeta por bucle. Cada asunto es su propio organismo con su propia loop.db: entradas, objetivos, anclas, artefactos, trazas, propuestas, resúmenes.' },
      { name: 'almacén de blobs', body: 'Contenido pesado compartido, direccionado por hash: checkpoints, exportaciones, conjuntos de datos de entrenamiento, adaptadores de modelo. Referenciado por hash desde las bases de datos.' },
    ],
    stackLabel: 'Tecnología',
    stack: [
      { label: 'Mensajería duradera', body: 'NOTIFY y LISTEN al estilo Postgres sobre SQLite: colas duraderas, streams, pub/sub, un planificador y SQL ligero. Un archivo, sin servidor que ejecutar.' },
      { label: 'Pronosticador numérico', body: 'Un pequeño modelo de series temporales (TimesFM) corre localmente en la CPU, prediciendo costo y demanda como rangos, para que el mercado ponga precio a la atención bajo incertidumbre cuantificada.' },
    ],
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
      { term: 'Attention Capital', meaning: 'Los tokens no son combustible sino moneda escasa. Los asuntos pujan por ellos; los dignos los ganan.' },
      { term: 'The Oracle', meaning: 'Previsión numérica: predice cuánto costará y rendirá un asunto, con rangos, no conjeturas. Nunca decide.' },
      { term: 'The Lease', meaning: 'Una concesión revocable de atención a un asunto, acotada por tope, checkpoints y tiempo.' },
      { term: 'Burn Quality', meaning: 'El veredicto sobre un gasto: ¿movió el trabajo? La señal que enseña al runtime a gastar mejor.' },
    ],
  },

  quote: {
    text: 'Construir una mente artificial que no solo responda, sino que recuerde, regrese, revise y se supere a sí misma.',
    attribution: 'La misión',
  },

  footer: {
    litany: ['No es un chatbot.', 'No es otro bucle falso.', 'No es relleno de contexto con un logo.', 'No es una carpeta de archivos markdown.'],
    ctaLabel: 'Sigue la construcción',
    ctaHref: 'mailto:fuehrerllm@gmail.com',
    stack: 'Un runtime · Un archivo SQLite · Open weights',
    fineprint: 'Übermensch Framework. Un runtime cognitivo, primero open-weight, que se recuerda a sí mismo.',
  },
};
