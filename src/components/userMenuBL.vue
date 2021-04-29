<template>
  <div class="wrap-user-bl">
    <!-- Login form -->
    <div class="login-form">
      <div class="title">Let's get started</div>
      <base-button class="button" :btnLabel="btnLabels[0]" @click="logInOut"></base-button>
      <div class="sign-up-txt">
        <div class="message">Not yet a member?</div>
        <div class="link">Sign up</div>
      </div>
    </div>

    <!-- Menu BL -->
    <div class="wrap-menu-bl" v-for="menu in menuBL" :key="menu">
      <div class="list-item">
        <div>{{ menu.label }}</div>
      </div>
    </div>

    <!-- Change language -->
    <div class="wrap-change-language">
      <div>English</div>
      <div class="flag-icon"></div>
    </div>

    <!-- Redirect -->
    <div class="redirect">Go to CloudCity.com</div>

    <div class="spacer"></div>
  </div>
</template>

<script>
import BaseButton from "../components/common/baseButton.vue"
export default {
  data() {
    return {
      btnLabels: ["LOG IN", "LOG OUT"],
      menuBL: [{ label: "About us" }, { label: "Terms and conditions" }, { label: "FAQs" }, { label: "Contact us" }]
    }
  },

  components: {
    "base-button": BaseButton
  },

  inject: ["logInOut"]
}
</script>

<style lang="scss">
body {
  color: #fff;
}

.wrap-user-bl {
  .login-form {
    display: flex;
    flex-direction: column;
    background-color: rgba($clr-black, 1);
    padding: $UI-size-xxxl $UI-size-kilo-xxxl;
    border-bottom: solid $UI-size-basic rgba($clr-white, 0.1);
    align-items: center;

    .title {
      font-size: $font-h6;
      color: rgba($clr-white, 1);
      text-align: center;
    }

    .button {
      background-color: rgba($clr-white, 1);
      color: rgba($clr-black, 1);
      border-radius: $UI-size-reg;
      padding: $UI-size-lg $UI-size-lg $UI-size-lg $UI-size-lg;
      text-align: center;
      font-size: $font-body2;
      width: $UI-size-giga-xxxl;
      margin: $UI-size-lg 0 $UI-size-xl 0;
    }

    .sign-up-txt {
      display: flex;

      .message {
        color: rgba($clr-white, 0.6);
      }

      .link {
        color: rgba($clr-textLink, 1);
        margin-left: $UI-size-md;
        cursor: pointer;
      }
    }
  }

  .wrap-menu-bl {
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
    padding: $UI-size-lg $UI-size-xxl;
    color: rgba($clr-white, 0.8);
    cursor: pointer;

    &:hover {
      color: rgba($clr-white, 1);
    }
  }

  .spacer {
    height: 100%;
    background-color: rgba($clr-primary, 1);
  }
}
</style>
