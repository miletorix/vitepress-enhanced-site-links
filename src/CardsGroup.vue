<!-- CardsGroup.vue -->
<template>
  <div class="cards-group">
    <Card v-for="card in cards" v-bind="card" :key="card.title" />
  </div>
</template>

<script setup lang="ts">
import Card from './Card.vue'

const props = defineProps<{
  cards: Array<{
    title: string
    link?: string
    desc?: string
    logo?: string
    theme?: string
    hoverShadow?: boolean
  }>
}>()
</script>

<style scoped>
.cards-group {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
</style>
