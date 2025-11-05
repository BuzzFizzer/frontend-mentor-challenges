// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/styles/main.scss"],
  components: [{ path: "~/components", pathPrefix: false }],
  app: {
    rootAttrs: {
      id: "application",
    },
    baseURL: "/projects/recipe-challenge/",
  },
  modules: ["@nuxt/fonts", "@pinia/nuxt"],
  nitro: {
    plugins: ["~/plugins/server/mongodb.server.ts"],
  },
  runtimeConfig: {
    mongodbURI: "mongodb://localhost:27017",
  },
  fonts: {
    devtools: false,
    defaults: {
      weights: [400, 600, 700],
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
})
