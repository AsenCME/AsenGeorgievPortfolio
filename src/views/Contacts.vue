<template>
	<div class="contacts">
		<div class="overlay"></div>

		<div class="back-button ">
			<div class="text" @click="transitionBack()">
				<i class="material-icons">arrow_backwards</i>
				go back
			</div>
			<div class="shape" @click="transitionBack()"></div>
		</div>

		<!-- Middle Circle Menu -->
		<div class="fs-wrap">
			<div class="circle-menu" @click="toggleMenu()">
				<i class="material-icons">close</i>
				<div class="circle"></div>
			</div>
			<div class="card-shape facebook hidden">
				<img src="./../assets/icons/Facebook.png">
			</div>
			<div class="card-shape twitter hidden">
				<img src="./../assets/icons/Twitter.png">
			</div>
			<div class="card-shape github hidden">
				<img src="./../assets/icons/Github.png">
			</div>
			<div class="card-shape gmail hidden">
				<img src="./../assets/icons/Gmail.png">
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		transitionBack() {
			document.querySelector(".back-button").classList.add("trans");
			setTimeout(() => {
				this.$router.push({ path: "/hub" });
			}, 1500);
		},
		toggleMenu() {
			let circle = document.querySelector(".circle-menu");
			let cards = document.querySelectorAll(".card-shape");

			if (circle.classList.contains("opened")) {
				for (let card of cards) {
					card.classList.add("hidden");
				}
				circle.classList.remove("opened");
			} else {
				for (let card of cards) {
					card.classList.remove("hidden");
				}
				circle.classList.add("opened");
			}
		},
	},
};
</script>

<style lang="scss" scoped>
@import "@/styles/contacts.scss";
</style>