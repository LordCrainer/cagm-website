<template>
  <footer class="bg-gray-900 text-white py-8">
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex justify-center items-center space-x-8 mb-6">
        <a
          :href="telegramUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center w-16 h-16 border-2 border-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 group"
          title="Contactar por Telegram">
          <Icon name="simple-icons:telegram" size="md" />
        </a>

        <a
          :href="whatsappUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center w-16 h-16 border-2 border-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 group"
          title="Contactar por WhatsApp">
          <Icon name="simple-icons:whatsapp" size="md" />
        </a>

        <a
          :href="emailUrl"
          class="flex items-center justify-center w-16 h-16 border-2 border-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 group"
          title="Enviar Email">
          <Icon name="material-symbols:mail-outline" size="md" />
        </a>
      </div>

      <!-- Copyright -->
      <div class="flex flex-col md:flex-row justify-center items-center">
        <div class="text-gray-400 text-sm">
          © {{ currentYear }} Todos los derechos reservados
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const currentYear = new Date().getFullYear()

// Información de contacto
const phoneNumber = '593967590148'
const email = 'carlosgarcia.cagm@gmail.com'

// URLs para las aplicaciones
const telegramUrl = computed(() => `https://t.me/${phoneNumber}`)
const whatsappUrl = computed(() => `https://wa.me/${phoneNumber}`)
const emailUrl = computed(() => `mailto:${email}`)
</script>

<style></style>
