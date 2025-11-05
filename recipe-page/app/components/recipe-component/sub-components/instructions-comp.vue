<script lang="ts" setup>
  const { recipe } = defineProps<{
    recipe: import("~~/types").Recipe
  }>()
</script>

<template>
  <section class="instructions">
    <h2 class="instructions-heading section-heading-style">Instructions</h2>
    <ol class="instructions-list">
      <li class="instruction" :key="inst.step" v-for="inst in recipe.instructions">
        <p>
          <span>{{ inst.step }}:</span> {{ inst.follow }}
        </p>
      </li>
    </ol>
  </section>
</template>

<style lang="scss" scoped>
  .instructions {
    margin-bottom: 2.4rem;

    .instructions-heading {
      margin-bottom: 1.8rem;
    }
    .instructions-list {
      list-style-type: decimal;
      padding: 0 1.4rem 0 2.4rem;

      & .instruction {
        padding-left: 1.6rem;
        padding-bottom: 0.8rem;

        &::marker {
          font-weight: var(--font-weight-bold);
          color: var(--brown-800);
        }

        p {
          color: var(--stone-600);
          letter-spacing: -0.05px;
          line-height: 1.5;

          span {
            display: inline-block;
            font-weight: var(--font-weight-bold);
            color: var(--stone-600);
          }
        }
      }
    }
  }
</style>
