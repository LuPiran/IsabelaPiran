/**
 * Conteúdo textual do site — Dra. Isabela Piran
 * Centralizado para facilitar revisões e traduções.
 */

export const doctor = {
  /** Nome completo como aparece no site */
  fullName: 'Dra. Isabela Piran',
  /** Uso em frases (ex.: "com a Dra. Isabela Piran") */
  nameWithTitle: 'Dra. Isabela Piran',
  /** SEO / meta */
  siteTitle: 'Dra. Isabela Piran — Odontologia',
}

export const hero = {
  badge:
    'Cuidado odontológico de excelência com a Dra. Isabela Piran',
  titleBefore: 'Seu ',
  titleHighlight: 'melhor sorriso',
  titleAfter: ' com a Dra. Isabela Piran',
  subtitle:
    'Atendimento humanizado, tecnologia moderna e tratamentos personalizados para a sua saúde bucal — no consultório da Dra. Isabela Piran.',
  ctaPrimary: 'Explorar serviços',
  ctaVideo: 'Assistir vídeo',
  heroImageAlt: 'Dra. Isabela Piran — sorriso acolhedor',
}

export const appointment = {
  nameLabel: 'Nome',
  namePlaceholder: 'Seu nome',
  phoneLabel: 'Telefone',
  phonePlaceholder: '(00) 00000-0000',
  dateLabel: 'Data desejada',
  datePlaceholder: 'dd/mm/aaaa',
  timeLabel: 'Horário desejado',
  timePlaceholder: '00:00',
  submit: 'Agendar consulta',
}

export const about = {
  sectionLabel: 'Sobre a doutora',
  titleHighlight: 'Experiência e carinho',
  titleRest: 'em cada consulta',
  paragraph:
    'A Dra. Isabela Piran dedica-se a proporcionar um atendimento completo, com foco em prevenção, estética dental e reabilitação oral, para que você se sinta confiante ao sorrir.',
  bullets: [
    'Atendimento personalizado e acolhedor pela Dra. Isabela',
    'Formação sólida e atualização constante em odontologia',
    'Compromisso com o seu bem-estar e com resultados naturais',
  ],
  cta: 'Saiba mais',
  imageMainAlt: 'Atendimento odontológico — Dra. Isabela Piran',
  imageSecondaryAlt: 'Consulta com a Dra. Isabela Piran',
}

export const marqueeServices = [
  'Restauração',
  'Limpeza',
  'Facetas em Resina',
  'Urgências',
  'Prótese',
  'Laserterapia',
]

export const servicesSection = {
  label: 'Nossos serviços',
  titleHighlight: 'Uma ampla gama de serviços',
  titleRest: 'com a Dra. Isabela Piran',
}

/**
 * Cards de serviços — `icon` é resolvido em ServicesSection
 */
export const servicesCards = [
  {
    id: 'restauracao',
    titulo: 'Restauração',
    descricao:
      'Recuperação estética e funcional de dentes com cárie, fraturas ou desgastes, preservando estrutura dental e naturalidade do sorriso.',
    imagem: '/consulta3.jpg',
    icon: 'tooth',
  },
  {
    id: 'limpeza',
    titulo: 'Limpeza',
    descricao:
      'Profilaxia profissional para remover placa e tártaro, ajudando na prevenção de cáries e doenças gengivais e mantendo a saúde bucal em dia.',
    imagem: '/consulta4.jpg',
    icon: 'sparkles',
  },
  {
    id: 'facetas-resina',
    titulo: 'Facetas em Resina',
    descricao:
      'Correções estéticas de forma, cor e pequenas imperfeições com técnica minimamente invasiva para um sorriso mais harmônico.',
    imagem: '/consulta5.jpg',
    icon: 'wand',
  },
  {
    id: 'urgencias',
    titulo: 'Urgências',
    descricao:
      'Atendimento para dor, fratura dentária, inflamações e intercorrências que exigem cuidado rápido, com foco em alívio e resolução segura.',
    imagem: '/consulta6.jpg',
    icon: 'alert',
  },
  {
    id: 'protese',
    titulo: 'Prótese',
    descricao:
      'Reabilitação oral com próteses planejadas para devolver mastigação, estética e conforto, respeitando as necessidades de cada paciente.',
    imagem: '/consulta7.jpg',
    icon: 'teethOpen',
  },
  {
    id: 'laserterapia',
    titulo: 'Laserterapia',
    descricao:
      'Tecnologia auxiliar para acelerar cicatrização, reduzir inflamação e desconforto em diferentes fases do tratamento odontológico.',
    imagem: '/consulta8.jpg',
    icon: 'bolt',
  },
]

/** Depoimentos — logo abaixo dos cards de serviços */
export const testimonialsSection = {
  label: 'Depoimentos',
  titleHighlight: 'O que dizem',
  titleRest: 'meus pacientes',
  items: [
    {
      id: 't1',
      name: 'Patricia Buneker',
      hint: 'Paciente',
      text:
        'Sou uma paciente muito exigente e posso afirmar que fiquei totalmente satisfeita e feliz com o atendimento da dra Isabela.',
      rating: 5,
    },
    {
      id: 't2',
      name: 'Franciele Mota',
      hint: 'Paciente',
      text:
        'Fiz um procedimento com a Dra Isabela e estou extremamente satisfeita. Ela demonstrou muita segurança, cuidado e profissionalismo. Atendimento atencioso, explicou todo o processo com muita clareza e o resultado ficou excelente. Recomendo com certeza!',
      rating: 5,
    },
    {
      id: 't3',
      name: 'Luciane Szulczewski',
      hint: 'Paciente',
      text: 'Profissional excelente.',
      rating: 5,
    },
  ],
}

/** Formação acadêmica — 2 itens; barra lateral preenche com o scroll */
export const educationSection = {
  label: 'Formação',
  titleHighlight: 'Minha trajetória',
  titleRest: 'acadêmica',
  intro:
    'A base da minha prática clínica e do cuidado que você recebe no consultório.',
  items: [
    {
      id: 'e1',
      title: 'Graduação em Odontologia',
      institution: 'Universidade (informe a instituição)',
      period: '2010 — 2015',
      description:
        'Formação em ciências odontológicas com foco em diagnóstico, clínica integrada e promoção da saúde bucal.',
    },
    {
      id: 'e2',
      title: 'Especialização em Odontologia',
      institution: 'Instituto ou hospital (informe)',
      period: '2016 — 2018',
      description:
        'Aprofundamento técnico e científico para planejamento de tratamentos mais complexos com segurança e excelência.',
    },
  ],
}

/** Seção "Por que me escolher" */
export const whyChoose = {
  label: 'Por que me escolher',
  titleLine1: 'Benefícios do meu atendimento:',
  titleLine2: 'seu caminho para um sorriso mais saudável',
  paragraph:
    'No consultório da Dra. Isabela Piran você encontra um ambiente acolhedor, planejamento claro dos tratamentos e tecnologia alinhada ao que há de melhor em odontologia — sempre com foco na sua saúde e no seu bem-estar.',
  stats: [
    { value: '15+', label: 'Anos de experiência' },
    { value: '99%', label: 'Satisfação dos pacientes' },
    { value: '2k+', label: 'Consultas realizadas' },
  ],
  features: [
    'Agendamento simples e atendimento organizado',
    'Dentista experiente e próxima de você',
    'Equipamentos e técnicas modernas para cada tratamento',
  ],
  cta: 'Agendar consulta',
  imageAlt: 'Dra. Isabela Piran — atendimento odontológico',
}

/**
 * Contato e endereço — ao lado, área 3D (veja docs/MODELO-3D.md para usar o dente).
 * O site carrega o modelo 3D em `model3d.modelPath` (OBJ em `public/`); enquanto carrega, mostra placeholder.
 */
export const contactSection = {
  label: 'Contato',
  titleHighlight: 'Onde me',
  titleRest: 'encontrar',
  intro:
    'Agende sua consulta ou tire dúvidas pelos canais abaixo. Estamos prontos para recebê-lo.',
  /** Nome curto do consultório (opcional) */
  clinicName: 'Consultório Dra. Isabela Piran',
  address: {
    street: 'R. Zélia de Lima Rosa, 205 - sala 15',
    district: 'Jd Águia da Castelo, Boituva - SP',
    zip: '18550-000',
  },
  phoneDisplay: '(11) 94557-9588',
  phoneTel: '+5511945579588',
  whatsappDisplay: '(11) 94557-9588',
  /** Apenas dígitos com DDI 55 para wa.me */
  whatsappDigits: '5511945579588',
  email: 'Isabelapiran@hotmail.com',
  hours: 'Segunda a sexta, 9:30 às 18:00 · Sábado, 9:30 às 12:00',
  /** Link do Google Maps ou Waze (opcional) */
  mapUrl: 'https://maps.app.goo.gl/xco7cd3eTtHYaGf1A?g_st=iwb',
  /**
   * Modelo 3D na seção — arquivo em `public/` (ex.: OBJ exportado do Blender/Cinema 4D).
   */
  model3d: {
    modelPath: '/tooth_3d.obj',
  },
}
