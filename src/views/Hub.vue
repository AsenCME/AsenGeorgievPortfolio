<template>
	<div class="hub">
		<div class="overlay"></div>
		<div class="buttons">
			<div class="projects-btn" @click="clickPB()">
				<div>Projects</div>
				<i class="material-icons">chevron_right</i>
				<div class="trans-block"></div>
			</div>
			<div class="contacts-btn" @click="clickCB()">
				<div>Contacts</div>
				<i class="material-icons">chevron_right</i>
				<div class="trans-block"></div>
			</div>
		</div>
		<div class="rects">
			<div class="rect-1"></div>
			<div class="rect-2"></div>
		</div>
		<div class="bio">
			Hi! My name is Asen Georgiev. I am a {{age}}-year-old student from
			<span @click="gotoMap()">Blagoevgrad, Bulgaria</span>. Right now you are looking at the website I made myself. In my virtual protfolio you will find some projects I worked on professionally, one project that got admitted to the final round on the National IT Olympiad in Bulgaria, as well as the first ever project I did. You are also encouraged to check out my contacts page, where you will find different ways to contact me and some of my profiles on social media. Use those contacts to get in touch with me, then we can grab a drink, talk about projects and let's work on one together.
		</div>
	</div>
</template>

<script>
export default {
	name: "hub",
	computed: {
		age() {
			return new Date(new Date() - new Date(2000, 8, 8)).getFullYear() - 1970;
		},
	},
	methods: {
		gotoMap() {
			window.open(
				"https://www.google.com/maps/search/?api=1&query=Blagoevgrad",
				"_blank",
			);
		},
		MouseWheelHandler(e) {
			e = window.event || e;
			let delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
			if (delta === 1) this.transition();
		},
		transition() {
			document.querySelector(".overlay").classList.add("trans");
			setTimeout(() => {
				this.$router.push({ path: "/" });
			}, 600);
		},
		clickPB() {
			document.querySelector(".projects-btn").classList.add("pb-trans");
			setTimeout(() => {
				this.$router.push({ path: "/projects" });
			}, 800);
		},
		clickCB() {
			document.querySelector(".contacts-btn").classList.add("cb-trans");
			setTimeout(() => {
				this.$router.push({ path: "/contacts" });
			}, 800);
		},
	},
	created() {
		window.addEventListener("mousewheel", this.MouseWheelHandler, false);
		window.addEventListener("DOMMouseWheel", this.MouseWheelHandler, false);
	},
	destroyed() {
		window.removeEventListener("mousewheel", this.MouseWheelHandler, false);
		window.removeEventListener("DOMMouseWheel", this.MouseWheelHandler, false);
	},
	beforeCreate() {
		if (this.$store.state.isMobile) this.$router.push({ path: "/" });
	},
};
</script>

<style lang="scss" scoped>
@import "@/styles/hub.scss";
</style>

