<template>
  <div>
    <div class="banner-image"></div>
    <div class="title-group">
      <div class="title">Lorem ipsum dolor sit amet.</div>
      <div class="sub-heading">Ut scelerisque hendrerit dui, et vestibulum odio efficitur vel.</div>
    </div>
    <div class="wrap-button">
      <base-button class="button" :btnLabel="btnLabel"></base-button>
    </div>
    <div class="login-txt">
      <div class="message">Already have an account?</div>
      <div class="link">Log in</div>
    </div>
  </div>
</template>

<script>
import BaseButton from "../../components/common/baseButton.vue"
export default {
  data() {
    return {
      btnLabel: "SIGN UP"
    }
  },
  components: {
    "base-button": BaseButton
  }
}
</script>

<style lang="scss">
.banner-image {
  background-image: url("../../assets/home/sample-banner.jpeg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  height: $UI-size-ext-002;
  // background-color: $clr-swatchPrimary-400;
  border-radius: $UI-size-reg $UI-size-reg 0 0;
  text-align: center;
  line-height: 18rem;
}

.title-group {
  margin: $UI-size-xl $UI-size-xl 0 $UI-size-xl;
  text-align: center;

  .title {
    font-size: $font-h5;
    font-weight: 600;
  }

  .sub-heading {
    font-size: $font-body1;
    margin-top: $UI-size-reg;
  }
}

.wrap-button {
  display: flex;
  justify-content: center;
  margin: $UI-size-lg;

  .button {
    flex-basis: 20%;
    background-color: $clr-dark;
    color: $clr-white;
    padding: $UI-size-lg;
    border-radius: $UI-size-reg;
    text-align: center;
    min-width: $UI-size-giga-lg;
  }
}

.login-txt {
  display: flex;
  justify-content: center;

  .message {
    color: rgba($clr-black, 0.6);
  }

  .link {
    color: rgba($clr-textLink, 1);
    margin-left: $UI-size-md;
    cursor: pointer;
  }
}
</style>
