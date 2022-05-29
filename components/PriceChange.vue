<template>
  <VBadge :color="badgeColor">
    <span class="flex items-center sm:gap-x-1">
      <span>{{ changePercentage }}</span>
      <IconUil:arrow-up-right v-if="price > 0" class="inline" />
      <IconUil:arrow-down-right v-else-if="price < 0" class="inline" />
    </span>
  </VBadge>
</template>

<script setup lang="ts">
  const props = defineProps<{
    price: Number
  }>();

  const changePercentage = computed(() => `${props.price.toFixed(2)}%`)
  const badgeColor = computed(() => props.price === 0 ? 'gray' : props.price > 0 ? 'green' : 'red')
</script>