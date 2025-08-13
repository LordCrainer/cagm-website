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
    title: 'Skills',
    skill: 'Skill',
    less1year: 'Less than 1 year',
    '1to3years': '1 to 3 years',
    '3to5years': '3 to 5 years',
    '5to10years': '5 to 10 years',
    '10plusyears': '10+ years',
    job: 'Job',
    yearsOfExperience: 'Years of Experience',
    placeholderSkill: 'Select a skill'
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
  }
}

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

export default defineI18nLocale(async () => {
  return {
    home: {
      title: 'Full Stack Developer',
      description: 'Specialized in web development with JavaScript. Intermediate to Senior with extensive knowledge in frontend, backend, and software architecture.',
      viewProjects: 'View Projects',
      downloadCV: 'Download CV',
      skillsTitle: 'Technical Skills',
      timelineTitle: 'Professional Experience',
      projectsTitle: 'My Projects',
      projectsDescription: 'A collection of projects I have worked on, from complete web applications to enterprise platforms.',
      projectsCTA: 'Interested in collaborating on a project?',
      contactMe: 'Contact Me'
    },
    generatePDF: generatePDF,
    website: {
      description:
        'AdaptCV is a free online CV builder that helps you create a professional CV in minutes. Choose from a variety of templates and customize your CV to suit your needs.',
      title: 'AdaptCV',
      keywords: 'CV, Resume, Builder, Online, Free, Templates',
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
  } as TranslationKeys
})
