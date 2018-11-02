import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const projects = [
	{
		name: "Chushka EOOD",
		title: "Restaurant in Blagoevgrad",
		description:
			"Chushka is not just a spot in town where you can eat. This is a remarkable place with friendly staff where you can enjoy fresh, healthy cooked and absolutely delicious food. The products we use are fresh and carefully selected to give you the best experience and joy of tasting the food.",
		color: "#0B9444",
		link: "http://chushka.eu",
		imgPath: require("./assets/mockups/Chushka_T.png"),
	},
	{
		name: "Yuitex EOOD",
		title: "Clothing Store in Blagoevgrad",
		description:
			"Yuitex is a family firm, which  is devoted to completing orders for uniform and work wear. They aim to offer the best prices, quality service and a standart in our choice of materials. Every query will be completed in a short term and their customers will receive their items at the firm store.",
		color: "#BD1111",
		link: "http://yuitex.eu",
		imgPath: require("./assets/mockups/Yuitex_M.png"),
	},
	{
		name: "HotelUp",
		title: "The first Bulgarian hotel App",
		description:
			"HotelUp is an application that facilitates the relationship between hotel customers and hotel administration. Equipped with an admin panel to monitor room bookings and SPA reservations, as well as a Chat system for direct connection to your customers. I participated in the final of the IT Olympiad with this project.",
		color: "#2EBDAB",
		link: "http://hotelup.eu",
		imgPath: require("./assets/mockups/HU_L.png"),
	},
	{
		name: "IT'School",
		title: "It's cool to learn from ITSchool",
		description:
			"IT'School is a project, aiming to encourage studying by providing easy to understand online video classes on subjects suh as Physics, Chemistry, Astronomy and Biology. The interface and User Experience is easily approched and understood by children and young students, who are also the target group of this web platform.",
		color: "#8BC34A",
		link: "http://itschool.gimdesign.eu",
		imgPath: require("./assets/mockups/ITSchool_T.png"),
	},
	{
		name: "Mesten",
		title: "Find Local Doctors Quickly",
		description:
			"Mesten Inc. is the most convenient way to book a doctors appointment in your city. With two clicks you can select the type of medical help you seek and the town/city/village you desire. You will instantly be presented with contact information for the best professionals in the determined area.",
		color: "#5A9BD5",
		link: "http://mesten.gimdesign.eu",
		imgPath: require("./assets/mockups/Mesten_D.png"),
	},
	{
		name: "Kosmos",
		title: "Explore the Solar System",
		description:
			"Kosmos is the first ever project I designed and made myself. The project was completed in 2014 and its only premise was to teach kids about our Solar System. In the website you can also find a 3D animation that takes you on a tour from the sun to the edge of the Solar System and back. Everything in the website is made solely by me.",
		color: "#D8A03E",
		link: "http://kosmos.egblg.com",
		imgPath: require("./assets/mockups/Kosmos_L.png"),
	},
];

export default new Vuex.Store({
	state: {
		isMobile: false,
		projects,
	},
	mutations: {
		setMobileState(state, payload) {
			state.isMobile = payload;
		},
	},
	actions: {},
});
