<script lang="ts" setup>
  import { type Ref, ref, inject, watch } from "vue"

  const mobile = inject("mobile") as Ref<boolean>
  const menu: Ref<HTMLUListElement | null> = ref(null)
  const state: Ref<boolean> = ref(false)

  const toggle = () => {
    state.value = !state.value
    if (!menu.value) return

    if (state.value) menu.value.classList.add("visible")
    else menu.value.classList.remove("visible")
  }

  watch(mobile, (value) => {
    if (!value) state.value = false
  })
</script>

<template>
  <header class="landing-header">
    <nav class="navigation-bar">
      <img class="logo" src="../../assets/icons/header-logo.svg" alt="website logo" />
      <ul
        :class="!mobile ? 'desktop-navigation' : 'mobile-navigation'"
        v-show="mobile ? state : true"
        ref="menu"
      >
        <div v-show="mobile ? state : true" class="mobile-edge"></div>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Projects</a></li>
        <li class="contact">
          <a href="#">Contact</a>
        </li>
      </ul>
      <button v-if="mobile" @click="toggle" class="mobile-menu">
        <img src="../../assets/icons/icon-hamburger.svg" alt="menu hamburger icon" />
      </button>
    </nav>
    <div class="hero-section">
      <h1>We Are Creatives</h1>
      <img src="../../assets/icons/icon-arrow-down.svg" alt="arrow down icon" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
  .landing-header {
    background: url("../../assets/desktop/image-header.jpg") center/cover no-repeat;
    max-height: 80rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .navigation-bar {
    padding: 3.25rem 4rem 0 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 9.25rem;

    & .mobile-menu {
      background: transparent;
      cursor: pointer;
    }

    & .logo {
      height: 3.25rem;
      width: 17rem;
      cursor: pointer;
    }

    & .desktop-navigation {
      font-family: var(--font-barlow);
      display: flex;
      align-items: center;
      column-gap: 0.5rem;

      & li {
        & a {
          font-size: var(--navigation-anchor-font-samllest);
          display: inline-block;
          padding: 1.5rem 2rem;
          border-radius: 10rem;
          color: var(--color-white);
        }
      }

      & .contact {
        & a {
          font-size: var(--paragraph-font);
          color: var(--color-very-dark-desaturated-blue);
          font-family: var(--font-fraunces);
          text-transform: uppercase;
          padding: 1.5rem 2.75rem;
          margin-left: 2rem;
          margin-right: 1rem;
          background: var(--color-yellow);

          &:hover {
            background: rgba(255, 255, 255, 0.4);
          }
        }
      }
    }

    & .mobile-navigation {
      display: flex;
      position: absolute;
      flex-direction: column;
      align-items: center;
      top: 13.125rem;
      width: 90%;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      background: var(--color-white);
      color: var(--color-dark-grayish-blue);
      padding: 3.5rem 0;
      row-gap: 0.25rem;
      font-family: var(--font-barlow);

      & .mobile-edge {
        position: absolute;
        clip-path: polygon(100% 0, 0 100%, 100% 100%);
        background: var(--color-white);
        bottom: 100%;
        right: 0;
        width: 3.125rem;
        aspect-ratio: 1 / 1;
      }

      & li {
        & a {
          font-size: var(--navigation-anchor-font);
          display: inline-block;
          padding: 1.5rem 2rem;
          border-radius: 10rem;
        }
      }

      & .contact {
        & a {
          font-size: var(--paragraph-font-larger);
          text-transform: uppercase;
          font-family: var(--font-fraunces);
          color: var(--color-very-dark-desaturated-blue);
          background: var(--color-yellow);
          padding: 1.75rem 3.5rem;
          margin: 1.75rem 0;

          &:hover {
            background: hsla(0, 0%, 100%, 0.3);
          }
        }
      }
    }
  }

  .hero-section {
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    row-gap: 8.5rem;

    & h1 {
      color: var(--color-white);
      text-transform: uppercase;
      letter-spacing: 10.5px;
      font-size: var(--header-hero-font);
      font-weight: 900;
    }
  }

  .visible {
    display: flex !important;
  }

  @media (max-width: 768px) {
    .landing-header {
      background: url("../../assets/mobile/image-header.jpg") bottom/cover no-repeat;
      max-height: 67.25rem;
    }

    .navigation-bar {
      padding: 4.1rem 3rem 0 3rem;
      margin-bottom: 10.75rem;

      & .logo {
        height: 3.125rem;
        width: 15.625rem;
      }
    }

    .hero-section {
      row-gap: 6.25rem;

      & h1 {
        font-size: var(--header-hero-font-mobile);
        letter-spacing: 5px;
        line-height: 1.15;
      }
    }
  }
</style>
