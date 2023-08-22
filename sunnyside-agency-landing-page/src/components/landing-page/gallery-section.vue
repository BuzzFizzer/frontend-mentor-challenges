<script lang="ts" setup>
  import { type Ref, inject, watch } from "vue"
  const mobile = inject("mobile") as Ref<boolean>

  watch(mobile, (value) => {
    console.log(value)
  })
</script>

<template>
  <div class="image-gallery">
    <img
      v-if="!mobile"
      src="../../assets/desktop/image-gallery-milkbottles.jpg"
      alt="gallery milk bottles image"
    />
    <img
      v-else
      src="../../assets/mobile/image-gallery-milkbottles.jpg"
      alt="gallery milk bottles image"
    />
    <img
      v-if="!mobile"
      src="../../assets/desktop/image-gallery-orange.jpg"
      alt="gallery slice of orange image"
    />
    <img
      v-else
      src="../../assets/mobile/image-gallery-orange.jpg"
      alt="gallery slice of orange image"
    />
    <img
      v-if="!mobile"
      src="../../assets/desktop/image-gallery-cone.jpg"
      alt="gallery ice cream cone image"
    />
    <img
      v-else
      src="../../assets/mobile/image-gallery-cone.jpg"
      alt="gallery ice cream cone image"
    />
    <img
      v-if="!mobile"
      src="../../assets/desktop/image-gallery-sugarcubes.jpg"
      alt="gallery sugar cubes image"
    />
    <img
      v-else
      src="../../assets/mobile/image-gallery-sugar-cubes.jpg"
      alt="gallery sugar cubes image"
    />
  </div>
</template>

<style lang="scss" scoped>
  .image-gallery {
    display: flex;

    & img {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .image-gallery {
      flex-wrap: wrap;

      & img {
        flex: 1 1 50%;
      }
    }
  }
</style>
