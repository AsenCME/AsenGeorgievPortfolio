<template>
  <div class="overall">
    <div class="overlay"></div>
    <div class="home">
      <progressive-background :src="require('./../assets/images/background-mobile.png')" class="background" />
      <progressive-background :src="require('./../assets/images/lines.png')" class="lines" />
      <div class="text">
        <div class="fname">asen</div>
        <div class="sname">georgiev</div>
        <div class="alias">Portfolio</div>
      </div>
      <div class="scroll" @click="scrollDown()">
        scroll
        <div class="line"></div>
      </div>

      <div class="lang-switch" @click="toggleLang()" :class="{'bg': $store.state.locale === 'bg'}"></div>
    </div>

    <div class="hub">
      <!-- Lang Switch Could go here -->
      <progressive-background :src="require('./../assets/images/hub-background.png')" class="background" />
      <div class="bio">
        {{ $t('hub.main.intro', {age: age}) }}
        <span @click='gotoMap()'>{{ $t('hub.main.town') }}</span>
        {{ $t('hub.main.rest') }}
      </div>
      <div class="buttons">
        <div class="button" @click="goto('/projects')">
          <i class="material-icons">chevron_left</i>
          {{ $t('hub.buttons.projects') }}
        </div>
        <div class="button" @click="goto('/contacts')">
          {{ $t('hub.buttons.contacts') }}
          <i class="material-icons">chevron_right</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    age() {
      return new Date(new Date() - new Date(2000, 8, 8)).getFullYear() - 1970;
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    toggleLang() {
      let newLocale = "en";
      if (this.$store.state.locale === "en") newLocale = "bg";
      this.$store.dispatch("changeLocale", newLocale);
    },
    goto(link) {
      document.documentElement.style.backgroundColor = "#0c1c25";
      if (link === "/contacts") {
        document.querySelector(".overall").classList.add("trans");
      } else {
        document.querySelector(".overall").classList.add("trans-right");
      }
      setTimeout(() => {
        this.$router.push({ path: link });
      }, 600);
    },
    gotoMap() {
      window.open(
        "https://www.google.com/maps/search/?api=1&query=Blagoevgrad",
        "_blank"
      );
    },
    scrollDown() {
      let start = 0;
      let change = window.innerWidth;
      let currentTime = 0;
      let increment = 2;
      let duration = 2000;

      let animate = () => {
        currentTime += increment;
        let val = this.easeInOutQuad(currentTime, start, change, duration);
        document.documentElement.scrollTop += val;
        document.body.scrollTop += val;
        if (currentTime <= duration / 4) {
          setTimeout(animate, increment);
        }
      };

      animate();
    },
    easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }
  }
};
</script>

<style lang="scss" scoped>
.overlay {
  z-index: 100;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 1;
  transform: scale(1);

  animation: fadeOut 0.5s ease-in-out forwards;
}
@keyframes fadeOut {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  99% {
    opacity: 0;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0);
  }
}

.overall {
  background-color: #000000;
  transform: translateX(0%);
  transition: 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.trans {
  transform: translateX(-120%);
}
.trans-right {
  transform: translateX(120%);
}

// Home Part //
.home {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.background,
.lines {
  z-index: 0;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  background-size: cover;
  background-position: center;
}
.lines {
  position: absolute;
}

.background {
  opacity: 0;
  animation: fadeIn 1s ease-in-out forwards;
}
.lines {
  opacity: 0;
  transform: scale(1);
  animation: scaleIn 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) 0.7s forwards;
}

.text {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: 0;
  animation: fadeIn 1s ease-in-out 1.5s forwards;
  .fname {
    font-family: "Monoton";
    color: #fff;
    text-transform: uppercase;
    font-size: 15vh;
    line-height: 12vh;
  }
  .sname {
    font-family: "Montserrat";
    font-weight: 500;
    color: #b2b2b2;
    text-transform: uppercase;
    font-size: 8.5vh;
    line-height: 8vh;
  }
  .alias {
    font-family: "Montserrat";
    font-weight: 100;
    color: #fff;
    font-size: 5vh;
    align-self: flex-end;
    margin-right: 10px;
  }
}

.scroll {
  position: absolute;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Montserrat";
  font-weight: 300;
  text-transform: uppercase;
  font-size: 2vh;
  color: white;

  opacity: 0.6;
  transform: translateY(120%);
  animation: slideInUp 1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.7s forwards;
  .line {
    width: 1px;
    height: 70px;
    background-color: white;
    margin-top: 5px;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes slideInUp {
  from {
    opacity: 0.6;
    transform: translateY(120%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
}

// Hub Part //
.hub {
  background-color: #303030;
  position: relative;
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.bio {
  position: absolute;
  color: white;
  font-family: "Montserrat";
  font-weight: 500;
  width: 80%;
  font-size: 2.7vh;
  margin-top: -5vh;
  span {
    font-weight: 600;
    text-decoration: underline;
  }
}

.buttons {
  position: absolute;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  .button {
    display: flex;
    align-items: center;
    width: 50vw;
    background: #c4c4c4;
    font-family: "Montserrat";
    font-weight: 500;
    color: #000;
    padding: 20px 0px;
    text-transform: uppercase;
    font-size: 2.5vh;
    justify-content: center;
    i {
      font-size: 4vh;
      color: #000;
    }
    &:nth-of-type(1) {
      border-right: 0.5px solid #ababab;
      padding-right: 20px;
    }
    &:nth-of-type(2) {
      border-left: 0.5px solid #ababab;
      padding-left: 20px;
    }
  }
}

// Lang Switch //
.lang-switch {
  z-index: 10;
  bottom: 15px;
  right: 15px;
  border-radius: 2px;
  height: 35px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  text-transform: uppercase;
  font-size: 16px;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0px 0px 0px 0px #000;
  transition: 0.1s ease-in-out;
  background-image: url("./../assets/flags/bg-flag.png");
  background-position: center;
  background-size: cover;

  &:hover {
    box-shadow: 0px 12px 10px -8px #000;
    transform: translateY(-2px);
  }
}
.bg {
  background-image: url("./../assets/flags/en-flag.png");
}
</style>
