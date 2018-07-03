<template>
	<div class="contacts">
		<progressive-background :src="require('./../assets/images/flow.png')" class="background" />
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
			<div class="card-shape facebook hidden" @click="goto('https://www.facebook.com/asen.georgiev.3720', true)">
				<img src="./../assets/icons/Facebook.png">
			</div>
			<div class="card-shape twitter hidden" @click="goto('https://twitter.com/asen_tweet', true)">
				<img src="./../assets/icons/Twitter.png">
			</div>
			<div class="card-shape github hidden" @click="goto('https://github.com/AsenCME' , true)">
				<img src="./../assets/icons/Github.png">
			</div>
			<div class="card-shape gmail hidden" @click="goto('mailto:asen.connor.69@gmail.com?Subject=Hello!', false)">
				<img src="./../assets/icons/Gmail.png">
			</div>
			<div class="prompt">
				<i class="material-icons">expand_less</i>
				click me
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		goto(link, blank) {
			if (blank) window.open(link, "_blank");
			else window.location.href = link;
		},
		transitionBack() {
			document.querySelector(".back-button").classList.add("trans");
			setTimeout(() => {
				this.$router.push({ path: "/hub" });
			}, 1000);
		},
		toggleMenu() {
			document.querySelector(".prompt").classList.add("remove");

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