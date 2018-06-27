<template>
	<div class="projects" @click="swapProject()">
		<div class="left-panel hidden">
			<div class="numbers">
				<div class="current">
					<div class="text">{{currentNumber + 1}}</div>
				</div>
				<div class="divider">
				</div>
				<div class="total">
					<div>{{totalNumber}}</div>
				</div>
			</div>
		</div>
		<div class="title">
			<div class="text hidden">Clothing Store in Blagoevgrad</div>
			<div class="line hidden"></div>
		</div>
		<div class="button-wrap">
			<div class="left-line hidden"></div>
			<div class="button concealed">
				visit online
				<i class="material-icons">chevron_right</i>
				<div class="mask"></div>
			</div>
			<div class="right-line hidden"></div>

		</div>
		<div class="main-text">
			<div class="cname">
				<div class="text hidden">Yuitex EOOD</div>
			</div>

			<div class="description">
				<div class="line hidden"></div>
				<div class="text hidden">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum.</div>
			</div>
		</div>

		<div class="mockup hidden">
			<img src="./../assets/mockups/Yuitex_L.png">
			<img class="secondary" src="./../assets/mockups/Yuitex_S.png">
		</div>
		<div class="back-button"></div>

		<div class="fancy-text">
			<div v-for="n in rows" :key="n" class="row hidden">
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
			cols: 4,
			currentNumber: 0,
			totalNumber: 4,
			currentProject: {},
			projects: [{}, {}, {}, {}],
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
		revealPanel() {
			document.querySelector(".left-panel").classList.remove("hidden");
		},
		revealTitle() {
			document.querySelector(".title .line").classList.remove("hidden");
			setTimeout(() => {
				this.slideTitleUp();
			}, 600);
		},

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

		slideTitleUp() {
			document.querySelector(".title .text").classList.remove("hidden");
		},
		slideTitleDown() {
			document.querySelector(".title .text").classList.add("hidden");
		},

		slideCurrentNumberUp() {
			document.querySelector(".numbers .current .text").classList.remove("hidden");
		},
		slideCurrentNumberDown() {
			document.querySelector(".numbers .current .text").classList.add("hidden");
		},

		slideImageLeft() {
			document.querySelector(".mockup").classList.remove("hidden");
		},
		slideImageRight() {
			document.querySelector(".mockup").classList.add("hidden");
		},

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

		swapProject() {
			this.concealMainText();
			this.concealButton();
			this.slideTitleDown();
			this.slideCurrentNumberDown();
			this.slideImageRight();
			this.concealFancyText();

			// XXX: Do the swap

			setTimeout(() => {
				this.revealMainText();
				this.revealButton();
				this.slideTitleUp();
				this.slideCurrentNumberUp();
				this.slideImageLeft();
				this.revealFancyText();
			}, 1500);
		},
	},
	created() {
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

		this.totalNumber = this.projects.length;
	},
};
</script>

<style lang="scss" scoped>
@import "@/styles/projects.scss";
</style>

