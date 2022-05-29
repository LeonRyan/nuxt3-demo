<template>
  <div class="CoinList">
    <table class="table-auto w-full">
      <thead class="CoinList-tableHead visible hidden sm:table-header-group">
        <tr>
          <th v-for="(item, index) in ['Coin', 'Last Hour', 'Rate']"
            :key="index" :class="['font-semibold p-4', item === 'Rate' ? 'text-right' : 'text-left']">
            {{ item }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="coin in coinData.data" :key="coin.id" class="CoinList-item border-b border-slate-200">
          <td class="p-4 text-left">
            <ClientOnly>
              <CoinIcon :id="coin.id" :name="coin.name" :symbol="coin.symbol" :ticker-only="!isTablet" />
            </ClientOnly>
          </td>
          <td v-show="isTablet" class="p-4 text-left">
            <ClientOnly>
              <Teleport :to="`[data-teleport=price-${coin.id}`" :disabled="isTablet">
                <PriceChange :class="['CoinList-itemChange', {'CoinList-itemChange--transparent' : !isTablet}]" :price="coin.quote.USD.percent_change_1h"/>
              </Teleport>
            </ClientOnly>
          </td>
          <td :data-teleport="`price-${coin.id}`" class="p-4 text-left flex flex-col-reverse items-end sm:text-right sm:table-cell">
            <span>{{ formatRate(coin.quote.USD.price) }}</span>
          </td>
          <td class="p-4 text-left">
            <ClientOnly>
              <VModal color="green" class="Modal-trigger uppercase sm:normal-case w-full">
                Buy  <span class="hidden sm:inline"> {{ coin.symbol }}</span>
                <template #title>
                  Buy {{ coin.name }} <span class="text-sm align-middle">({{ coin.symbol }})</span>
                </template>
                <template #content>
                  <PriceConverter :symbol="coin.symbol" :name="coin.name" :price="coin.quote.USD.price" />
                </template>
              </VModal>
            </ClientOnly>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
  import { useCurrencyFormat } from '~/composables/useCurrencyFormat';
  import { useMediaQuery } from '@vueuse/core';

  // TODO: Move to api, remove hard code keys, type coinData
  const { data: coinData, pending, error, refresh } = await useFetch('cryptocurrency/listings/latest',
    {
      headers: { 'X-CMC_PRO_API_KEY': 'xxx' /* config.cmcApiKey */ },
      baseURL: 'https://pro-api.coinmarketcap.com/v1/'/* config.public.cmcApiBase */,
      params: { start: 1, limit: 20, cryptocurrency_type: 'coins'  }
    }
  );
  
  const isTablet = useMediaQuery('(min-width: 640px)');
  const formatRate = (amount: number) => useCurrencyFormat(amount)
</script>

<style>
  .CoinList-itemChange--transparent {
    background: transparent;
    margin-right: 0;
    padding: 0.5rem 0 0;
  }
</style>