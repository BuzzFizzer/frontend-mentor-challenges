<script setup lang="ts">
  import theHeader from "@/components/common/the-header.vue"
  import splitSection from "@/components/landing-page/split-screen-section.vue"
  import testimonialsSection from "@/components/landing-page/testimonials-section.vue"
  import GallerySection from "@/components/landing-page/gallery-section.vue"
  import theFooter from "@/components/common/the-footer.vue"
</script>

<template>
  <the-header></the-header>
  <main>
    <split-section></split-section>
    <testimonials-section></testimonials-section>
    <gallery-section></gallery-section>
  </main>
  <the-footer></the-footer>
</template>

<style scoped></style>
