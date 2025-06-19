<template>
  <div class="min-h-screen bg-gray-200 from-slate-50 to-blue-50">
    <Header />
    <div class="pt-16">
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>
<script lang="ts" setup>
import Footer from './components/footer/Footer.vue'
import Header from './components/header/Header.vue'
</script>
