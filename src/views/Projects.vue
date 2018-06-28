<template>
	<div class="projects">

		<!-- Left panel + Numbers -->
		<div class="left-panel hidden">
			<div class="numbers">
				<div class="current">
					<div class="text" v-text="currentNumber + 1"></div>
				</div>
				<div class="divider">
				</div>
				<div class="total">
					<div v-text="totalNumber"></div>
				</div>
			</div>
		</div>

		<!-- Title/Alias -->
		<div class="title">
			<div class="text hidden" v-text="currentProject.title"></div>
			<div class="line hidden"></div>
		</div>

		<!-- View Project Button -->
		<div class="button-wrap">
			<div class="left-line hidden"></div>
			<div class="button concealed">
				visit online
				<i class="material-icons">chevron_right</i>
				<div class="mask"></div>
			</div>
			<div class="right-line hidden"></div>

		</div>

		<!-- Main Text + Desc + Line -->
		<div class="main-text">
			<div class="cname">
				<div class="text hidden" v-text="currentProject.name"></div>
			</div>

			<div class="description">
				<div class="line hidden"></div>
				<div class="text hidden" v-text="currentProject.description"></div>
			</div>
		</div>

		<!-- Mockups (images) -->
		<div class="mockup hidden">
			<img :class="{invis: currentNumber !== 0}" src="./../assets/mockups/Yuitex_L.png">
			<img :class="{invis: currentNumber !== 0}" class="yuitexs" src="./../assets/mockups/Yuitex_S.png">

			<img :class="{invis: currentNumber !== 1}" class="hotelup" src="./../assets/mockups/HU_L.png">

			<img :class="{invis: currentNumber !== 2}" class="itschool" src="./../assets/mockups/ITSchool.png">

			<img :class="{invis: currentNumber !== 3}" class="mesten" src="./../assets/mockups/Mesten_D.png">

			<img :class="{invis: currentNumber !== 4}" class="kosmos" src="./../assets/mockups/Kosmos_L.png">
		</div>

		<!-- Button to go Back -->
		<div class="back-button-wrap">
			<div class="back-button hidden" @click="transitionBack()"></div>
			<div class="back-arrow" @click="transitionBack()">
				<i class="material-icons" @click="transitionBack()">arrow_forward</i>
			</div>
		</div>

		<!-- Background Text -->
		<div class="fancy-text">
			<div v-for="n in rows" :key="n" class="row hidden">
				<span v-for="k in cols" :key="k" v-text="currentProject.name"></span>
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
			cols: 4,
			currentNumber: 0,
			totalNumber: 4,
			projects: [
				{
					name: "Yuitex EOOD",
					title: "Clothing Store in Blagoevgrad",
					description: "Yuitex EOOD is a project.",
				},
				{
					name: "HotelUp",
					title: "The first Bulgarian hotel App",
					description: "HotelUp is a project",
				},
				{
					name: "IT'School",
					title: "It's cool to learn from ITSchool",
					description: "IT'School is a project",
				},
				{
					name: "Mesten Inc.",
					title: "Find Local Doctors Quickly",
					description: "Mesten Inc. is a project",
				},
				{
					name: "Kosmos",
					title: "Explore the Solar System",
					description: "Kosmos is a project",
				},
			],
		};
	},
	computed: {
		currentProject() {
			return this.projects[this.currentNumber];
		},
	},
	methods: {
		// Transition Function
		transitionBack() {
			document.querySelector(".back-button-wrap").classList.add("trans");
			setTimeout(() => {
				this.$router.push({ path: "/hub" });
			}, 1500);
		},

		// Random Displacement for Background Text
		getRD() {
			for (let i = 1; i < this.rows + 1; i++) {
				let rd = Math.floor(Math.random() * 401) - 200;
				let value = `translateX(${rd}px)`;
				document.querySelector(`.row:nth-of-type(${i})`).style.transform = value;
			}
		},

		// One time reveals
		revealPanel() {
			document.querySelector(".left-panel").classList.remove("hidden");
		},
		revealTitle() {
			document.querySelector(".title .line").classList.remove("hidden");
			setTimeout(() => {
				this.slideTitleUp();
			}, 600);
		},

		// Main Text Controls
		revealMainText() {
			document.querySelector(".cname .text").classList.remove("hidden");
			document.querySelector(".description .text").classList.remove("hidden");
			document.querySelector(".description .line").classList.remove("hidden");
		},
		concealMainText() {
			document.querySelector(".cname .text").classList.add("hidden");
			document.querySelector(".description .text").classList.add("hidden");
			document.querySelector(".description .line").classList.add("hidden");
		},

		// View Project Button Controls
		revealButton() {
			document.querySelector(".button").classList.remove("concealed");
			document.querySelector(".left-line").classList.remove("hidden");
			document.querySelector(".right-line").classList.remove("hidden");
		},
		concealButton() {
			document.querySelector(".button").classList.add("concealed");
			document.querySelector(".left-line").classList.add("hidden");
			document.querySelector(".right-line").classList.add("hidden");
		},

		// Title Controls
		slideTitleUp() {
			document.querySelector(".title .text").classList.remove("hidden");
		},
		slideTitleDown() {
			document.querySelector(".title .text").classList.add("hidden");
		},

		// Side Number Controls
		slideCurrentNumberUp() {
			document.querySelector(".numbers .current .text").classList.remove("hidden");
		},
		slideCurrentNumberDown() {
			document.querySelector(".numbers .current .text").classList.add("hidden");
		},

		// Image Controls
		slideImageLeft() {
			document.querySelector(".mockup").classList.remove("hidden");
		},
		slideImageRight() {
			document.querySelector(".mockup").classList.add("hidden");
		},

		// Backgound Text Controls
		revealFancyText() {
			this.getRD();
			let items = document.querySelectorAll(".fancy-text .row");
			for (let item of items) {
				item.classList.remove("hidden");
			}
		},
		concealFancyText() {
			let items = document.querySelectorAll(".fancy-text .row");
			for (let item of items) {
				item.classList.add("hidden");
			}
		},

		// Back Button Controls
		revealBackButton() {
			document.querySelector(".back-button").classList.remove("hidden");
		},
		concealBackButton() {
			document.querySelector(".back-button").classList.add("hidden");
		},

		// MouseWheel Scroll Handler
		MouseWheelHandler(e) {
			e = window.event || e;
			let delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
			this.swapProject(delta);
		},

		swapProject(direction) {
			this.concealMainText();
			this.concealButton();
			this.slideTitleDown();
			this.slideCurrentNumberDown();
			this.slideImageRight();
			this.concealFancyText();
			this.concealBackButton();

			setTimeout(() => {
				this.currentNumber = this.mod(this.currentNumber - direction, this.totalNumber);

				this.revealMainText();
				this.revealButton();
				this.slideTitleUp();
				this.slideCurrentNumberUp();
				this.slideImageLeft();
				this.revealFancyText();
				this.revealBackButton();
			}, 1200);
		},

		mod(n, m) {
			return (n % m + m) % m;
		},
	},
	created() {
		// Animate Everything In
		setTimeout(() => {
			this.revealBackButton();
		}, 2000);
		setTimeout(() => {
			this.slideImageLeft();
		}, 1800);
		setTimeout(() => {
			this.revealTitle();
		}, 1500);
		setTimeout(() => {
			this.revealMainText();
		}, 1200);
		setTimeout(() => {
			this.revealButton();
		}, 1000);
		setTimeout(() => {
			this.revealFancyText();
		}, 500);
		setTimeout(() => {
			this.revealPanel();
		}, 500);

		// Set current Project
		this.totalNumber = this.projects.length;
		this.currentProject = this.projects[this.currentNumber];

		// Attach MouseWheel Handler
		window.addEventListener("mousewheel", this.MouseWheelHandler, false);
		window.addEventListener("DOMMouseWheel", this.MouseWheelHandler, false);
	},
	destroyed() {
		// Detach MouseWheel Handler
		window.removeEventListener("mousewheel", this.MouseWheelHandler, false);
		window.removeEventListener("DOMMouseWheel", this.MouseWheelHandler, false);
	},
};
</script>

<style lang="scss" scoped>
@import "@/styles/projects.scss";
</style>

