<script lang="ts" setup>
  const { recipe } = defineProps<{
    recipe: import("~~/types").Recipe
  }>()
</script>

<template>
  <aside class="prep-times">
    <h2 class="prep-title">Preparation time</h2>
    <ul class="prep-list">
      <li class="list-el" :key="key" v-for="(prep, key) in recipe.preparation">
        <p>
          <span class="padded-span">•</span>
          <span class="list-el-title">{{ key.charAt(0).toUpperCase() + key.slice(1) }}:</span>
          {{ prep }}
        </p>
      </li>
    </ul>
  </aside>
</template>

<style lang="scss" scoped>
  .prep-times {
    border-radius: 1.2rem;
    background-color: var(--rose-50);
    padding: 2.4rem 2.6rem;
    margin-bottom: 2.6rem;

    .prep-title {
      font-size: 2rem;
      font-weight: var(--font-weight-bold);
      margin-bottom: 1rem;
      color: var(--rose-800);
    }

    .prep-list {
      padding: 0 0.8rem;

      .list-el {
        line-height: 3.2rem;
        color: var(--stone-600);

        p {
          .padded-span {
            display: inline-block;
            padding-right: 2.8rem;
            font-size: 1.8rem;
          }

          .list-el-title {
            font-weight: var(--font-weight-bold);
            color: var(--stone-600);
          }
        }
      }
    }
  }
</style>
