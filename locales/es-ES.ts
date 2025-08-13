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
    title: 'Habilidades',
    skill: 'Habilidad',
    less1year: 'Menos de 1 año',
    '1to3years': '1 a 3 años',
    '3to5years': '3 a 5 años',
    '5to10years': '5 a 10 años',
    '10plusyears': 'Más de 10 años',
    job: 'Trabajo',
    yearsOfExperience: 'Años de experiencia',
    placeholderSkill: 'Selecciona una habilidad'
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
    title: 'Línea de tiempo',
    description:
      'Una representación visual de tu trayectoria profesional, que muestra hitos y logros clave.'
  },
  projects: {
    title: 'Proyectos',
    description:
      'Una colección de proyectos en los que he trabajado, desde aplicaciones web completas hasta plataformas empresariales.',
    CTA: '¿Interesado en colaborar en un proyecto?'
  }
}

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
  forgotPassword: 'Olvidé mi contraseña?',
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
      title: 'AdaptCV',
      description: 'Generador de currículum en línea',
      keywords: 'cv, currículum, plantillas, generador de currículum',
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
    profile: profile
  } as TranslationKeys
})
