const profile: TranslationKeys['profile'] = {
  name: 'Name',
  title: 'CV Settings',
  namePlaceholder: 'CV Title',
  personalInfo: {
    contactInfo: 'Contact Information',
    title: 'Information',
    fullname: 'Full Name',
    areaProfession: 'Area of Profession',
    areaProfessionPlaceholder: 'Select an area of profession',
    professionPlaceholder: 'Select a profession',
    profession: 'Profession',
    email: 'Email',
    phone: 'Phone',
    address: 'Address',
    city: 'City',
    country: 'Country',
    builder: 'Builder',
    aboutMe: 'About Me',
    uploadPhoto: 'Upload Photo'
  },
  aboutMe: {
    title: 'About Me',
    summary: 'Summary',
    slogan: 'Slogan',
    logo: 'Logo',
    uploadLogo: 'Upload Logo'
  },
  experience: {
    title: 'Experience',
    jobTitle: 'Job Title',
    company: 'Company',
    position: 'Position',
    description: 'Description'
  },
  education: {
    title: 'Education',
    fieldOfStudy: 'Field of Study',
    degree: 'Degree',
    degreePlaceholder: 'Select a degree',
    institution: 'Institution',
    startDate: 'Start Date',
    endDate: 'End Date',
    secondary: 'Secondary',
    highSchool: 'High School',
    technical: 'Technical',
    undergraduate: 'Undergraduate',
    graduate: 'Graduate',
    masters: 'Masters',
    doctorate: 'Doctorate'
  },
  skills: {
    title: 'Technical Skills',
    skill: 'Skill',
    less1year: 'Less than 1 year',
    '1to3years': '1 to 3 years',
    '3to5years': '3 to 5 years',
    '5to10years': '5 to 10 years',
    '10plusyears': '10+ years',
    job: 'Job',
    yearsOfExperience: 'Years of Experience',
    placeholderSkill: 'Select a skill',
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
        title: 'DevOps & Architecture',
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
    title: 'Languages',
    language: 'Language',
    level: 'Level',
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
    native: 'Native',
    placeholderLanguage: 'Select a language'
  },
  timeline: {
    title: 'Professional Experience',
    description:
      'A visual representation of your professional journey, showcasing key milestones and achievements.',
    workModes: {
      remote: 'Remote',
      onsite: 'On-site',
      hybrid: 'Hybrid'
    },
    achievementsLabel: 'Main achievements',
    projectsLabel: 'Projects',
    experiences: [
      {
        company: 'Lanubetv S.A.',
        position: 'Contract Technical Consultant',
        location: 'Guayaquil, Ecuador',
        workMode: 'remote',
        period: 'January 2021 – Present',
        description:
          'Led the design, development, and implementation of a new, optimized high-quality platform.',
        achievements: [
          'Automated the conversion process, reducing processing time from 1 hour to 4 minutes (+93% efficiency)',
          'Reduced storage costs by 90% by migrating to Space Storage (S3)',
          'Removed a Windows Server instance, cutting costs by 65%',
          'Lowered additional costs by 35% through infrastructure optimization',
          'Implemented Screaming Architecture, testing, and CI/CD'
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
        company: 'Independent Technical Consultant',
        position: 'Contract Senior Developer',
        location: 'Guayaquil, Ecuador',
        workMode: 'remote',
        period: 'December 2023 – January 2025',
        description:
          'Managed the maintenance and optimization of 5 complex systems for an international project.',
        achievements: [
          'Contributed to a 24% increase in annual MRR',
          'Reached 50% MRR in Q2 thanks to the development of a new feature',
          'Helped close a strategic client',
          'Increased team efficiency from 40% to 84% in ticket closing',
          'Developed 3 new workers using GCF and Cloud Scheduler'
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
        position: 'Full Stack Developer and Technical Lead',
        location: 'Guayaquil, Ecuador',
        workMode: 'hybrid',
        period: 'June 2021 – April 2024',
        description:
          'Led multiple development projects and teams, implementing scalable solutions and improving processes.',
        achievements: [
          'Led a team of 5 developers and 1 QA',
          'Implemented improvements that reduced development times by 20%',
          'Improved team management by 30%',
          'Optimized code to handle 1M+ records per request'
        ],
        projects: [
          {
            name: 'Senscloud',
            period: '2021 - 2024',
            description: 'Managed the development of new features for clients'
          },
          {
            name: 'Xtrim',
            period: '2024',
            description: 'Improved communication and result delivery'
          },
          {
            name: 'Nextsign',
            period: '2024',
            description: 'Resolved critical bugs and developed new features'
          },
          {
            name: 'NextTrace',
            period: '2023',
            description: 'Developed and implemented serverless architecture'
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
    title: 'My Projects',
    description:
      'A collection of projects I have worked on, from complete web applications to enterprise platforms.',
    CTA: 'Interested in collaborating on a project?',
    viewProject: 'View Project',
    visibilityPublic: 'Public',
    visibilityPrivate: 'Private',
    items: [
      {
        id: 'adaptcv',
        title: 'AdaptCV',
        description:
          'A personal web project that lets users enter information to create CVs and display them in different templates. It includes PDF export and uses Nuxt and Vuetify for the frontend, Node.js with Express for the backend, and MongoDB as the database.',
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
        title: 'Wedding Website',
        description:
          'A simple website created for my wedding that shows the date, location, and a photo gallery. It uses Vue.js, Quasar, and Firebase.',
        projectUrl: 'https://kenya-carlos-wedding.vercel.app/',
        technologies: ['Vue.js', 'Quasar', 'Firebase'],
        isPublic: false
      },
      {
        id: 'la-nube-tv',
        title: 'La Nube TV',
        description:
          'A website for a commercial distribution company that shows information about the company and its services. Originally built with Vue 2 and Vuetify, later migrated to Vue 3 and Vuetify.',
        projectUrl: 'https://lanubetv.net/',
        technologies: ['Vue 3', 'Vuetify'],
        isPublic: false
      },
      {
        id: 'la-nube-tv-migration',
        title: 'La Nube TV Platform Migration',
        description:
          'Migration of the La Nube TV platform from PHP, MySQL, and JavaScript to a new stack with Vue 3, Quasar for the frontend, Node.js for the backend, and MongoDB. It implements best practices and a clean architecture.',
        projectUrl: 'https://app2.lanubetv.net/',
        technologies: ['Vue 3', 'Quasar', 'Node.js', 'MongoDB'],
        isPublic: false
      },
      {
        id: 'nextgen-timbres',
        title: 'Fiscal Stamps Platform (NextGen)',
        description:
          'A project to manage fiscal stamp printing, where I collaborated in the initial stage using serverless tools, Node.js, and DynamoDB.',
        projectUrl: 'https://app.nextrack.ec/login',
        technologies: ['Serverless', 'Node.js', 'DynamoDB'],
        isPublic: false
      },
      {
        id: 'nextgen-firma',
        title: 'Electronic Signature Platform (NextGen)',
        description:
          'A project for managing electronic signatures, where I collaborated on maintenance, bug fixing, and new feature development.',
        projectUrl: 'https://app.nextsign.ec/login',
        technologies: ['Node.js', 'Vue.js'],
        isPublic: false
      }
    ]
  }
} as TranslationKeys['profile']

const builder: TranslationKeys['builder'] = {
  title: 'Builder',
  name: 'Name',
  status: 'Status',
  description: 'Description',
  template: 'Template',
  id: 'ID',
  sections: 'Sections',
  selectTemplate: 'Select Template'
}

const baseEntity: TranslationKeys['baseEntity'] = {
  createdAt: 'Created',
  updatedAt: 'Updated',
  createdBy: 'Created by',
  updatedBy: 'Updated by',
  deletedAt: 'Deleted'
}

const generatePDF: TranslationKeys['generatePDF'] = {
  generatingPdfForTemplate: 'Generating PDF for template'
}

const footer: TranslationKeys['footer'] = {
  telegramTooltip: 'Contact on Telegram',
  whatsappTooltip: 'Contact on WhatsApp',
  emailTooltip: 'Send an email',
  copyright: 'All rights reserved'
}

export default defineI18nLocale(async () => {
  return {
    home: {
      title: 'Full Stack Developer',
      description:
        'Specialized in web development with JavaScript. Intermediate to Senior with extensive knowledge in frontend, backend, and software architecture.',
      viewProjects: 'View Projects',
      downloadCV: 'Download CV',
      skillsTitle: 'Technical Skills',
      timelineTitle: 'Professional Experience',
      projectsTitle: 'My Projects',
      projectsDescription:
        'A collection of projects I have worked on, from complete web applications to enterprise platforms.',
      projectsCTA: 'Interested in collaborating on a project?',
      contactMe: 'Contact Me'
    },
    generatePDF: generatePDF,
    website: {
      description:
        'Professional portfolio of Carlos García, a web developer specialized in Nuxt, Vue, and modern web technologies.',
      title: 'Carlos García | Web Developer',
      keywords: 'portfolio, web developer, nuxt, vue, frontend, backend, devops',
      welcome: 'Welcome to'
    },
    actions: {
      add: 'Add',
      edit: 'Edit',
      delete: 'Delete',
      save: 'Save',
      cancel: 'Cancel',
      submit: 'Submit',
      options: 'Options',
      upload: 'Upload',
      uploadImage: 'Upload Image',
      saveImage: 'Save Image',
      back: 'Back',
      continue: 'Continue',
      next: 'Next',
      previous: 'Previous',
      finish: 'Finish',
      register: 'Register',
      signIn: 'Sign In',
      signUp: 'Sign Up',
      signOut: 'Sign Out',
      forgotPassword: 'Forgot Password?',
      publish: 'Publish',
      preview: 'Preview',
      settings: 'Settings',
      print: 'Print',
      download: 'Download',
      exportPdf: 'Download PDF',
      downloadPdf: 'Download PDF',
      exportCSV: 'Download CSV',
      translate: 'Translate'
    },
    common: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
      testimonials: 'Testimonials',
      blog: 'Blog',
      portfolio: 'Portfolio',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      email: 'Email',
      noData: 'No data available',
      startDate: 'Start Date',
      endDate: 'End Date',
      current: 'Current'
    },
    login: {
      email: 'email',
      password: 'password',
      title: 'Login',
      emailPlaceholder: 'Enter your email',
      passwordPlaceholder: 'Enter your password',
      loginAccount: 'Login to your account',
      loginEnterDetails: 'Enter your details to login',
      forgotPassword: 'Forgot Password?',
      keepMeLoggedIn: 'Keep me logged in',
      rememberMe: 'Remember Me',
      signUp: 'Sign Up',
      signIn: 'Sign In',
      dontHaveAccount: "Don't have an account?",
      signInWithGoogle: 'Sign In with Google'
    },
    registration: {
      username: 'Username',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      signUp: 'Sign Up'
    },
    routes: {
      home: 'Home',
      builder: 'Builder',
      preview: 'Preview',
      templates: 'Templates',
      settings: 'Settings',
      profile: 'Profile',
      dashboard: 'Dashboard',
      logout: 'Logout'
    },
    baseEntity: baseEntity,
    builder: builder,
    profile: profile,
    footer: footer
  } as TranslationKeys
})
