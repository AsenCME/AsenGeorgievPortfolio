import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Hub from "./views/Hub.vue";
import Projects from "./views/Projects.vue";
import Contacts from "./views/Contacts.vue";
import About from "./views/About.vue";

Vue.use(Router);

export default new Router({
	mode: "history",
	routes: [
		{
			path: "/",
			name: "home",
			component: Home,
			meta: { title: "Asen Georgiev - Portfolio" },
		},
		{
			path: "/hub",
			name: "hub",
			component: Hub,
			meta: { title: "AG | Hub" },
		},
		{
			path: "/contacts",
			name: "contacts",
			component: Contacts,
			meta: { title: "AG | Contacts" },
		},
		{
			path: "/projects",
			name: "projects",
			component: Projects,
			meta: { title: "AG | Projects" },
		},
		{
			path: "/about",
			name: "about",
			component: About,
			meta: { title: "AG | Test Page" },
		},
	],
});
