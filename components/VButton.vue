<template>
  <button
    type="button"
    :class="[`Button border text-white rounded-sm px-4 py-2 m-2 transition duration-500 ease 
      select-none focus:outline-none focus:shadow-outline`, colorClasses
    ]">
    <slot />
  </button>
</template>

<script setup lang="ts">
   const props = defineProps<{
    color: string
  }>();

  const colorClasses = computed(() => 
    `border-${props.color}-500 bg-${props.color}-500 hover:bg-${props.color}-600`
  );
</script>