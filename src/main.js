import Vue from "vue";
import VueProgressiveImage from "vue-progressive-image";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
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
	i18n,
	render: h => h(App),
}).$mount("#app");
