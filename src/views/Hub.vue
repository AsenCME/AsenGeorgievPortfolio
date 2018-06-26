<template>
	<div class="hub">
		<div class="overlay"></div>
		<div class="buttons">
			<div class="projects-btn" @click="clickPB()">
				<div>Projects</div>
				<img src="./../assets/chev_right.png">
				<div class="trans-block"></div>
			</div>
			<div class="contacts-btn" @click="clickCB()">
				<div>Contacts</div>
				<img src="./../assets/chev_right.png">
				<div class="trans-block"></div>
			</div>
		</div>
		<div class="rects">
			<div class="rect-1"></div>
			<div class="rect-2"></div>
		</div>
		<div class="bio">
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
		</div>

	</div>
</template>

<script>
export default {
	name: "hub",
	methods: {
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
			}, 2000);
		},
		clickCB() {
			document.querySelector(".contacts-btn").classList.add("cb-trans");
			setTimeout(() => {
				this.$router.push({ path: "/contacts" });
			}, 2000);
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
};
</script>

<style lang="scss" scoped>
@import "@/styles/hub.scss";
</style>

