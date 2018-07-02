import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		isMobile: false,
	},
	mutations: {
		setMobileState(state, payload) {
			state.isMobile = payload;
		},
	},
	actions: {},
});
