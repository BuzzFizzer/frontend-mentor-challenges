import Recipe from "../../models/recipe.model"

export default defineEventHandler(async () => {
  const recipe = await Recipe.aggregate([{ $sample: { size: 1 } }]).then((res) => res[0])
  return { recipe }
})
