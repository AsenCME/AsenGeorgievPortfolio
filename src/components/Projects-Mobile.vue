<template>
    <div class="projects">
        <div class="back-button">
            <i class="material-icons">arrow_forward</i>
        </div>
        <div class="project" v-for="project of projects" :key="project.link">
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
				},
				{
					name: "HotelUp",
					title: "The first Bulgarian hotel App",
					description:
						"HotelUp is an application that facilitates the relationship between hotel customers and hotel administration. Equipped with an admin panel to monitor room bookings and SPA reservations, as well as a Chat system for direct connection to your customers. I participated in the final of the IT Olympiad with this project.",
					color: "#2EBDAB",
					link: "http://hotelup.eu",
				},
				{
					name: "IT'School",
					title: "It's cool to learn from ITSchool",
					description:
						"IT'School is a project, aiming to encourage studying by providing easy to understand online video classes on subjects suh as Physics, Chemistry, Astronomy and Biology. The interface and User Experience is easily approched and understood by children and young students, who are also the target group of this web platform.",
					color: "#8BC34A",
					link: "http://itschool.gimdesign.eu",
				},
				{
					name: "Mesten",
					title: "Find Local Doctors Quickly",
					description:
						"Mesten Inc. is the most convenient way to book a doctors appointment in your city. With two clicks you can select the type of medical help you seek and the town/city/village you desire. You will instantly be presented with contact information for the best professionals in the determined area.",
					color: "#5A9BD5",
					link: "http://mesten.gimdesign.eu",
				},
				{
					name: "Kosmos",
					title: "Explore the Solar System",
					description:
						"Kosmos is the first ever project I designed and made myself. The project was completed in 2014 and its only premise was to teach kids about our Solar System. In the website you can also find a 3D animation that takes you on a tour from the sun to the edge of the Solar System and back. Everything in the website is made solely by me.",
					color: "#D8A03E",
					link: "http://kosmos.egblg.com",
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.back-button {
	position: absolute;
	top: 10px;
	right: 10px;
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid #424242;
	i {
		font-size: 35px;
		color: #000;
	}
}
</style>

