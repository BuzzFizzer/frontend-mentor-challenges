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
