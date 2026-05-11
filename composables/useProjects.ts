import { useI18n } from 'vue-i18n'

export type Project = TranslationKeys['profile']['projects']['items'][number]

export const useProjects = () => {
  const { tm } = useI18n()

  const projects = computed(() =>
    tm('profile.projects.items') as Project[]
  )

  return {
    projects: projects
  }
}
