<script setup lang="ts">
const links = [

  {
    label: 'Most popular',
    icon: 'i-heroicons-fire',
    to: '/popular-games'
  },
  {
    label: 'Newly added',
    icon: 'i-heroicons-sparkles',
    to: '/newly-added'
  },
  {
    label: 'Genres',
    icon: 'i-heroicons-tag',
    to: '/genres'
  }
]

const isOpen = ref(false)
const query = ref('')
const games = ref<unknown>(null)
const config = useRuntimeConfig();
const key = config.public.apiKey;

const { data, error, refresh } = await useFetch(`https://api.rawg.io/api/games`, {
  query: {
    key: key,
    search: query
  },
  server: false,
  lazy: true,
  watch: [query],
  transform: (data: { results: {name: string, id: string}[]}) => {
    return data.results
  }
});



</script>

<template>
  <div class="grid grid-cols-3 items-center w-full p-4 border-b border-gray-200 dark:border-gray-800">
    <!-- Header Title -->
    <h4 class="font-bold text-lg">GameFlix</h4>

    <!-- Navigation -->
    <UHorizontalNavigation :links="links" class="justify-self-center justify-center" />

    <!-- Login Button -->
    <div class="flex items-center justify-end space-x-4">
      <UButton icon="i-heroicons-magnifying-glass" variant="outline" @click="isOpen = true">
        Search
      </UButton>
      <UButton>
        Login
      </UButton>

      <UModal v-model="isOpen" :overlay="false">
        <div class="p-4">
          <UInput color="primary" variant="outline" placeholder="Search..." v-model="query" />
          <CardSearchResult v-for="game in data" :key="game.id" :game="game" />
        </div>
      </UModal>
    </div>

  </div>
</template>