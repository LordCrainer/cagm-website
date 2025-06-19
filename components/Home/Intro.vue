<template>
  <section id="inicio" class="py-16 md:h-[60dvh] px-6 md:flex md:items-center">
    <div class="max-w-6xl mx-auto w-full">
      <div class="text-center">
        <div class="mb-8">
          <div class="w-36 h-36 mx-auto rounded-full border-4 border-white p-2">
            <div
              class="w-full h-full rounded-full border-4 border-white bg-white flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Logo"
                class="w-28 h-28 rounded-full object-cover" />
            </div>
          </div>
        </div>
        <h1 class="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          Desarrollador Full Stack
        </h1>
        <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Especializado en desarrollo web con JavaScript. Intermedio a Senior
          con amplio conocimiento en frontend, backend y arquitectura de
          software.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            class="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer">
            Ver Proyectos
          </button>
          <button
            class="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300 cursor-pointer">
            Descargar CV
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style>
/* Solo aplica la altura de 60dvh en pantallas medianas y grandes */
@media (min-width: 768px) {
  #inicio {
    height: 60vh;
    height: 60dvh;
  }
}
</style>
