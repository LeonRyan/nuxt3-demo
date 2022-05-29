<template>
  <div class="PriceConverter">
    <label for="input-group-1" class="block mb-2 text-sm font-medium text-gray-900">I would like to spend</label>
    <div class="relative mb-6">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-xs">
          {{ currency }}
      </div>
      <input v-model="buyFiat" ref="fiatInput" type="number" id="input-group-1" :placeholder="`Amount in ${currency}`"
        class="text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5">
    </div>
    <label for="input-group-2" class="block mb-2 text-sm font-medium text-gray-900">To buy</label>
    <div class="relative mb-6">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-xs">
          {{ symbol }}
      </div>
      <input v-model="buyCrypto" type="number" id="input-group-2" :placeholder="`Amount in ${symbol}`" readonly
        class="text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5">
    </div>
    <p class="text-slate-600 text-xs">Conversion rate: 1 {{ currency }} = {{ conversion }} {{ symbol }}</p>
    <button class="w-full py-3 my-8 text-lg bg-gradient-to-r bg-green-600 rounded-sm text-white">
      Buy {{ symbol }}
    </button>
  </div>
</template>

<script setup lang="ts">
  import type { Ref } from 'vue'
  import { MaybeElement, useFocus } from '@vueuse/core'

  const { price, symbol, name, currency = 'USD' } = defineProps<{
    price: number,
    symbol: string,
    name: string,
    currency?: string
  }>();

  const fiatInput: Ref<MaybeElement> = ref(null);
  const buyFiat = ref('');
  const buyCrypto = computed(() => buyFiat.value ? (parseFloat(buyFiat.value) / price).toFixed(8) : undefined);
  const conversion = computed(() => (1 / price).toFixed(8));

  const { focused } = useFocus(fiatInput, { initialValue: true })
</script>