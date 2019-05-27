import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
	en: {
		hub: {
			main: {
				intro: "Hi! My name is Asen Georgiev. I am a {age}-year-old student from ",
				town: "Blagoevgrad, Bulgaria.",
				rest:
					"Right now you are looking at the website I made myself. In my virtual portfolio you will find some projects I worked on professionally, one project that got admitted to the final round on the National IT Olympiad in Bulgaria, as well as the first ever project I did.You are also encouraged to check out my contacts page, where you will find different ways to contact me and some of my profiles on social media. Use those contacts to get in touch with me, then we can grab a drink, talk about projects and let's work on one together.",
			},
			buttons: {
				contacts: "contacts",
				projects: "projects",
			},
		},
		contacts: {
			backButton: "go back",
			prompt: "click me",
		},
		projects: {
			visitButton: "visit online",
			pageTitle: "Projects",
		},
	},
	bg: {
		hub: {
			main: {
				intro: "Здравей! Аз съм Асен Георгиев, {age}-годишен студент от ",
				town: "Благоевград, България.",
				rest:
					"Сайтът, който гледаш сега, е направен изцяло от мен. В това мое виртуално портфолио ще намериш част от проектите, по които съм работил професионално, един проект, който достигна до националното ниво на олимпиадата по ИТ, както и първия сайт, който някога направих. Също така те каня да разгледаш страницата с контакти, където ще намериш различни начини да се свържеш с мен, както и мои профили в социални мрежи. Свържи се с мен, след това може да пийнем по кефе, да поговорим за проекти и да работим по някой такъв заедно.",
			},
			buttons: {
				contacts: "контакти",
				projects: "проекти",
			},
		},
		contacts: {
			backButton: "назад",
			prompt: "кликни",
		},
		projects: {
			visitButton: "посети онлайн",
			pageTitle: "проекти",
		},
	},
};

const i18n = new VueI18n({
	locale: "en",
	fallbackLocale: "en",
	messages,
});

export default i18n;
