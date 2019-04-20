<template>
  <div class="hub">
    <div class="lang-switch" @click="toggleLang()" :class="{'bg': $store.state.locale === 'bg'}"></div>
    <div class="overlay"></div>
    <div class="buttons">
      <div class="projects-btn" @click="clickPB()">
        <div>{{ $t('hub.buttons.projects') }}</div>
        <i class="material-icons">chevron_right</i>
        <div class="trans-block"></div>
      </div>
      <div class="contacts-btn" @click="clickCB()">
        <div>{{ $t('hub.buttons.contacts') }}</div>
        <i class="material-icons">chevron_right</i>
        <div class="trans-block"></div>
      </div>
    </div>
    <div class="rects">
      <div class="rect-1"></div>
      <div class="rect-2"></div>
    </div>
    <div class="bio">
      {{ $t('hub.main.intro', {age: age}) }}
      <span @click='gotoMap()'>{{ $t('hub.main.town') }}</span>
      {{ $t('hub.main.rest') }}
    </div>
  </div>
</template>

<script>
export default {
  name: "hub",
  computed: {
    age() {
      return new Date(new Date() - new Date(2000, 8, 8)).getFullYear() - 1970;
    }
  },
  methods: {
    toggleLang() {
      let newLocale = "en";
      if (this.$store.state.locale === "en") newLocale = "bg";
      this.$store.dispatch("changeLocale", newLocale);
    },
    gotoMap() {
      window.open(
        "https://www.google.com/maps/search/?api=1&query=Blagoevgrad",
        "_blank"
      );
    },
    MouseWheelHandler(e) {
      e = window.event || e;
      let delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
      if (delta === 1) this.transition();
    },
    transition() {
      document.querySelector(".overlay").classList.add("trans");
      setTimeout(() => {
        this.$router.push({ path: "/" });
      }, 600);
    },
    clickPB() {
      document.querySelector(".projects-btn").classList.add("pb-trans");
      setTimeout(() => {
        this.$router.push({ path: "/projects" });
      }, 800);
    },
    clickCB() {
      document.querySelector(".contacts-btn").classList.add("cb-trans");
      setTimeout(() => {
        this.$router.push({ path: "/contacts" });
      }, 800);
    }
  },
  created() {
    window.addEventListener("mousewheel", this.MouseWheelHandler, false);
    window.addEventListener("DOMMouseWheel", this.MouseWheelHandler, false);
  },
  destroyed() {
    window.removeEventListener("mousewheel", this.MouseWheelHandler, false);
    window.removeEventListener("DOMMouseWheel", this.MouseWheelHandler, false);
  },
  beforeCreate() {
    if (this.$store.state.isMobile) this.$router.push({ path: "/" });
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/hub.scss";
</style>

