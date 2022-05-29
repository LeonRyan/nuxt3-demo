<template>
  <div class="Äpp flex flex-col min-h-screen">
    <VHeader />
    <main class="sm:mt-20 grow">
      <NuxtPage />
    </main>
    <VFooter />
  </div>
</template>

<script setup lang="ts">
  const route = useRoute()
</script>