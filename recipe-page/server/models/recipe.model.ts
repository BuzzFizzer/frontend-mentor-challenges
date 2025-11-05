import { Schema, model } from "mongoose"
import { Recipe as IRecipe } from "../../types"

const recipeSchema = new Schema<IRecipe>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: {
      src: { type: String, required: true },
      alt: { type: String, required: true },
    },
    preparation: {
      total: { type: String, required: true },
      preparation: { type: String, required: true },
      cooking: { type: String, required: true },
    },
    ingredients: [{ type: String, required: true }],
    instructions: [
      {
        step: { type: String, required: true },
        follow: { type: String, required: true },
      },
    ],
    nutrition: [
      {
        name: { type: String, required: true },
        amount: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
)

export default model<IRecipe>("Recipe", recipeSchema)
