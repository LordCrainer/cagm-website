<template>
  <footer class="bg-gray-900 text-white py-2">
    <div class="flex flex-col md:flex-row justify-center items-center">
      <div class="text-gray-400 text-sm">
        © {{ currentYear }} Todos los derechos reservados
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const currentYear = new Date().getFullYear()
</script>

<style></style>
