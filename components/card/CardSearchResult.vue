<script setup lang="ts">
defineProps({
  game: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="card">
    <h3>{{ game.name }}</h3>
  </div>
</template>