import Vue from "vue";
import Vuex from "vuex";
import i18n from "./i18n";
import * as firebase from "firebase/app";
import "firebase/firestore";

Vue.use(Vuex);

export default new Vuex.Store({
	getters: {
		projects: state => (state.locale === "en" ? state.projectsEN : state.projectsBG),
		loadedState: state => state.hasLoaded,
	},
	state: {
		isMobile: false,
		locale: i18n.locale,
		projectsBG: [],
		projectsEN: [],
		hasLoaded: false,
	},
	mutations: {
		setMobileState(state, payload) {
			state.isMobile = payload;
		},
		changeLocale(state, locale) {
			state.locale = locale;
			i18n.locale = locale;
		},
		setProjectsBG(state, projects) {
			state.projectsBG = projects;
		},
		setProjectsEN(state, projects) {
			state.projectsEN = projects;
		},
		setHasLoaded(state, loadedState) {
			state.hasLoaded = loadedState;
		},
	},
	actions: {
		changeLocale(context, locale) {
			context.commit("changeLocale", locale);
		},
		async getAllProjects({ commit }) {
			let enArr = [];
			let bgArr = [];
			let en = await firebase
				.firestore()
				.collection("projectsEN")
				.get()
				.then(snap => {
					snap.forEach(doc => enArr.push(doc.data()));
				});
			let bg = await firebase
				.firestore()
				.collection("projectsBG")
				.get()
				.then(snap => {
					snap.forEach(doc => bgArr.push(doc.data()));
				});
			commit("setProjectsEN", enArr);
			commit("setProjectsBG", bgArr);
			commit("setHasLoaded", true);
		},
	},
});
