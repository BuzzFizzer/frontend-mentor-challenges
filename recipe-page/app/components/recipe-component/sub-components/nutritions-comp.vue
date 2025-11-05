<script setup lang="ts">
  const { recipe } = defineProps<{
    recipe: import("~~/types").Recipe
  }>()
</script>

<template>
  <section class="nutrition">
    <h2 class="nutrition-heading section-heading-style">Nutrition</h2>
    <p class="nutrition-desc">
      The table below shows nutritional values per serving without the additional fillings.
    </p>

    <table class="nutrition-table">
      <tbody>
        <tr :key="nutri.amount" v-for="nutri in recipe.nutrition">
          <td>{{ nutri.name }}</td>
          <td>{{ nutri.amount }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style lang="scss" scoped>
  .nutrition {
    .nutrition-heading {
      margin-bottom: 2rem;
    }

    .nutrition-desc {
      color: var(--stone-600);
      margin-bottom: 2.6rem;
    }

    .nutrition-table {
      width: 100%;
      border-collapse: collapse;

      & tbody tr {
        border-bottom: 1px solid var(--stone-150);
        display: flex;

        &:not(:first-child) td {
          margin-top: 1.4rem;
        }

        &:last-of-type {
          border-bottom: none;
        }

        & td {
          flex: 1;
          padding: 0 0 1.4rem 0;

          &:first-child {
            padding-left: 3.2rem;
            color: var(--stone-600);
          }

          &:last-child {
            font-weight: var(--font-weight-bold);
            color: var(--brown-800);
            margin-left: -1.4rem;
            text-align: left;
          }
        }
      }
    }
  }
</style>
