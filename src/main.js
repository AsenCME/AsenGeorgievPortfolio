import Vue from "vue";
import VueProgressiveImage from "vue-progressive-image";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.use(VueProgressiveImage);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
	document.title = to.meta.title;
	next();
});

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount("#app");
