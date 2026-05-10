const profile: TranslationKeys['profile'] = {
  name: 'Nombre',
  title: 'Configuración del currículum',
  namePlaceholder: 'Título del currículum',
  personalInfo: {
    contactInfo: 'Información de contacto',
    title: 'Información',
    fullname: 'Nombre completo',
    areaProfession: 'Área de profesión',
    areaProfessionPlaceholder: 'Selecciona un área de profesión',
    professionPlaceholder: 'Selecciona una profesión',
    profession: 'Profesión',
    email: 'Correo electrónico',
    phone: 'Teléfono',
    address: 'Dirección',
    city: 'Ciudad',
    country: 'País',
    builder: 'Rellena la información',
    aboutMe: 'Acerca de mí',
    uploadPhoto: 'Subir foto'
  },
  aboutMe: {
    title: 'Acerca de mí',
    summary: 'Resumen',
    slogan: 'Eslogan',
    logo: 'Logo',
    uploadLogo: 'Subir logo'
  },
  experience: {
    title: 'Experiencia',
    jobTitle: 'Título del trabajo',
    company: 'Compañía',
    position: 'Posición',
    description: 'Descripción'
  },
  education: {
    title: 'Educación',
    fieldOfStudy: 'Campo de estudio',
    degree: 'Título',
    degreePlaceholder: 'Selecciona un título',
    institution: 'Institución',
    startDate: 'Fecha de inicio',
    endDate: 'Fecha de finalización',
    secondary: 'Secundaria',
    highSchool: 'Escuela secundaria',
    technical: 'Técnica',
    undergraduate: 'Licenciatura',
    graduate: 'Posgrado',
    masters: 'Maestría',
    doctorate: 'Doctorado'
  },
  skills: {
    title: 'Habilidades técnicas',
    skill: 'Habilidad',
    less1year: 'Menos de 1 año',
    '1to3years': '1 a 3 años',
    '3to5years': '3 a 5 años',
    '5to10years': '5 a 10 años',
    '10plusyears': 'Más de 10 años',
    job: 'Trabajo',
    yearsOfExperience: 'Años de experiencia',
    placeholderSkill: 'Selecciona una habilidad',
    categories: [
      {
        id: 'frontend',
        title: 'Frontend',
        gradient: 'from-blue-500 to-blue-600',
        icon:
          '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>',
        skills: [
          { name: 'Vue 3 & Composition API', level: 'green' },
          { name: 'Nuxt.js', level: 'green' },
          { name: 'JavaScript ES6+', level: 'green' },
          { name: 'Testing (Jest, Vitest)', level: 'blue' }
        ]
      },
      {
        id: 'backend',
        title: 'Backend',
        gradient: 'from-orange-500 to-orange-600',
        icon:
          '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"></path>',
        skills: [
          { name: 'Node.js', level: 'green' },
          { name: 'Express.js', level: 'green' },
          { name: 'MongoDB', level: 'green' },
          { name: 'MySQL', level: 'yellow' }
        ]
      },
      {
        id: 'devops',
        title: 'DevOps y arquitectura',
        gradient: 'from-purple-500 to-purple-600',
        icon:
          '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>',
        skills: [
          { name: 'Docker', level: 'green' },
          { name: 'CI/CD', level: 'green' },
          { name: 'SOLID Principles', level: 'green' },
          { name: 'Design Patterns', level: 'blue' },
          { name: 'Queue Theory', level: 'blue' }
        ]
      }
    ]
  },
  languages: {
    title: 'Idiomas',
    language: 'Idioma',
    level: 'Nivel',
    beginner: 'Principiante',
    intermediate: 'Intermedio',
    advanced: 'Avanzado',
    native: 'Nativo',
    placeholderLanguage: 'Selecciona un idioma'
  },
  timeline: {
    title: 'Experiencia profesional',
    description:
      'Una representación visual de tu trayectoria profesional, que muestra hitos y logros clave.',
    workModes: {
      remote: 'Remoto',
      onsite: 'Presencial',
      hybrid: 'Híbrido'
    },
    achievementsLabel: 'Logros principales',
    projectsLabel: 'Proyectos',
    experiences: [
      {
        company: 'Lanubetv S.A.',
        position: 'Consultor técnico por contrato',
        location: 'Guayaquil, Ecuador',
        workMode: 'remote',
        period: 'Enero 2021 – Presente',
        description:
          'Dirigí el diseño, desarrollo e implementación de una nueva plataforma optimizada de gran calidad.',
        achievements: [
          'Automaticé el proceso de conversión reduciendo tiempos de 1h a 4 min (+93% eficiencia)',
          'Reduje costos de almacenamiento del 90% migrando a Space Storage (S3)',
          'Eliminé servidor Windows Server reduciendo costos en un 65%',
          'Disminuí costos adicionales en un 35% optimizando la infraestructura',
          'Implementé Screaming Architecture, testing y CI/CD'
        ],
        projects: [],
        technologies: [
          'Node.js',
          'Ffmpeg/Ffmbc',
          'Vue.js',
          'Quasar',
          'Docker',
          'GitHub Actions',
          'Vitest',
          'MongoDB'
        ]
      },
      {
        company: 'Consultor Técnico Independiente',
        position: 'Desarrollador Senior por contrato',
        location: 'Guayaquil, Ecuador',
        workMode: 'remote',
        period: 'Diciembre 2023 – Enero 2025',
        description:
          'Gestioné el mantenimiento y la optimización de 5 sistemas complejos para un proyecto internacional.',
        achievements: [
          'Contribuí al aumento del 24% en el MRR anual',
          'Obtuve un MRR del 50% en Q2 gracias al desarrollo de una nueva funcionalidad',
          'Ayudé al cierre de un cliente estratégico',
          'Aumenté la eficiencia del equipo del 40% al 84% en el cierre de tickets',
          'Desarrollé 3 nuevos workers utilizando GCF y Cloud Scheduler'
        ],
        projects: [],
        technologies: [
          'Node.js',
          'Angular',
          'Flutter',
          'MongoDB',
          'Big Query',
          'WorkOS',
          'GCP'
        ]
      },
      {
        company: 'Nextgen',
        position: 'Desarrollador FullStack y Líder Técnico',
        location: 'Guayaquil, Ecuador',
        workMode: 'hybrid',
        period: 'Junio 2021 – Abril 2024',
        description:
          'Lideré múltiples proyectos y equipos de desarrollo, implementando soluciones escalables y optimizando procesos.',
        achievements: [
          'Lideré un equipo de 5 desarrolladores y 1 QA',
          'Implementé mejoras que redujeron los tiempos de desarrollo en un 20%',
          'Mejoré la gestión del equipo en un 30%',
          'Optimicé código para manejar 1M+ registros/petición'
        ],
        projects: [
          {
            name: 'Senscloud',
            period: '2021 - 2024',
            description:
              'Gestión del desarrollo de nuevas funcionalidades para los clientes'
          },
          {
            name: 'Xtrim',
            period: '2024',
            description: 'Optimización de comunicación y entrega de resultados'
          },
          {
            name: 'Nextsign',
            period: '2024',
            description:
              'Resolución de errores críticos y desarrollo de nuevas características'
          },
          {
            name: 'NextTrace',
            period: '2023',
            description: 'Desarrollo e implementación de arquitectura serverless'
          }
        ],
        technologies: [
          'Node.js',
          'Angular',
          'React',
          'MongoDB',
          'PostgreSQL',
          'Docker',
          'AWS'
        ]
      }
    ]
  },
  projects: {
    title: 'Mis proyectos',
    description:
      'Una colección de proyectos en los que he trabajado, desde aplicaciones web completas hasta plataformas empresariales.',
    CTA: '¿Interesado en colaborar en un proyecto?',
    viewProject: 'Ver proyecto',
    visibilityPublic: 'Público',
    visibilityPrivate: 'Privado',
    items: [
      {
        id: 'adaptcv',
        title: 'AdaptCV',
        description:
          'Un proyecto web personal que permite ingresar información para crear CVs y mostrarlos en diferentes plantillas. Incluye exportación a PDF. Utiliza Nuxt y Vuetify para el frontend, Node.js con Express para el backend y MongoDB como base de datos.',
        projectUrl: 'https://adaptcv-frontend.vercel.app/',
        githubRepos: [
          {
            name: 'AdaptCV Frontend',
            url: 'https://github.com/LordCrainer/adaptcv-frontend'
          },
          {
            name: 'AdaptCV Backend',
            url: 'https://github.com/LordCrainer/adaptcv-backend'
          }
        ],
        technologies: ['Nuxt', 'Vuetify', 'Node.js', 'Express', 'MongoDB'],
        isPublic: true
      },
      {
        id: 'wedding-website',
        title: 'Sitio web de boda',
        description:
          'Un sitio web sencillo creado para mi boda, que muestra información sobre la fecha, el lugar y una galería de fotos. Utiliza Vue.js, Quasar y Firebase.',
        projectUrl: 'https://kenya-carlos-wedding.vercel.app/',
        technologies: ['Vue.js', 'Quasar', 'Firebase'],
        isPublic: false
      },
      {
        id: 'la-nube-tv',
        title: 'La Nube TV',
        description:
          'Un sitio web para una empresa de distribución de comerciales, que muestra información sobre la empresa y sus servicios. Originalmente hecho con Vue 2 y Vuetify, migrado a Vue 3 y Vuetify.',
        projectUrl: 'https://lanubetv.net/',
        technologies: ['Vue 3', 'Vuetify'],
        isPublic: false
      },
      {
        id: 'la-nube-tv-migration',
        title: 'Migración de plataforma La Nube TV',
        description:
          'Migración de la plataforma de La Nube TV de PHP, MySQL y JavaScript a una nueva plataforma con Vue 3, Quasar para el frontend, Node.js para el backend y MongoDB. Implementa buenas prácticas y una arquitectura limpia.',
        projectUrl: 'https://app2.lanubetv.net/',
        technologies: ['Vue 3', 'Quasar', 'Node.js', 'MongoDB'],
        isPublic: false
      },
      {
        id: 'nextgen-timbres',
        title: 'Plataforma de timbres fiscales (NextGen)',
        description:
          'Un proyecto para gestionar la impresión de timbres fiscales, en el que colaboré en la etapa inicial utilizando serverless, Node.js y DynamoDB.',
        projectUrl: 'https://app.nextrack.ec/login',
        technologies: ['Serverless', 'Node.js', 'DynamoDB'],
        isPublic: false
      },
      {
        id: 'nextgen-firma',
        title: 'Plataforma de firma electrónica (NextGen)',
        description:
          'Un proyecto para la gestión de firmas electrónicas, donde colaboré en el mantenimiento, resolución de bugs y desarrollo de nuevas funcionalidades.',
        projectUrl: 'https://app.nextsign.ec/login',
        technologies: ['Node.js', 'Vue.js'],
        isPublic: false
      }
    ]
  }
} as TranslationKeys['profile']

const builder: TranslationKeys['builder'] = {
  title: 'Constructor',
  name: 'Nombre',
  status: 'Estado',
  description: 'Descripción',
  template: 'Plantilla',
  id: 'ID',
  sections: 'Secciones',
  selectTemplate: 'Selecciona una plantilla'
}

const baseEntity: TranslationKeys['baseEntity'] = {
  createdAt: 'Creado',
  updatedAt: 'Actualizado',
  createdBy: 'Creado por',
  updatedBy: 'Actualizado por',
  deletedAt: 'Eliminado'
}

const actions: TranslationKeys['actions'] = {
  add: 'Agregar',
  edit: 'Editar',
  delete: 'Eliminar',
  save: 'Guardar',
  cancel: 'Cancelar',
  submit: 'Enviar',
  options: 'Opciones',
  upload: 'Subir',
  uploadImage: 'Subir imagen',
  saveImage: 'Guardar imagen',
  back: 'Volver',
  next: 'Siguiente',
  previous: 'Anterior',
  continue: 'Continuar',
  finish: 'Finalizar',
  register: 'Registrar',
  signIn: 'Iniciar sesión',
  signOut: 'Cerrar sesión',
  forgotPassword: '¿Olvidé mi contraseña?',
  publish: 'Publicar',
  preview: 'Visualizar',
  settings: 'Configuraciones',
  signUp: 'Registrarse',
  print: 'Imprimir',
  download: 'Descargar',
  exportPdf: 'Exportar PDF',
  downloadPdf: 'Descargar PDF',
  exportCSV: 'Exportar CSV',
  translate: 'Traducir'
}

const generatePDF: TranslationKeys['generatePDF'] = {
  generatingPdfForTemplate: 'Generando PDF para la plantilla'
}

const footer: TranslationKeys['footer'] = {
  telegramTooltip: 'Contactar por Telegram',
  whatsappTooltip: 'Contactar por WhatsApp',
  emailTooltip: 'Enviar email',
  copyright: 'Todos los derechos reservados'
}

export default defineI18nLocale(async () => {
  return {
    home: {
      title: 'Desarrollador Full Stack',
      description:
        'Especializado en desarrollo web con JavaScript. Intermedio a Senior con amplio conocimiento en frontend, backend y arquitectura de software.',
      viewProjects: 'Ver Proyectos',
      downloadCV: 'Descargar CV',
      skillsTitle: 'Habilidades Técnicas',
      timelineTitle: 'Experiencia Profesional',
      projectsTitle: 'Mis Proyectos',
      projectsDescription:
        'Una colección de proyectos en los que he trabajado, desde aplicaciones web completas hasta plataformas empresariales.',
      projectsCTA: '¿Interesado en colaborar en un proyecto?',
      contactMe: 'Contáctame'
    },
    generatePDF: generatePDF,
    website: {
      title: 'Carlos García | Desarrollador Web',
      description:
        'Carlos García es un portafolio profesional con proyectos y experiencia en desarrollo web, frontend, backend y arquitectura moderna.',
      keywords: 'cv, currículum, generador, en línea, gratis, plantillas',
      welcome: 'Bienvenido a'
    },
    actions: actions,
    common: {
      home: 'Inicio',
      about: 'Acerca de',
      services: 'Servicios',
      contact: 'Contacto',
      testimonials: 'Testimonios',
      blog: 'Blog',
      portfolio: 'Portafolio',
      privacyPolicy: 'Política de privacidad',
      termsOfService: 'Términos de servicio',
      email: 'Correo electrónico',
      noData: 'No hay datos disponibles',
      startDate: 'Fecha de inicio',
      endDate: 'Fecha de finalización',
      current: 'Presente'
    },
    login: {
      password: 'contraseña',
      email: 'correo electrónico',
      emailPlaceholder: 'Ingresa tu correo electrónico',
      passwordPlaceholder: 'Ingresa tu contraseña',
      title: 'Iniciar sesión',
      forgotPassword: '¿Olvidaste tu contraseña?',
      rememberMe: 'Recuérdame',
      signUp: 'Regístrate',
      signIn: 'Iniciar sesión',
      dontHaveAccount: '¿No tienes una cuenta?',
      signInWithGoogle: 'Iniciar sesión con Google',
      keepMeLoggedIn: 'Mantenerme conectado',
      loginAccount: 'Inicia sesión en tu cuenta',
      loginEnterDetails: 'Ingresa tus datos para iniciar sesión'
    },
    registration: {
      username: 'Nombre de usuario',
      email: 'Correo electrónico',
      password: 'Contraseña',
      confirmPassword: 'Confirmar contraseña',
      signUp: 'Regístrate'
    },
    routes: {
      home: 'Inicio',
      builder: 'Constructor',
      preview: 'Vista previa',
      templates: 'Plantillas',
      settings: 'Configuraciones',
      profile: 'Perfil',
      dashboard: 'Tablero',
      logout: 'Cerrar sesión'
    },
    baseEntity: baseEntity,
    builder: builder,
    profile: profile,
    footer: footer
  } as TranslationKeys
})
