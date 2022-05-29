<template>
  <div class="CoinIcon flex items-center">
    <img 
      class="CoinIcon-icon"
      :alt="name"
      :src="`https://s2.coinmarketcap.com/static/img/coins/128x128/${id}.png`">
    <div v-if="showTitle" class="CoinIcon-title ml-3">
      <span class="font-medium">{{ tickerOnly ? symbol : name }}</span> 
      <span v-if="!tickerOnly" class="text-xs font-normal ml-1">({{ symbol }})</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { id, name, symbol, showTitle = true, tickerOnly = false } = defineProps<{
    id: Number
    name: string
    symbol: string
    showTitle?: boolean,
    tickerOnly?: boolean
  }>();


</script>

<style>
  .CoinIcon-icon {
    width: clamp(2rem, 6vw, 3rem);
  }
</style>