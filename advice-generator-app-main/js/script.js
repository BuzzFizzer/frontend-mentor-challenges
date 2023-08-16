"use strict"
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
const id = document.getElementsByTagName("h1")[0]
const paragraph = document.getElementsByClassName("advice-paragraph")[0]
const btn = document.getElementsByTagName("button")[0]
const random = (min, max) => {
  if (min > max) [min, max] = [max, min]
  return Math.floor(Math.random() * (max - min + 1)) + min
}
const get = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`https://api.adviceslip.com/advice/${random(0, 200)}`)
    return yield response.json()
  })
const update = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const advice = yield get()
      id.textContent = `Advice #${advice.slip.id}`
      paragraph.textContent = `"${advice.slip.advice}"`
    } catch (err) {
      alert("We Ran into an error: " + err.message)
    }
  })
btn.addEventListener("click", update)
