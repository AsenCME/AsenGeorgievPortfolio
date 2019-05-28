<template>
  <div class="projects">

    <!-- Left panel + Numbers -->
    <div class="left-panel hidden">
      <div class="message">scroll</div>
      <div class="numbers">
        <div class="upward hidden" @click="swapProject(1)">
          <i class="material-icons">arrow_upward</i>
        </div>
        <div class="current">
          <div class="text" v-text="currentNumber + 1"></div>
        </div>
        <div class="divider">
        </div>
        <div class="total">
          <div v-text="totalNumber"></div>
        </div>
        <div class="downward hidden" @click="swapProject(-1)">
          <i class="material-icons">arrow_downward</i>
        </div>
      </div>
    </div>

    <!-- Title/Alias -->
    <div class="title">
      <div class="text hidden" v-text="currentProject.title" :style="{'color': currentProject.color}"></div>
      <div class="line hidden"></div>
    </div>

    <!-- View Project Button -->
    <div class="button-wrap">
      <div class="left-line hidden"></div>
      <div class="button concealed" :style="{'border-color': currentProject.color}" @click="viewProject()">
        {{ $t('projects.visitButton') }}
        <i class="material-icons">chevron_right</i>
        <div class="mask" :style="{'background-color': currentProject.color}"></div>
      </div>
      <div class="right-line hidden"></div>

    </div>

    <!-- Main Text + Desc + Line -->
    <div class="main-text">
      <div class="cname">
        <div class="text hidden" v-text="currentProject.name" :style="{'color': currentProject.color}"></div>
      </div>

      <div class="description">
        <div class="line hidden"></div>
        <div class="text hidden" v-text="currentProject.description"></div>
      </div>
    </div>

    <!-- Mockups (images) -->
    <div class="mockup hidden">
      <!-- Shift numbers by one up and also check out projects mobile to adjust class mesten -->
      <progressive-img :class="{invis: currentProject.projectId !== 'CHU001'}" class="image chushka" :src="currentProject.desktopImgPath1" />
      <progressive-img :class="{invis: currentProject.projectId !== 'CHU001'}" class="image chushkas" :src="currentProject.desktopImgPath2" />

      <progressive-img :class="{invis: currentProject.projectId !== 'YUI002'}" class="image" :src="currentProject.desktopImgPath1" />
      <progressive-img :class="{invis: currentProject.projectId !== 'YUI002'}" class="image yuitexs" :src="currentProject.desktopImgPath2" />

      <progressive-img :class="{invis: currentProject.projectId !== 'HOT003'}" class="image hotelup" :src="currentProject.imgPath" />

      <progressive-img :class="{invis: currentProject.projectId !== 'ITS004'}" class="image itschool" :src="currentProject.imgPath" />

      <progressive-img :class="{invis: currentProject.projectId !== 'MES005'}" class="image mesten" :src="currentProject.imgPath" />

      <progressive-img :class="{invis: currentProject.projectId !== 'KOS006'}" class="image kosmos" :src="currentProject.imgPath" />
    </div>

    <!-- Button to go Back -->
    <div class="back-button-wrap">
      <div class="back-button hidden" @click="transitionBack()"></div>
      <div class="back-arrow" @click="transitionBack()">
        <i class="material-icons" @click="transitionBack()">arrow_forward</i>
      </div>
    </div>

    <!-- Background Text -->
    <div class="fancy-text">
      <div v-for="n in rows" :key="n" class="row hidden">
        <span v-for="k in cols" :key="k" v-text="currentProject.name"></span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "projects",
  data() {
    return {
      hasScrolled: false,
      rows: 20,
      cols: 4,
      currentNumber: 0,
      totalNumber: 6,
      projects: this.$store.getters.projects || [],
      currentProject: this.$store.getters.projects[0]
    };
  },
  methods: {
    // Go to Website Function
    viewProject() {
      window.open(this.currentProject.link, "_blank");
    },

    // Transition Function
    transitionBack() {
      document.querySelector(".back-button-wrap").classList.add("trans");
      setTimeout(() => {
        this.$router.push({ path: "/hub" });
      }, 1000);
    },

    // Random Displacement for Background Text
    getRD() {
      for (let i = 1; i < this.rows + 1; i++) {
        let rd = Math.floor(Math.random() * 401) - 200;
        let value = `translateX(${rd}px)`;
        document.querySelector(
          `.row:nth-of-type(${i})`
        ).style.transform = value;
      }
    },

    // One time reveals
    revealPanel() {
      document.querySelector(".left-panel").classList.remove("hidden");
    },
    revealTitle() {
      document.querySelector(".title .line").classList.remove("hidden");
      setTimeout(() => {
        this.slideTitleUp();
      }, 600);
    },

    // Main Text Controls
    revealMainText() {
      document.querySelector(".cname .text").classList.remove("hidden");
      document.querySelector(".description .text").classList.remove("hidden");
      document.querySelector(".description .line").classList.remove("hidden");
    },
    concealMainText() {
      document.querySelector(".cname .text").classList.add("hidden");
      document.querySelector(".description .text").classList.add("hidden");
      document.querySelector(".description .line").classList.add("hidden");
    },

    // View Project Button Controls
    revealButton() {
      document.querySelector(".button").classList.remove("concealed");
      document.querySelector(".left-line").classList.remove("hidden");
      document.querySelector(".right-line").classList.remove("hidden");
    },
    concealButton() {
      document.querySelector(".button").classList.add("concealed");
      document.querySelector(".left-line").classList.add("hidden");
      document.querySelector(".right-line").classList.add("hidden");
    },

    // Title Controls
    slideTitleUp() {
      document.querySelector(".title .text").classList.remove("hidden");
    },
    slideTitleDown() {
      document.querySelector(".title .text").classList.add("hidden");
    },

    // Side Number Controls
    slideCurrentNumberUp() {
      document
        .querySelector(".numbers .current .text")
        .classList.remove("hidden");
    },
    slideCurrentNumberDown() {
      document.querySelector(".numbers .current .text").classList.add("hidden");
    },

    // Image Controls
    slideImageLeft() {
      document.querySelector(".mockup").classList.remove("hidden");
    },
    slideImageRight() {
      document.querySelector(".mockup").classList.add("hidden");
    },

    // Backgound Text Controls
    revealFancyText() {
      this.getRD();
      let items = document.querySelectorAll(".fancy-text .row");
      for (let item of items) {
        item.classList.remove("hidden");
      }
    },
    concealFancyText() {
      let items = document.querySelectorAll(".fancy-text .row");
      for (let item of items) {
        item.classList.add("hidden");
      }
    },

    // Back Button Controls
    revealBackButton() {
      document.querySelector(".back-button").classList.remove("hidden");
    },
    concealBackButton() {
      document.querySelector(".back-button").classList.add("hidden");
    },

    // Arrows Controls
    revealArrows() {
      document.querySelector(".upward").classList.remove("hidden");
      document.querySelector(".downward").classList.remove("hidden");
    },
    concealArrows() {
      document.querySelector(".upward").classList.add("hidden");
      document.querySelector(".downward").classList.add("hidden");
    },

    // MouseWheel Scroll Handler
    MouseWheelHandler(e) {
      // Hide after first time
      document.querySelector(".message").classList.add("remove");

      e = window.event || e;
      let delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
      this.swapProject(delta);
    },

    swapProject(direction) {
      this.concealMainText();
      this.concealButton();
      this.slideTitleDown();
      this.slideCurrentNumberDown();
      this.slideImageRight();
      this.concealFancyText();
      this.concealBackButton();
      this.concealArrows();

      setTimeout(() => {
        this.currentNumber = this.mod(
          this.currentNumber - direction,
          this.totalNumber
        );
        // XXX: hack maybe
        this.currentProject = this.projects[this.currentNumber];

        this.revealArrows();
        this.revealMainText();
        this.revealButton();
        this.slideTitleUp();
        this.slideCurrentNumberUp();
        this.slideImageLeft();
        this.revealFancyText();
        this.revealBackButton();
      }, 1200);
    },

    mod(n, m) {
      return ((n % m) + m) % m;
    },

    showInititalContent() {
      setTimeout(() => {
        this.revealBackButton();
        this.revealArrows();
      }, 2000);
      setTimeout(() => {
        this.slideImageLeft();
      }, 1800);
      setTimeout(() => {
        this.revealTitle();
      }, 1500);
      setTimeout(() => {
        this.revealMainText();
      }, 1200);
      setTimeout(() => {
        this.revealButton();
      }, 1000);
      setTimeout(() => {
        this.revealFancyText();
      }, 500);
      setTimeout(() => {
        this.revealPanel();
      }, 500);
    }
  },
  created() {
    // Animate Everything In
    this.showInititalContent();

    // Set current Project
    this.totalNumber = this.projects.length;
    this.currentProject = this.projects[this.currentNumber];

    // Attach MouseWheel Handler
    window.addEventListener("mousewheel", this.MouseWheelHandler, false);
    window.addEventListener("DOMMouseWheel", this.MouseWheelHandler, false);
  },
  destroyed() {
    // Detach MouseWheel Handler
    window.removeEventListener("mousewheel", this.MouseWheelHandler, false);
    window.removeEventListener("DOMMouseWheel", this.MouseWheelHandler, false);
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/projects.scss";
</style>

