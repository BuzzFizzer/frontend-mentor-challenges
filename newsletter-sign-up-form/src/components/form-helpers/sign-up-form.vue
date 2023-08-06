<script lang="ts" setup>
  import { type Ref, ref } from "vue"

  const email: Ref<null | string> = ref(null)
  const invalid: Ref<boolean> = ref(false)

  const emit = defineEmits(["success"])

  function submit(): void {
    const valid = typeof email.value === "string" && isValidEmail(email.value)

    if (!valid) {
      invalid.value = true
      return
    }

    emit("success", email.value)
  }

  function isValidEmail(email: string) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }
</script>

<template>
  <form @submit.prevent="submit" class="form">
    <div class="form-group">
      <div class="labelling">
        <label for="email">Email address</label>
        <span id="invalid-label" v-if="invalid">Valid email required</span>
      </div>
      <input
        type="text"
        v-model="email"
        @click="invalid = false"
        placeholder="email@company.com"
        :id="invalid ? 'invalid-input' : ''"
      />
    </div>

    <button>Subscribe to monthly newsletter</button>
  </form>
</template>

<style lang="scss" scoped>
  .form {
    display: flex;
    flex-direction: column;
    & .form-group {
      margin-bottom: 2.5rem;
      & .labelling {
        margin-bottom: 1.2rem;
        display: flex;
        justify-content: space-between;
        font-size: var(--paragraph-font-tiny);

        & label,
        & span {
          font-weight: var(--font-weight-bold);
        }
      }

      & input {
        font-size: var(--paragraph-font-regular);
        border: 1px solid var(--color-grey);
        color: var(--color-dark-slate-grey);
        border-radius: 1rem;
        padding: 1.8rem;
        width: 100%;
        cursor: pointer;

        &:focus {
          outline: none;
          border-color: var(--color-dark-slate-grey);
        }
      }
    }

    & button {
      position: relative;
      font-size: var(--paragraph-font-regular);
      font-weight: var(--font-weight-bold);
      border-radius: 1rem;
      padding: 1.8rem;
      width: 100%;
      cursor: pointer;
      z-index: 0;
      background: var(--color-dark-slate-grey);
      color: var(--color-white);

      &:hover {
        background: linear-gradient(to right, #ff693e, #ff5478);

        &::before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: linear-gradient(to right, #ff693e80, #ff547880);
          transform: translateY(1rem);
          border-radius: inherit;
          filter: blur(0.5rem);
          opacity: var(0.7);
          z-index: -1;
        }
      }
    }
  }

  #invalid-input {
    border-color: var(--color-tomato);
    background-color: #ff625736;
    color: var(--color-tomato);
  }

  #invalid-label {
    color: var(--color-tomato);
  }

  @media (max-width: 960px) {
    .form {
      & .form-group {
        & .labelling {
          font-size: var(--paragraph-font-tiny);
        }

        & input {
          font-size: var(--paragraph-font-regular);
        }
      }
    }
  }

  @media (max-width: 768px) {
    .form {
      row-gap: 0.6rem;
      & .form-group {
        & input {
          padding: 2.2rem;
        }
      }

      & button {
        padding: 2.2rem;
      }
    }
  }
</style>
