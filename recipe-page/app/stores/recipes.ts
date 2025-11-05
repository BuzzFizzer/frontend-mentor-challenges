import { acceptHMRUpdate } from "pinia"

export type Recipe = {
  title: string
  description: string
  image: {
    src: string
    alt: string
  }
  preparation: {
    total: string
    preparation: string
    cooking: string
  }
  ingredients: string[]
  instructions: {
    step: string
    follow: string
  }[]
  nutrition: {
    name: string
    amount: string
  }[]
}

export const useRecipeStore = defineStore("recipe", () => {
  let recipe: Ref<Recipe | null> = ref(null)

  const fetchRecipe = async () => {
    try {
      const { data } = await useFetch<{ recipe: Recipe }>("/api/recipes/recipe")
      recipe.value = data.value?.recipe ?? null
    } catch (error) {
      console.error("Error fetching recipe:", error)
    }
  }

  return {
    fetchRecipe,
    recipe,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useRecipeStore, import.meta.hot))
}
