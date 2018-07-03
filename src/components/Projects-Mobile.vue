<template>
	<div class="projects">
		<div class="overlay"></div>
		<div class="back-button" @click="goBack()">
			<i class="material-icons">arrow_forward</i>
		</div>

		<div class="project" v-for="(project, index) of projects" :key="project.link">
			<div class="title" :style="{'color': project.color}">
				<span>{{project.title}}</span>
			</div>
			<div class="image" :class="{'mesten': index === 3}">
				<progressive-img :src="project.imgPath" />
			</div>
			<div class="name" :style="{'color': project.color}">{{project.name}}</div>
			<div class="description">
				<div class="line"></div>
				<div class="text">{{project.description}}</div>
			</div>
			<div class="button" @click="visit(project.link)">
				<span>
					<span :style="{'border-color': project.color}">visit online</span>
				</span>
			</div>
		</div>

	</div>
</template>

<script>
export default {
	data() {
		return {
			projects: [
				{
					name: "Yuitex EOOD",
					title: "Clothing Store in Blagoevgrad",
					description:
						"Yuitex is a family firm, which  is devoted to completing orders for uniform and work wear. They aim to offer the best prices, quality service and a standart in our choice of materials. Every query will be completed in a short term and their customers will receive their items at the firm store.",
					color: "#bd1111",
					link: "http://yuitex.eu",
					imgPath: require("./../assets/mockups/Yuitex_M.png"),
				},
				{
					name: "HotelUp",
					title: "The first Bulgarian hotel App",
					description:
						"HotelUp is an application that facilitates the relationship between hotel customers and hotel administration. Equipped with an admin panel to monitor room bookings and SPA reservations, as well as a Chat system for direct connection to your customers. I participated in the final of the IT Olympiad with this project.",
					color: "#2EBDAB",
					link: "http://hotelup.eu",
					imgPath: require("./../assets/mockups/HU_L.png"),
				},
				{
					name: "IT'School",
					title: "It's cool to learn from ITSchool",
					description:
						"IT'School is a project, aiming to encourage studying by providing easy to understand online video classes on subjects suh as Physics, Chemistry, Astronomy and Biology. The interface and User Experience is easily approched and understood by children and young students, who are also the target group of this web platform.",
					color: "#8BC34A",
					link: "http://itschool.gimdesign.eu",
					imgPath: require("./../assets/mockups/ITSchool.png"),
				},
				{
					name: "Mesten",
					title: "Find Local Doctors Quickly",
					description:
						"Mesten Inc. is the most convenient way to book a doctors appointment in your city. With two clicks you can select the type of medical help you seek and the town/city/village you desire. You will instantly be presented with contact information for the best professionals in the determined area.",
					color: "#5A9BD5",
					link: "http://mesten.gimdesign.eu",
					imgPath: require("./../assets/mockups/Mesten_D.png"),
				},
				{
					name: "Kosmos",
					title: "Explore the Solar System",
					description:
						"Kosmos is the first ever project I designed and made myself. The project was completed in 2014 and its only premise was to teach kids about our Solar System. In the website you can also find a 3D animation that takes you on a tour from the sun to the edge of the Solar System and back. Everything in the website is made solely by me.",
					color: "#D8A03E",
					link: "http://kosmos.egblg.com",
					imgPath: require("./../assets/mockups/Kosmos_L.png"),
				},
			],
		};
	},
	created() {
		document.documentElement.style.backgroundColor = "#ffffff";
	},
	methods: {
		visit(link) {
			window.open(link, "_blank");
		},
		goBack() {
			document.querySelector(".back-button").classList.add("trans");
			setTimeout(() => {
				this.$router.push({ path: "/" });
			}, 1000);
		},
	},
};
</script>

<style lang="scss" scoped>
.projects {
	background-color: #ffffff;
}
.overlay {
	z-index: 10;
	position: fixed;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	background-color: #0c1c25;
	opacity: 1;
	transform: scale(1);

	animation: fadeOut 0.6s ease-in-out forwards;
}
@keyframes fadeOut {
	0% {
		opacity: 1;
		transform: scale(1);
	}
	99% {
		opacity: 0;
		transform: scale(1);
	}
	100% {
		opacity: 0;
		transform: scale(0);
	}
}
.back-button {
	z-index: 1000;
	position: fixed;
	top: 15px;
	right: 15px;
	width: 35px;
	height: 35px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid #424242;
	opacity: 1;
	transform: translateX(0%) translateY(0%);

	animation: slideDown 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
	i {
		font-size: 25px;
		color: #000;
		opacity: 1;
		transition: 0.3s ease-in-out;
	}
}

.trans {
	animation: back 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
	i {
		opacity: 0;
	}
}

@keyframes back {
	0% {
		width: 35px;
		height: 35px;
		top: 15px;
		right: 15px;
		background-color: rgba(#000, 0);
	}
	50% {
		width: 100%;
		height: 35px;
		top: 15px;
		right: 0px;
		background-color: rgba(#000, 1);
	}
	100% {
		width: 100%;
		height: 100%;
		top: 0px;
		right: 0px;
		background-color: rgba(#000, 1);
	}
}

@keyframes slideDown {
	0% {
		opacity: 0.5;
		transform: translateX(150%) translateY(-150%);
	}
	50% {
		opacity: 0.5;
		transform: translateX(150%) translateY(-150%);
	}
	100% {
		opacity: 1;
		transform: translateX(0%) translateY(0%);
	}
}
.project {
	z-index: 1;
	position: relative;
	width: calc(100% - 26px);
	left: 13px;
	margin: 100px 0px;
	border: 1px solid #d1d6dc;

	font-family: "Montserrat";

	.title {
		text-align: center;
		transform: translateY(-50%);
		span {
			font-size: 16px;
			font-family: "Roboto Condensed";
			font-weight: 400;
			padding: 0px 15px;
			background-color: #fff;
		}
	}
	.image {
		width: 120%;
		margin: 20px 0px;
		transform: translateX(10%);

		&.mesten {
			width: 50%;
			transform: translateX(50%);
		}
	}
	.name {
		font-size: 11vw;
		font-family: "Kurale";
		text-transform: uppercase;
		margin-left: 10px;
	}
	.description {
		.line {
			width: 20vw;
			height: 2px;
			background-color: #000;
			margin: 10px 15px;
		}
		.text {
			font-size: 15px;
			color: #a3adb9;
			line-height: 150%;
			padding: 10px 0px;
			margin-left: 15px;
			width: 90%;
			margin-bottom: 30px;
		}
	}
	.button {
		text-align: center;
		transform: translateY(50%);
		span {
			text-transform: uppercase;
			color: #333333;
			padding: 0px 15px;
			background-color: white;
			span {
				font-family: "Roboto Condensed";
				font-weight: 100;
				font-size: 16px;
				padding: 12px 50px;
				border: 1px solid;
			}
		}
	}
}
</style>

