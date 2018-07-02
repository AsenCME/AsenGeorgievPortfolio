<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	created() {
		let breakpoint = 950;

		let width = window.innerWidth;
		if (width <= breakpoint) this.$store.commit("setMobileState", true);
		else this.$store.commit("setMobileState", false);
		window.onresize = evt => {
			width = window.innerWidth;
			if (width <= breakpoint) this.$store.commit("setMobileState", true);
			else this.$store.commit("setMobileState", false);
		};
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
	height: 100%;
	overflow: hidden;
}
</style>
