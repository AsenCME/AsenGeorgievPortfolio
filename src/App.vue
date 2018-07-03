<template>
	<div id="app" class="desktop">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	methods: {
		checkForHome() {
			let app = document.querySelector("#app");
			let html = document.documentElement;
			let body = document.body;
			if (window.innerWidth <= 950 && (this.$route.path === "/" || this.$route.path === "/projects")) {
				app.classList.remove("desktop");
				body.classList.remove("desktop");
				html.classList.remove("desktop");
				console.log("You are looking at the mobile version of the website.");
			} else {
				app.classList.add("desktop");
				body.classList.add("desktop");
				html.classList.add("desktop");
				console.log("You are you looking at the desktop version of the website.");
			}
		},
	},
	mounted() {
		this.checkForHome();
	},
	created() {
		let breakpoint = 950;

		let width = window.innerWidth;
		if (width <= breakpoint) this.$store.commit("setMobileState", true);
		else this.$store.commit("setMobileState", false);
		window.onresize = evt => {
			width = window.innerWidth;
			if (width <= breakpoint) this.$store.commit("setMobileState", true);
			else this.$store.commit("setMobileState", false);
			this.checkForHome();
		};
	},
	watch: {
		$route(value) {
			this.checkForHome();
		},
	},
};
</script>


<style lang="scss">
#app,
html,
body {
	margin: 0px;
	padding: 0px;
	width: 100%;
	overflow-x: hidden;
}
.desktop {
	height: 100% !important;
	overflow: hidden !important;
}
</style>
