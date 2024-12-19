<script setup lang="ts">
defineProps({
  game: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="card flex flex-row py-3 gap-2">
    <img :src="game.background_image" :alt="game.name" class="w-32 " >
    <div
      class="flex flex-col w-full p-2"
    >
    <h6>{{ game.name }}</h6>
    <p>{{ game.description }}</p>

    </div>
  </div>
</template>