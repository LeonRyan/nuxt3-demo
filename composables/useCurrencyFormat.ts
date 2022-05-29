import { unref } from 'vue'
import type { MaybeRef } from '@vueuse/shared'

export function useCurrencyFormat(amount: MaybeRef<number>, locale: MaybeRef<string> = 'en-US', currency: MaybeRef<string> = 'USD') {
  return new Intl.NumberFormat(unref(locale), { style: 'currency', currency: unref(currency) }).format(unref(amount))
}

export type UseCurrencyFormatReturn = ReturnType<typeof useCurrencyFormat>