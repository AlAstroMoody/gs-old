<template>
  <section class="fixed hidden h-screen lg:block">
    <AppGears />
    <div
      class="mt-48 h-fit -translate-x-full animate-leftToRight rounded-r-2xl bg-second py-5 pr-5"
    >
      <router-link
        class="link relative my-2 block w-max -translate-x-full animate-leftToRight rounded-r-2xl px-2 py-4 shadow-xl"
        v-for="(point, index) in menu"
        :class="
          point.link === $route.path
            ? 'bg-second text-primary'
            : 'bg-primary text-second hover:bg-second hover:text-primary'
        "
        :style="linkStyle(index)"
        :key="index"
        :to="point.link"
      >
        {{ point.title }}
      </router-link>
    </div>
  </section>
  <Teleport to="body">
    <section
      class="fixed inset-x-0 bottom-0 z-10 flex justify-around overflow-x-auto bg-primary py-1 shadow-lg shadow-white lg:hidden"
    >
      <router-link :to="point.link" v-for="point in menu" :key="point.link">
        <component
          :is="icon(point.icon)"
          class="w-full rounded-full border p-1 hover:border-red"
          :class="{ 'border-red': point.link === $route.path }"
          :width="64"
          :height="64"
          color="white"
        />
      </router-link>
    </section>
  </Teleport>
</template>

<script setup>
import { useStorage } from '@vueuse/core'
import { defineAsyncComponent, onMounted } from 'vue'

import AppGears from '@/components/AppGears.vue'
import { store } from '@/components/composables/store.js'

await store.setItems('bosses')
await store.setItems('goblins')
await store.setItems('items')

const linkStyle = (index) => `animation-delay: ${index / 4 + 0.2}s`

const menu = [
  { title: 'что происходит?', link: '/', icon: 'QuestionIcon' },
  { title: 'снарядить персонажа', link: '/goblins', icon: 'ItemsIcon' },
  { title: 'смотреть боссов', link: '/boss', icon: 'BossIcon' },
  { title: 'дерево крафта', link: '/craft', icon: 'CraftIcon' },
  { title: 'квесты', link: '/quest', icon: 'LoupeIcon' },
  { title: 'о проекте', link: '/about', icon: 'InfoIcon' },
]

const icon = (name) =>
  defineAsyncComponent(() => import(`../icons/${name}.vue`))

onMounted(() => {
  const version = useStorage('version')
  if (version) store.setVersion(version)
})
</script>
