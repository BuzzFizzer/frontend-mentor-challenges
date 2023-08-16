const id = document.getElementsByTagName("h1")[0] as HTMLHeadingElement
const paragraph = document.getElementsByClassName("advice-paragraph")[0] as HTMLParagraphElement
const btn = document.getElementsByTagName("button")[0] as HTMLButtonElement

const random = (min: number, max: number): number => {
  if (min > max) [min, max] = [max, min]
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const get = async (): Promise<{ slip: { advice: string; id: number } }> => {
  const response = await fetch(`https://api.adviceslip.com/advice/${random(0, 200)}`)
  return await response.json()
}

const update = async (): Promise<void> => {
  try {
    const advice = await get()
    id.textContent = `Advice #${advice.slip.id}`
    paragraph.textContent = `"${advice.slip.advice}"`
  } catch (err: any) {
    alert("We Ran into an error: " + err.message)
  }
}

btn.addEventListener("click", update)
