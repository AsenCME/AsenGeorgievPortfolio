<template>
    <div class="contacts">
        <div class="overlay"></div>

        <div class="back-button">
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
			if (circle.classList.contains("opened")) circle.classList.remove("opened");
			else circle.classList.add("opened");
		},
	},
};
</script>

<style lang="scss" scoped>
@import "@/styles/contacts.scss";
</style>