<template>
  <span 
    :class="['Badge inline-block rounded-sm px-4 py-2 text-xs font-bold',
      colorClasses]">
    <slot />
  </span>
</template>

<script setup lang="ts">
   const props = defineProps<{
    color: string
  }>();

  const colorClasses = computed<string>(() => 
    `text-${props.color}-600 bg-${props.color}-100`);
</script>