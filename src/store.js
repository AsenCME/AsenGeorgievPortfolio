import Vue from "vue";
import Vuex from "vuex";
import i18n from "./i18n";
import projects from "./data/projects";

Vue.use(Vuex);

export default new Vuex.Store({
	getters: {
		projects: state => (state.locale === "en" ? state.projectsEN : state.projectsBG),
		allImages: state =>
			state.projectsEN.map(el => {
				return {
					imgId: el.projectId,
					standard: el.imgPath,
					desktopBig: el.desktopImgPath1,
					desktopSmall: el.desktopImgPath2,
					class1: el.class1,
					class2: el.class2,
				};
			}),
	},
	state: {
		isMobile: false,
		locale: i18n.locale,
		projectsBG: projects.projectsBG,
		projectsEN: projects.projectsEN,
	},
	mutations: {
		setMobileState(state, payload) {
			state.isMobile = payload;
		},
		changeLocale(state, locale) {
			state.locale = locale;
			i18n.locale = locale;
		},
	},
	actions: {
		changeLocale(context, locale) {
			context.commit("changeLocale", locale);
		},
	},
});
