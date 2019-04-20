<template>
  <div class="home">
    <progressive-background :src="require('./../assets/images/background.png')" class="background" />
    <div class="text">
      <div class="f-name">
        <span>asen</span>
      </div>
      <div class="title">
        <span>Portfolio</span>
      </div>
      <div class="s-name">
        <span>georgiev</span>
      </div>
    </div>
    <div class="lines">
      <div class="line line-1"></div>
      <div class="line line-2"></div>
      <div class="line line-3"></div>
      <div class="line line-4"></div>
      <div class="line line-5"></div>
      <div class="line line-6"></div>
    </div>
    <div class="overlay"></div>
    <div class="scroll" @click="transition()">
      <div class="scroll-text">
        <span>s</span>
        <span>c</span>
        <span>r</span>
        <span>o</span>
        <span>l</span>
        <span>l</span>
      </div>
      <div class="scroll-line"></div>
    </div>
    <div class="transition-panel"></div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "home",
  methods: {
    MouseWheelHandler(e) {
      e = window.event || e;
      let delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
      if (delta === -1) this.transition();
    },
    transition() {
      document.querySelector(".transition-panel").classList.add("pull-up");
      setTimeout(() => {
        this.$router.push({ path: "/hub" });
      }, 600);
    }
  },
  created() {
    window.addEventListener("mousewheel", this.MouseWheelHandler, {
      passive: true
    });
    window.addEventListener("DOMMouseWheel", this.MouseWheelHandler, {
      passive: true
    });
  },
  destroyed() {
    window.removeEventListener("mousewheel", this.MouseWheelHandler, {
      passive: true
    });
    window.removeEventListener("DOMMouseWheel", this.MouseWheelHandler, {
      passive: true
    });
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/home.scss";
</style>
