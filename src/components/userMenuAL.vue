<template>
  <div class="wrap-user-al">
    <!-- User info -->
    <div class="wrap-user-info">
      <div class="wrap-user-details">
        <div class="user-icon"></div>
        <div class="user-name">juandelacruz</div>
      </div>
      <div class="wrap-user-balance">
        <div class="caption">Balance</div>
        <div class="wrap-user-amount">
          <div class="currency">PHP</div>
          <div class="amount">999,999,999.99</div>
          <div class="balance-icon"></div>
        </div>
      </div>
    </div>

    <!-- Main links -->
    <div class="wrap-menu-al">
      <div class="menu-al" v-for="menu in menuAL" :key="menu">
        <div class="list-item">
          <div>{{ menu.label }}</div>
        </div>
      </div>
    </div>

    <!-- Secondary links -->
    <div class="wrap-menu-al-secondary">
      <div class="menu-al-secondary" v-for="menu in menuALSecondary" :key="menu">
        <div class="list-item">
          <div>{{ menu.label }}</div>
        </div>
      </div>

      <!-- Change language -->
      <div class="wrap-change-language">
        <div>English</div>
        <div class="flag-icon"></div>
      </div>
    </div>

    <!-- Redirect -->
    <div class="redirect">Go to CloudCity.com</div>

    <!-- Logout -->
    <div class="logout" @click="logInOut">Log out</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuAL: [{ label: "Home" }, { label: "My account" }, { label: "Assets" }, { label: "Reports" }, { label: "Payments" }],
      menuALSecondary: [{ label: "About us" }, { label: "Terms and conditions" }, { label: "FAQs" }, { label: "Announcements" }, { label: "Contact us" }]
    }
  },

  inject: ["logInOut"]
}
</script>

<style lang="scss">
.wrap-user-al {
  overflow: scroll;
  .wrap-user-info {
    background-color: rgba($clr-black, 1);
    padding: $UI-size-xxxl $UI-size-xxl;
    border-bottom: solid $UI-size-basic rgba($clr-white, 0.1);

    .wrap-user-details {
      display: flex;
      align-items: center;

      .user-icon {
        height: $UI-size-xxl;
        width: $UI-size-xxl;
        background-image: url("./../assets/icon-user-light.svg");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        opacity: 0.8;
      }

      .user-name {
        margin: 0 0 0 $UI-size-lg;
      }
    }

    .wrap-user-balance {
      padding-top: $UI-size-lg;

      .caption {
        font-size: $font-caption;
        color: rgba($clr-white, 0.6);
      }

      .wrap-user-amount {
        display: flex;

        .currency {
          font-weight: 600;
          color: rgba($clr-white, 0.8);
        }

        .amount {
          font-weight: 600;
          margin-left: $UI-size-reg;
        }

        .balance-icon {
          background-image: url("./../assets/icon-eye-hidden-light.svg");
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
          height: $UI-size-xl;
          width: $UI-size-xl;
          margin-left: auto;
          cursor: pointer;
          opacity: 0.8;

          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }

  .wrap-menu-al {
    padding: $UI-size-xl 0 $UI-size-xl 0;
    .menu-al {
      padding: $UI-size-lg $UI-size-xxl;
      color: rgba($clr-white, 0.8);
      background-color: rgba($clr-black, 1);

      &:hover {
        color: rgba($clr-white, 1);
      }

      .list-item {
        display: flex;
        cursor: pointer;
      }
    }
  }

  .wrap-menu-al-secondary {
    padding: $UI-size-xl 0 $UI-size-xl 0;
    background-color: rgba($clr-primary, 1);
    border-bottom: $UI-size-basic solid rgba($clr-dark, 0.5);
    .menu-al-secondary {
      background-color: rgba($clr-primary, 1);
      padding: $UI-size-lg $UI-size-xxl;
      color: rgba($clr-white, 0.8);

      &:hover {
        color: rgba($clr-white, 1);
      }

      .list-item {
        display: flex;
        cursor: pointer;
      }
    }
  }

  .wrap-change-language {
    display: flex;
    background-color: rgba($clr-primary, 1);
    padding: $UI-size-lg $UI-size-xxl;
    color: rgba($clr-white, 0.8);
    cursor: pointer;

    &:hover {
      color: rgba($clr-white, 1);
    }

    .flag-icon {
      background-image: url("./../assets/icon-flag-en.svg");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      height: $UI-size-xl;
      width: $UI-size-xl;
      margin-left: auto;
    }
  }

  .redirect {
    background-color: rgba($clr-primary, 1);
    padding: $UI-size-xxl $UI-size-xxl $UI-size-lg $UI-size-xxl; 
    color: rgba($clr-white, 0.8);
    cursor: pointer;

    &:hover {
      color: rgba($clr-white, 1);
    }
  }

  .logout {
    background-color: rgba($clr-primary, 1);
    padding: $UI-size-lg $UI-size-xxl $UI-size-xxxl $UI-size-xxl;
    color: rgba($clr-white, 0.8);
    cursor: pointer;

    &:hover {
      color: rgba($clr-white, 1);
    }
  }
}
</style>
