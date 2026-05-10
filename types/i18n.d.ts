interface PersonalInformation {
  title: string
  contactInfo: string
  fullname: string
  areaProfession: string
  areaProfessionPlaceholder: string
  professionPlaceholder: string
  profession: string
  email: string
  phone: string
  address: string
  city: string
  country: string
  builder: string
  aboutMe: string
  uploadPhoto: string
}

interface AboutMe {
  title: string
  summary: string
  slogan: string
  logo: string
  uploadLogo: string
}

interface SkillCardSkill {
  name: string
  level: 'green' | 'blue' | 'yellow'
  description?: string
}

interface SkillCategory {
  id: string
  title: string
  icon: string
  gradient: string
  skills: SkillCardSkill[]
}

interface TimelineProject {
  name: string
  period: string
  description: string
}

interface TimelineExperience {
  company: string
  position: string
  location: string
  workMode: 'remote' | 'onsite' | 'hybrid'
  period: string
  description: string
  achievements: string[]
  projects: TimelineProject[]
  technologies: string[]
}

interface PortfolioRepository {
  name: string
  url: string
}

interface PortfolioProject {
  id: string
  title: string
  description: string
  projectUrl?: string
  githubRepos?: PortfolioRepository[]
  technologies: string[]
  isPublic: boolean
  logo?: string
}

interface FooterLinks {
  telegramTooltip: string
  whatsappTooltip: string
  emailTooltip: string
  copyright: string
}

interface Experience {
  title: string
  jobTitle: string
  company: string
  position: string
  description: string
}

interface Education {
  title: string
  degree: string
  degreePlaceholder: string
  institution: string
  fieldOfStudy: string
  startDate: string
  endDate: string
  secondary: string
  highSchool: string
  technical: string
  undergraduate: string
  graduate: string
  masters: string
  doctorate: string
}

interface Skills {
  title: string
  skill: string
  job: string
  yearsOfExperience: string
  less1year: string
  '1to3years': string
  '3to5years': string
  '5to10years': string
  '10plusyears': string
  placeholderSkill: string
  categories: SkillCategory[]
}

interface Languages {
  title: string
  language: string
  level: string
  beginner: string
  intermediate: string
  advanced: string
  native: string
  placeholderLanguage: string
}

interface Timeline {
  title: string
  description: string
  workModes: {
    remote: string
    onsite: string
    hybrid: string
  }
  achievementsLabel: string
  projectsLabel: string
  experiences: TimelineExperience[]
}

interface Projects {
  title: string
  description: string
  CTA: string
  viewProject: string
  visibilityPublic: string
  visibilityPrivate: string
  items: PortfolioProject[]
}

interface Actions {
  add: string
  edit: string
  delete: string
  save: string
  cancel: string
  submit: string
  options: string
  upload: string
  uploadImage: string
  saveImage: string
  next: string
  previous: string
  continue: string
  finish: string
  back: string
  register: string
  signIn: string
  signOut: string
  forgotPassword: string
  publish: string
  preview: string
  settings: string
  signUp: string
  print: string
  download: string
  exportPdf: string
  downloadPdf: string
  exportCSV: string
  translate: string
}

interface GeneratePDF {
  generatingPdfForTemplate: string
}

interface TranslationKeys {
  generatePDF: GeneratePDF
  website: {
    title: string
    description: string
    keywords: string
    welcome: string
  }
  common: {
    home: string
    about: string
    services: string
    contact: string
    testimonials: string
    blog: string
    portfolio: string
    privacyPolicy: string
    termsOfService: string
    email: string
    noData: string
    startDate: string
    endDate: string
    current: string
  }
  actions: Actions
  baseEntity: {
    createdAt: string
    updatedAt: string
    createdBy: string
    updatedBy: string
    deletedAt: string
  }
  builder: {
    id: string
    sections: string
    title: string
    name: string
    description: string
    status: string
    template: string
    selectTemplate: string
  }
  profile: {
    name: string
    title: string
    namePlaceholder: string
    personalInfo: PersonalInformation
    aboutMe: AboutMe
    experience: Experience
    education: Education
    skills: Skills
    languages: Languages
    timeline: Timeline
    projects: Projects
  }
  login: {
    password: string
    email: string
    passwordPlaceholder: string
    emailPlaceholder: string
    title: string
    forgotPassword: string
    rememberMe: string
    signUp: string
    signIn: string
    signInWithGoogle: string
    dontHaveAccount: string
    loginAccount: string
    loginEnterDetails: string
    keepMeLoggedIn: string
  }
  registration: {
    username: string
    email: string
    password: string
    confirmPassword: string
    signUp: string
  }
  routes: {
    home: string
    builder: string
    preview: string
    templates: string
    settings: string
    profile: string
    dashboard: string
    logout: string
  }
  home: {
    title: string
    description: string
    viewProjects: string
    downloadCV: string
    skillsTitle: string
    timelineTitle: string
    projectsTitle: string
    projectsDescription: string
    projectsCTA: string
    contactMe: string
  }
  footer: FooterLinks
}
