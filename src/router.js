import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Hub from "./views/Hub.vue";
import Projects from "./views/Projects.vue";
import Contacts from "./views/Contacts.vue";

Vue.use(Router);

export default new Router({
	mode: "history",
	routes: [
		{
			path: "/",
			name: "home",
			component: Home,
		},
		{
			path: "/hub",
			name: "hub",
			component: Hub,
		},
		{
			path: "/contacts",
			name: "contacts",
			component: Contacts,
		},
		{
			path: "/projects",
			name: "projects",
			component: Projects,
		},
	],
});
