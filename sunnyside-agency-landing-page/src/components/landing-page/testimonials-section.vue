<template>
  <div class="testimonials-section">
    <h2>Client testimonials</h2>
    <div class="testimonials">
      <div class="testimonial">
        <img
          class="profile-image"
          src="../../assets/profiles/image-emily.jpg"
          alt="customer testimonial picture"
        />
        <p class="testimony">
          We put our trust in Sunnyside and they delivered, making sure our needs were met and
          deadlines were always hit.
        </p>
        <div class="client">
          <p class="name">Emily R.</p>
          <p class="occupation">Marketing Director</p>
        </div>
      </div>
      <div class="testimonial">
        <img
          class="profile-image"
          src="../../assets/profiles/image-thomas.jpg"
          alt="customer testimonial picture"
        />
        <p class="testimony">
          Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a
          satisfying and enjoyable experience.
        </p>
        <div class="client">
          <p class="name">Thomas S.</p>
          <p class="occupation">Chief Operating Officer</p>
        </div>
      </div>
      <div class="testimonial">
        <img
          class="profile-image"
          src="../../assets/profiles/image-jennie.jpg"
          alt="customer testimonial picture"
        />
        <p class="testimony">
          Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly
          recommended!
        </p>
        <div class="client">
          <p class="name">Jennie F.</p>
          <p class="occupation">Business Owner</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .testimonials-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15.5rem 2.5rem 16.5rem 2.5rem;
    background: var(--color-testimonials-section);

    & h2 {
      font-weight: var(--font-weight-boldest);
      color: var(--color-grayish-blue);
      letter-spacing: 5.25px;
      text-transform: uppercase;
      margin-bottom: 8rem;
      font-size: var(--header-font-small);
    }

    & .testimonials {
      display: flex;
      justify-content: space-between;
      max-width: 111rem;
      width: 100%;

      & .testimonial {
        flex: 1 1 30%;
        max-width: 35rem;
        text-align: center;

        & .profile-image {
          max-width: 7.25rem;
          border-radius: 50%;
          margin-bottom: 5rem;
        }

        & .testimony {
          font-family: var(--font-barlow);
          color: var(--color-very-dark-grayish-blue);
          line-height: 1.8;
          margin-bottom: 6.75rem;
          font-size: var(--paragraph-font-large);
        }

        & .client {
          margin-right: 1.75rem;
          & .name {
            margin-bottom: 0.5rem;
            font-size: var(--paragraph-font-large);
          }

          & .occupation {
            color: var(--color-grayish-blue);
            font-family: var(--font-barlow);
            font-size: 1.4rem;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .testimonials-section {
      & .testimonials {
        flex-wrap: wrap;
        row-gap: 7.5rem;
        column-gap: 2.5rem;
        justify-content: center;

        & .testimonial {
          flex: 1 0 47.5%;

          & .profile-image {
            margin-bottom: 2.75rem;
          }

          & .testimony {
            margin-bottom: 4rem;
          }
        }
      }
    }
  }
</style>
