<script lang="ts" setup>
  import iconSuccess from "./icon-success.vue"

  const emit = defineEmits(["dismiss"])

  interface Props {
    email: string | null
  }

  const props = defineProps<Props>()

  const dismiss = (): void => emit("dismiss")
</script>

<template>
  <div class="signup-success">
    <div class="flex-wrapper">
      <icon-success class="signup-success__icon"></icon-success>
      <h1 class="signup-success__title">Thanks for subscribing!</h1>
      <p class="signup-success__message">
        A confirmation email has been sent to <span>{{ props.email }}</span
        >. Please open it and click the button inside to confirm your
        subscription.
      </p>
    </div>

    <button @click="dismiss" class="signup-success__dismiss-button">
      Dismiss message
    </button>
  </div>
</template>

<style lang="scss" scoped>
  .signup-success {
    max-width: 50.5rem;
    background-color: var(--color-white);
    padding: 5rem 6.5rem 6.5rem 6.5rem;
    border-radius: 4rem;

    &__icon {
      margin-bottom: 3rem;
    }

    &__title {
      font-weight: var(--font-weight-bold);
      font-size: 5.2rem;
      margin-bottom: 2.25rem;
      line-height: 1;
    }

    &__message {
      font-size: var(--paragraph-font-regular);
      margin-bottom: 4rem;
      line-height: 1.4;

      & span {
        font-weight: var(--font-weight-bold);
      }
    }

    &__dismiss-button {
      background-color: var(--color-dark-slate-grey);
      border-radius: 1rem;
      padding: 1.8rem;
      width: 100%;
      cursor: pointer;
      font-size: var(--paragraph-font-regular);
      font-weight: var(--font-weight-bold);
      color: var(--color-white);

      &:hover {
        background: linear-gradient(to right, #ff693e, #ff5478);
      }
    }
  }

  @media (max-width: 768px) {
    #app {
      align-items: start;
    }

    .signup-success {
      padding: 18.7rem 3rem 4.7rem 3rem;
      min-height: 100svh;
      min-width: 46.875rem;
      border-radius: 0;
      max-width: 100%;
      width: 100%;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &__icon {
        margin-bottom: 4.5rem;
      }

      &__title {
        margin-bottom: 2.75rem;
        line-height: 1.25;
      }
    }
  }
</style>
