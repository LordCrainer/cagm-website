<template>
  <footer class="bg-gray-900 text-white py-8">
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex justify-center items-center space-x-8 mb-6">
        <a
          v-for="link in contactLinks"
          :key="link.key"
          :href="link.href"
          :target="link.external ? '_blank' : undefined"
          :rel="link.external ? 'noopener noreferrer' : undefined"
          class="flex items-center justify-center w-16 h-16 border-2 border-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 group"
          :aria-label="link.label"
          :title="link.label">
          <Icon :name="link.icon" size="md" aria-hidden="true" focusable="false" />
        </a>
      </div>

      <!-- Copyright -->
      <div class="flex flex-col md:flex-row justify-center items-center">
        <div class="text-gray-400 text-sm">
          © {{ currentYear }} {{ t('footer.copyright') }}
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const currentYear = new Date().getFullYear()

// Información de contacto
const phoneNumber = '593967590148'
const email = 'carlosgarcia.cagm@gmail.com'

// URLs para las aplicaciones
const telegramUrl = computed(() => `https://t.me/${phoneNumber}`)
const whatsappUrl = computed(() => `https://wa.me/${phoneNumber}`)
const emailUrl = computed(() => `mailto:${email}`)

const contactLinks = computed(() => [
  {
    key: 'telegram',
    href: telegramUrl.value,
    icon: 'simple-icons:telegram',
    label: t('footer.telegramTooltip'),
    external: true
  },
  {
    key: 'whatsapp',
    href: whatsappUrl.value,
    icon: 'simple-icons:whatsapp',
    label: t('footer.whatsappTooltip'),
    external: true
  },
  {
    key: 'email',
    href: emailUrl.value,
    icon: 'material-symbols:mail-outline',
    label: t('footer.emailTooltip'),
    external: false
  }
])
</script>

<style></style>
