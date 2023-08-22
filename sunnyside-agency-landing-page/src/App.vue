<script setup lang="ts">
  import { type ComputedRef, type Ref, ref, computed, provide, onMounted, readonly } from "vue"
  import Landing from "./views/Landing.vue"

  const width: Ref<number> = ref(window.innerWidth)
  const mobile: ComputedRef<boolean> = computed(() => {
    return width.value > 768 ? false : true
  })

  provide("mobile", readonly(mobile))

  const update = () => {
    width.value = window.innerWidth
  }

  onMounted(() => {
    window.addEventListener("resize", update)
  })
</script>

<template>
  <Landing></Landing>
</template>
