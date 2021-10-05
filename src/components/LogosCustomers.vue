<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3">
        <img
          class="logos-customers magic-hover magic-hover__square circle"
          src="./../assets/img/logos/LogoHuawei.svg"
          alt="images logos"
        />
      </div>
      <div class="col-lg-3">
        <img
          class="logos-customers magic-hover magic-hover__square circle"
          src="./../assets/img/logos/SimpleLogo.svg"
          alt="images logos"
        />
      </div>
      <div class="col-lg-3">
        <img
          class="logos-customers magic-hover magic-hover__square circle"
          src="./../assets/img/logos/BagovitLogo.svg"
          alt="images logos"
        />
      </div>
      <div class="col-lg-3">
        <img
          class="logos-customers magic-hover magic-hover__square circle"
          src="./../assets/img/logos/VitalLogo.svg"
          alt="images logos"
        />
      </div>

      <div class="col-lg-3">
        <img
          class="logos-customers magic-hover magic-hover__square circle"
          src="./../assets/img/logos/SerLogo.svg"
          alt="images logos"
        />
      </div>
      <div class="col-lg-3">
        <img
          class="logos-customers magic-hover magic-hover__square circle"
          src="./../assets/img/logos/Yogurisimo.svg"
          alt="images logos"
        />
      </div>
      <div class="col-lg-3">
        <img
          class="logos-customers magic-hover magic-hover__square circle"
          src="./../assets/img/logos/SerenitoLogo.svg"
          alt="images logos"
        />
      </div>
      <div class="col-lg-3">
        <img
          class="logos-customers magic-hover magic-hover__square circle"
          src="./../assets/img/logos/CognitusLogo.svg"
          alt="images logos"
        />
      </div>
      <div class="col-lg-3">
        <img
          class="logos-customers magic-hover magic-hover__square circle"
          src="./../assets/img/logos/RGBLogo.svg"
          alt="images logos"
        />
      </div>
      <div class="col-lg-3">
        <img
          class="logos-customers magic-hover magic-hover__square circle"
          src="./../assets/img/logos/ForbexLogo.svg"
          alt="images logos"
        />
      </div>
      <div class="col-lg-3">
        <img
          class="logos-customers magic-hover magic-hover__square circle"
          src="./../assets/img/logos/FlexCWHLogo.svg"
          alt="images logos"
        />
      </div>
      <div class="col-lg-3">
        <img
          class="logos-customers magic-hover magic-hover__square circle"
          src="./../assets/img/logos/EAILogo.svg"
          alt="images logos"
        />
      </div>
    </div>
  </div>
</template>

<script>
import lax from "lax.js";
export default {
  name: "LogosCustomers",
  mounted() {
    lax.init();

    lax.addDriver("scrollY", function () {
      return window.scrollY;
    });

    const container = document.querySelector(".contenedor-logos");

    lax.addElements(".circle", {
      scrollY: {
        translateX: [
          ["elInY", "elCenterY"],
          [0, "screenWidth/20", "screenWidth"],
          {
            easing: "easeInOutQuart",
          },
        ],
        opacity: [
          ["elInY", "elCenterY"],
          [0, 1, 0],
          {
            easing: "easeInOutCubic",
          },
        ],
      },
    });
  },
};
</script>

<style>

</style>