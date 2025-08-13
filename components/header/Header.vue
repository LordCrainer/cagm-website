<template>
  <header
    class="fixed top-0 w-full backdrop-blur-md bg-white z-50 p-2 shadow-md">
    <div class="flex justify-between items-center">
      <HeaderTitle />
      <HeaderLanguage />
    </div>
  </header>
</template>

<script lang="ts" setup>
import HeaderLanguage from './HeaderLanguage.vue'
import HeaderTitle from './HeaderTitle.vue'
</script>
