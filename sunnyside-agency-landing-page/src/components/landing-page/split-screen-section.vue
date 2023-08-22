<script lang="ts" setup>
  import { type Ref, inject } from "vue"
  const mobile = inject("mobile") as Ref<boolean>
</script>

<template>
  <section class="split-screen-section">
    <div class="text-part">
      <div class="text-wrapper left-margined">
        <h2>Transform your brand</h2>
        <p>
          We are a full-service creative agency specializing in helping brands grow fast. Engage
          your clients through compelling visuals that do most of the marketing for you.
        </p>
        <a class="yellow-underline" href="#">Learn more</a>
      </div>
    </div>
    <div class="image-part">
      <img
        v-if="!mobile"
        src="../../assets/desktop/image-transform.jpg"
        alt="an image of an egg on a yellow background"
      />
      <img
        v-else
        src="../../assets//mobile//image-transform.jpg"
        alt="an image of an egg on a yellow background"
      />
    </div>
    <div class="image-part">
      <img
        v-if="!mobile"
        src="../../assets/desktop/image-stand-out.jpg"
        alt="an image of an egg on a yellow background"
      />
      <img
        v-else
        src="../../assets/mobile/image-stand-out.jpg"
        alt="an image of an egg on a yellow background"
      />
    </div>
    <div class="text-part">
      <div class="text-wrapper right-margined">
        <h2>Stand out to the right audience</h2>
        <p>
          Using a collaborative formula of designers, researchers, photographers, videographers, and
          copywriters, we’ll build and extend your brand in digital places.
        </p>
        <a class="pink-underline" href="#">Learn more</a>
      </div>
    </div>
    <div class="image-part">
      <img
        v-if="!mobile"
        src="../../assets/desktop/image-graphic-design.jpg"
        alt="an image of an egg on a yellow background"
      />
      <img
        v-else
        src="../../assets/mobile/image-graphic-design.jpg"
        alt="an image of an egg on a yellow background"
      />
      <div class="image-text greenish">
        <h2>Graphic Design</h2>
        <p>
          Great design makes you memorable. We deliver artwork that underscores your brand message
          and captures potential clients’ attention.
        </p>
      </div>
    </div>
    <div class="image-part">
      <img
        v-if="!mobile"
        src="../../assets/desktop/image-photography.jpg"
        alt="an image of an egg on a yellow background"
      />
      <img
        v-else
        src="../../assets/mobile/image-photography.jpg"
        alt="an image of an egg on a yellow background"
      />
      <div class="image-text bluish">
        <h2>Photography</h2>
        <p>
          Increase your credibility by getting the most stunning, high-quality photos that improve
          your business image.
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .split-screen-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    & .image-part {
      display: flex;
      position: relative;

      & img {
        width: 100%;
      }

      & .image-text {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        max-width: 35rem;
        width: 100%;
        margin-bottom: 8.5%;

        & h2 {
          font-weight: 900;
          font-size: 2.8rem;
          margin-bottom: 2.5rem;
        }

        & p {
          font-family: var(--font-barlow);
          font-size: var(--paragraph-font);
        }
      }

      & .greenish {
        color: var(--color-desaturated-cyan);
      }

      & .bluish {
        color: var(--color-dark-blue);
      }
    }

    & .text-part {
      background: var(--color-split-screen-section);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 4rem;

      .text-wrapper {
        max-width: 44rem;

        &.left-margined {
          margin-left: 5rem;
        }

        &.right-margined {
          margin-right: 6rem;
        }

        & h2 {
          color: var(--color-very-dark-desaturated-blue);
          font-weight: var(--font-weight-boldest);
          font-size: var(--header-font-regular);
          line-height: 1.2;
          letter-spacing: 0.3px;
        }

        & p {
          color: var(--color-dark-grayish-blue);
          font-family: var(--font-barlow);
          font-size: var(--paragraph-font-large);
          margin-top: 3.5rem;
          margin-bottom: 4rem;
          letter-spacing: -0.2px;
        }

        & a {
          font-weight: var(--font-weight-boldest);
          text-transform: uppercase;
          letter-spacing: 0.4px;
          font-size: var(--paragraph-font);
          position: relative;
          margin-left: 1rem;
          z-index: 10;

          &::before {
            content: "";
            z-index: -1;
            position: absolute;
            bottom: 0;
            transform: translateY(0.35rem) translateX(-5%);
            border-radius: 1rem;
            height: 1rem;
            width: 110%;
          }
        }

        & .pink-underline {
          &::before {
            background: hsla(7, 99%, 70%, 0.25);
          }

          &:hover {
            &::before {
              background: var(--color-soft-red);
            }
          }
        }

        & .yellow-underline {
          &::before {
            background: hsla(51, 100%, 49%, 0.25);
          }

          &:hover {
            &::before {
              background: var(--color-yellow);
            }
          }
        }
      }
    }
  }

  @media (max-width: 992px) {
    .split-screen-section {
      & .image-part {
        & .image-text {
          max-width: 40rem;
          & p {
            font-size: var(--paragraph-font-large);
          }
        }
      }

      & .text-part {
        .text-wrapper {
          & a {
            font-size: var(--paragraph-font-larger);
            margin-left: unset;
          }
        }
      }
    }

    .right-margined,
    .left-margined {
      margin-right: unset !important;
      margin-left: unset !important;
    }
  }

  @media (max-width: 768px) {
    .split-screen-section {
      grid-template-columns: 1fr;

      & .text-part {
        background: var(--color-split-screen-section);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 8rem 4rem;

        .text-wrapper {
          & p {
            line-height: 1.65;
            font-size: var(--paragraph-font-largest);
            margin-top: 3.25rem;
            margin-bottom: 4.25rem;
          }

          & a {
            font-size: var(--paragraph-font-larger);
            margin-left: unset;
            margin-bottom: 14rem;
          }
        }
      }

      & .image-part {
        display: flex;
        position: relative;

        & img {
          width: 100%;
        }

        & .image-text {
          margin-bottom: 7.5rem;
          max-width: 42.5rem;
          width: 100%;

          & h2 {
            font-weight: 900;
            font-size: 3.6rem;
            margin-bottom: 2.75rem;
          }

          & p {
            font-family: var(--font-barlow);
            font-size: var(--paragraph-font-larger);
          }
        }
      }

      & div:nth-child(1) {
        order: 2;
      }
      & div:nth-child(2) {
        order: 1;
      }
      & div:nth-child(3) {
        order: 3;
      }
      & div:nth-child(4) {
        order: 4;
      }
      & div:nth-child(5) {
        order: 5;
      }
      & div:nth-child(6) {
        order: 6;
      }
    }
  }
</style>
