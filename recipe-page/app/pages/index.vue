<template>
  <main class="page-container">
    <recipe-component v-if="recipe" :recipe="recipe" />
  </main>
</template>

<script setup lang="ts">
  const { recipe, fetchRecipe } = useRecipeStore()
  await fetchRecipe()

  useSeoMeta({
    title: () => recipe?.title,
    ogTitle: () => recipe?.title,
    description: () => recipe?.description,
    ogDescription: () => recipe?.description,
    ogImage: () => recipe?.image,
  })
</script>

<style lang="scss" scoped>
  main {
    padding: 12.4rem 0;
  }
</style>
