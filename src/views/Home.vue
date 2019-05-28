<template>
  <div>
    <HomeMobile v-if="$store.state.isMobile" />
    <HomeDesktop v-else />
  </div>
</template>

<script>
import HomeDesktop from "@/components/Home-Desktop.vue";
import HomeMobile from "@/components/Home-Mobile.vue";
export default {
  components: { HomeDesktop, HomeMobile }
};
</script>


