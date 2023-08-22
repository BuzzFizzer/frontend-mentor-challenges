<template>
  <footer class="website-footer">
    <div class="footer-container">
      <img src="../../assets/icons/footer-logo.svg" class="logo" />
      <ul class="footer-nav">
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Projects</a></li>
      </ul>
      <ul class="footer-socials">
        <li>
          <a href="#">
            <img src="../../assets/icons/icon-facebook.svg" alt="facebook link" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../assets/icons/icon-instagram.svg" alt="instagram link" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../assets/icons/icon-twitter.svg" alt="twitter link" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../assets/icons/icon-pinterest.svg" alt="pinterest link" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .website-footer {
    background: var(--color-footer-background);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 7rem 0 0 0;

    & .footer-container {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: 6.5rem;
      font-family: var(--font-barlow);
      color: var(--color-moderate-cyan);

      & .logo {
        height: 3.5rem;
        width: 17rem;
        margin-bottom: 3.75rem;
        margin-right: 1.25rem;
      }

      .footer-nav {
        display: flex;
        margin-bottom: 8.5rem;
        column-gap: 5.75rem;

        & li {
          font-size: var(--navigation-anchor-font-samllest);

          & a:hover {
            color: var(--color-white);
          }
        }
      }

      .footer-socials {
        display: flex;
        max-width: fit-content;
        column-gap: 2.75rem;
      }
    }
  }
</style>
