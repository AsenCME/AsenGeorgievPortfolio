<template>
  <div class="projects">
    <div class="header">{{ $t('projects.pageTitle') }}</div>
    <div class="overlay"></div>
    <div class="back-button" @click="goBack()">
      <i class="material-icons">arrow_forward</i>
    </div>

    <div class="project" v-for="(project, index) of projects" :key="project.link">
      <div class="title" :style="{'color': project.color}">
        <span>{{project.title}}</span>
      </div>
      <div class="image" :class="{'twoPhones': index === 4 || index == 0}">
        <progressive-img :src="project.imgPath" />
      </div>
      <div class="name" :style="{'color': project.color}">{{project.name}}</div>
      <div class="description">
        <div class="line"></div>
        <div class="text">{{project.description}}</div>
      </div>
      <div class="button" @click="visit(project.link)">
        <span>
          <span :style="{'border-color': project.color}">{{ $t('projects.visitButton') }}</span>
        </span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: this.$store.getters.projects
    };
  },
  created() {
    // Handler to maybe fix scroll position for all devices
    let handler = () => {
      if ("scrollingElement" in document) {
        return document.scrollingElement;
      }
      if (navigator.userAgent.indexOf("WebKit") != -1) {
        return document.body;
      }
      return document.documentElement;
    };
    handler().scrollTop = 0;
    document.documentElement.style.backgroundColor = "#fff";
  },
  methods: {
    visit(link) {
      window.open(link, "_blank");
    },
    goBack() {
      document.querySelector(".back-button").classList.add("trans");
      setTimeout(() => {
        this.$router.push({ path: "/" });
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
.projects {
  background-color: #ffffff;
}
.header {
  font-size: 3em;
  font-family: "Montserrat";
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  margin-top: 80px;
  margin-bottom: -40px;
}
.overlay {
  z-index: 10;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #0c1c25;
  opacity: 1;
  transform: scale(1);

  animation: fadeOut 0.6s ease-in-out forwards;
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
.back-button {
  z-index: 1000;
  position: fixed;
  top: 15px;
  right: 15px;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #424242;
  opacity: 1;
  transform: translateX(0%) translateY(0%);

  animation: slideDown 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  i {
    font-size: 25px;
    color: #000;
    opacity: 1;
    transition: 0.3s ease-in-out;
  }
}

.trans {
  animation: back 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  i {
    opacity: 0;
  }
}

@keyframes back {
  0% {
    border-radius: 0px;
    width: 35px;
    height: 35px;
    top: 15px;
    right: 15px;
    background-color: rgba(#000, 0);
  }
  1% {
    border-radius: 50%;
    width: 35px;
    height: 35px;
    top: 15px;
    right: 15px;
    background-color: rgba(#000, 0);
  }
  20% {
    border-radius: 20%;
    width: 35px;
    height: 35px;
    top: 15px;
    right: 15px;
    background-color: rgba(#000, 1);
  }
  100% {
    border-radius: 0;
    width: 120%;
    height: 120%;
    top: -10%;
    right: -10%;
    background-color: rgba(#000, 1);
  }
}

@keyframes slideDown {
  0% {
    opacity: 0.5;
    transform: translateX(150%) translateY(-150%);
  }
  50% {
    opacity: 0.5;
    transform: translateX(150%) translateY(-150%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%) translateY(0%);
  }
}
.project {
  z-index: 1;
  position: relative;
  width: calc(100% - 26px);
  left: 13px;
  margin: 120px 0px;
  border: 1px solid #d1d6dc;

  font-family: "Montserrat";

  .title {
    text-align: center;
    transform: translateY(-50%);
    span {
      font-size: 16px;
      font-family: "Roboto Condensed";
      font-weight: 400;
      padding: 0px 15px;
      background-color: #fff;
    }
  }
  .image {
    width: 120%;
    margin: 20px 0px;
    transform: translateX(10%);

    &.twoPhones {
      width: 60%;
      margin-left: 10%;
    }
  }
  .name {
    font-size: 11vw;
    font-family: "Kurale";
    text-transform: uppercase;
    margin-left: 10px;
  }
  .description {
    .line {
      width: 20vw;
      height: 2px;
      background-color: #000;
      margin: 10px 15px;
    }
    .text {
      font-size: 15px;
      color: #a3adb9;
      line-height: 150%;
      padding: 10px 0px;
      margin-left: 15px;
      width: 90%;
      margin-bottom: 30px;
    }
  }
  .button {
    text-align: center;
    transform: translateY(50%);
    span {
      text-transform: uppercase;
      color: #333333;
      padding: 0px 15px;
      background-color: white;
      span {
        font-family: "Roboto Condensed";
        font-weight: 100;
        font-size: 16px;
        padding: 12px 50px;
        border: 1px solid;
      }
    }
  }
}
</style>

