<script lang="ts" setup>
  import listIcon from "./form-helpers/icon-list.vue"
  import desktopIllustration from "./form-helpers/illustration-desktop.vue"
  import mobileIllustration from "./form-helpers/illustration-mobile.vue"
  import signUpSuccess from "./form-helpers/sign-up-success.vue"
  import signUpForm from "./form-helpers/sign-up-form.vue"

  import { type Ref, ref, onMounted, onBeforeUnmount } from "vue"

  const isLargeScreen: Ref<boolean> = ref(true)
  const component: Ref<"form" | "success"> = ref("form")
  const email: Ref<null | string> = ref(null)

  onMounted((): void => {
    isLargeScreen.value = window.innerWidth > 768
    window.addEventListener("resize", updateScreenSize)
  })

  onBeforeUnmount((): void => {
    window.removeEventListener("resize", updateScreenSize)
  })

  function updateScreenSize(): void {
    isLargeScreen.value = window.innerWidth > 768
  }

  function success(value: string): void {
    component.value = "success"
    email.value = value
  }
</script>

<template>
  <div v-if="component === 'form'" class="signup-form">
    <div class="signup-form__details">
      <h1 class="signup-form__title">Stay updated!</h1>
      <p class="signup-form__paragraph">
        Join 60,000+ product managers receiving monthly updates on:
      </p>

      <ul class="signup-form__perks">
        <li>
          <list-icon></list-icon>
          <p>Product discovery and building what matters</p>
        </li>
        <li>
          <list-icon></list-icon>
          <p>Measuring to ensure updates are a success</p>
        </li>
        <li>
          <list-icon></list-icon>
          <p>And much more!</p>
        </li>
      </ul>

      <sign-up-form @success="success"></sign-up-form>
    </div>

    <div class="signup-form__banner">
      <desktop-illustration v-if="isLargeScreen"></desktop-illustration>
      <mobile-illustration v-else></mobile-illustration>
    </div>
  </div>
  <sign-up-success
    @dismiss="component = 'form'"
    :email="email"
    v-else
  ></sign-up-success>
</template>

<style lang="scss">
  .signup-form {
    transition: all 0.3s ease;
    display: flex;
    background-color: var(--color-white);
    font-size: var(--paragraph-font-regular);
    max-width: 93rem;
    padding: 2.5rem;
    height: 64rem;
    width: 100%;
    border-radius: 4rem;
    gap: 2.4rem;
    align-items: center;

    &__details,
    &__form {
      flex: 1;
    }

    &__details {
      padding: 0 4rem;
      display: flex;
      flex-direction: column;
    }

    &__title {
      font-size: 5.6rem;
      font-weight: var(--font-weight-bold);
      margin-bottom: 2rem;
    }

    &__paragraph {
      margin-bottom: 2.5rem;
      line-height: 1.5;
    }

    &__perks {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 1.2rem;
      margin-bottom: 4.3rem;

      & li {
        display: flex;
        align-items: center;
        gap: 1.75rem;

        & svg {
          flex-shrink: 0;
        }
      }
    }
  }

  @media (max-width: 960px) {
    html {
      font-size: 50%;
    }

    :root {
      --paragraph-font-regular: 2rem;
      --paragraph-font-tiny: 1.5rem;
    }

    .signup-form {
      padding: 0 2.5rem;

      &__details {
        justify-content: start !important;
      }

      &__title {
        margin-bottom: 2.25rem;
      }

      &__perks {
        & li {
          align-items: unset;
        }
      }

      &__banner {
        max-width: 40rem;

        & svg {
          height: 100%;
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 768px) {
    #app {
      align-items: start;
    }

    .signup-form {
      padding: 0;
      min-height: 100svh;
      flex-direction: column-reverse;
      min-width: 46.875rem;
      border-radius: 0;
      max-width: 100%;
      width: 100%;

      &__details {
        padding: 1.5rem 3rem;
      }

      &__banner {
        margin-top: -0.2rem;
        max-width: 100%;
        width: 100%;
      }

      &__perks {
        gap: 2.4rem;
      }
    }
  }
</style>
