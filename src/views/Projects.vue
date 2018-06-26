<template>
    <div class="projects">
        <div class="fancy-text">
            <div v-for="n in rows" :key="n" class="row">
                <span v-for="k in cols" :key="k">yuitex eood</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	name: "projects",
	data() {
		return {
			rows: 20,
			cols: 3,
		};
	},
	methods: {
		getRD() {
			for (let i = 1; i < this.rows + 1; i++) {
				let rd = Math.floor(Math.random() * 401) - 200;
				let value = `translateX(${rd}px)`;
				document.querySelector(`.row:nth-of-type(${i})`).style.transform = value;
			}
		},
	},
	created() {
		setTimeout(() => {
			this.getRD();
		}, 2000);
	},
};
</script>

<style lang="scss" scoped>
@import "@/styles/projects.scss";
</style>

