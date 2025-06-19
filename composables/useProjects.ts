export interface Project {
  id: string
  title: string
  description: string
  projectUrl?: string
  githubRepos?: {
    name: string
    url: string
  }[]
  technologies: string[]
  isPublic: boolean
  logo?: string
}

export const useProjects = () => {
  const projects = ref<Project[]>([
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
      title: 'Sitio Web de Boda',
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
      title: 'Migración de Plataforma La Nube TV',
      description:
        'Migración de la plataforma de La Nube TV de PHP, MySQL y JavaScript a una nueva plataforma con Vue 3, Quasar para el frontend, Node.js para el backend y MongoDB. Implementa buenas prácticas y una arquitectura limpia.',
      projectUrl: 'https://app2.lanubetv.net/',
      technologies: ['Vue 3', 'Quasar', 'Node.js', 'MongoDB'],
      isPublic: false
    },
    {
      id: 'nextgen-timbres',
      title: 'Plataforma de Timbres Fiscales (NextGen)',
      description:
        'Un proyecto para gestionar la impresión de timbres fiscales, en el que colaboré en la etapa inicial utilizando serverless, Node.js y DynamoDB.',
      projectUrl: 'https://app.nextrack.ec/login',
      technologies: ['Serverless', 'Node.js', 'DynamoDB'],
      isPublic: false
    },
    {
      id: 'nextgen-firma',
      title: 'Plataforma de Firma Electrónica (NextGen)',
      description:
        'Un proyecto para la gestión de firmas electrónicas, donde colaboré en el mantenimiento, resolución de bugs y desarrollo de nuevas funcionalidades.',
      projectUrl: 'https://app.nextsign.ec/login',
      technologies: ['Node.js', 'Vue.js'],
      isPublic: false
    }
  ])

  return {
    projects: projects
  }
}
