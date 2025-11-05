<script setup lang="ts">
  import type { Recipe } from "~~/types"

  const { recipe } = defineProps<{
    recipe: Recipe
  }>()
</script>

<template>
  <article class="recipe" aria-labelledby="recipe-title">
    <header-comp :recipe="recipe" />
    <prep-comp :recipe="recipe" />
    <ingredients-comp :recipe="recipe" />
    <recipe-section-devider />
    <instructions-comp :recipe="recipe" />
    <recipe-section-devider />
    <nutritions-comp :recipe="recipe" />
  </article>
</template>

<style lang="scss" scoped>
  .recipe {
    border-radius: 2.4rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    max-width: 73.5rem;
    margin: 0 auto;
    padding: 4rem 4rem 2.6rem 4rem;
  }
</style>
