<script lang="ts" setup>
  const { recipe } = defineProps<{
    recipe: import("~~/types").Recipe
  }>()
</script>

<template>
  <header class="recipe-header">
    <figure class="recipe-img">
      <img :src="'/projects/recipe-challenge' + recipe.image.src" :alt="recipe.image.alt" />
    </figure>

    <h1 class="recipe-title">{{ recipe.title }}</h1>
    <p class="recipe-desc">{{ recipe.description }}</p>
  </header>
</template>

<style lang="scss" scoped>
  .recipe-header {
    margin-bottom: 3.4rem;

    .recipe-img {
      img {
        border-radius: 1.2rem;
        margin-bottom: 2.8rem;
      }
    }

    .recipe-title {
      font-family: var(--font-family-heading);
      font-size: 4rem;
      color: var(--stone-900);
      margin-bottom: 1.4rem;
    }

    .recipe-desc {
      color: var(--stone-900);
      line-height: 1.5;
    }
  }
</style>
