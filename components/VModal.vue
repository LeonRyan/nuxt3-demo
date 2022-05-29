<template>
  <VButton @click="open = true" v-bind="$attrs">
    <slot />
  </VButton>
  <Teleport to="body">
    <div v-if="open" class="Modal-container fixed top-0 left-0 right-0 min-h-screen py-6 flex flex-col justify-center sm:py-12">
      <div ref="modalInner" class="py-3 max-w-screen-sm w-11/12 sm:w-3/4 mx-auto">
        <div class="bg-gray-200 min-w-1xl flex flex-col rounded-sm shadow-lg">
          <div class="px-8 py-6 flex">
            <h2 class="grow text-gray-800 text-3xl font-semibold">
              <slot name="title" />
            </h2>
            <button @click="open = false" class="p-3 pr-0 text-slate-600">
              <IconUil:times />
            </button>
          </div>
          <div class="w-full flex flex-col items-center">
            <div class="w-3/4 flex flex-col">
              <slot name="content" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
  import { onClickOutside } from '@vueuse/core';

  const modalInner = ref(null);
  const open = ref(false);

  onClickOutside(modalInner, (event) => open.value = false);
</script>

<style>
.Modal-container {
  background: rgba(0,0,0,0.5);
}
</style>