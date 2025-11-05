<script lang="ts" setup>
  const { recipe } = defineProps<{
    recipe: import("~~/types").Recipe
  }>()
</script>

<template>
  <section class="ingredients">
    <h2 class="ingredients-heading section-heading-style">Ingredients</h2>
    <ul class="ingredients-list">
      <li :key="ing" v-for="ing in recipe.ingredients">
        <p>
          <span class="padded-span">•</span>
          {{ ing }}
        </p>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
  .ingredients {
    margin-bottom: 2.6rem;

    .ingredients-heading {
      margin-bottom: 1.4rem;
    }

    .ingredients-list {
      padding: 0 0.8rem;

      & li {
        color: var(--stone-600);
        line-height: 3.2rem;
      }

      p {
        .padded-span {
          display: inline-block;
          padding-right: 2.4rem;
          font-size: 1.8rem;
        }
      }
    }
  }
</style>
