<template>
	<div>
		<ProjectsMobile v-if="$store.state.isMobile" />
		<ProjectsDesktop v-else />
	</div>
</template>

<script>
import ProjectsDesktop from "@/components/Projects-Desktop.vue";
import ProjectsMobile from "@/components/Projects-Mobile.vue";
export default {
	name: "projects",
	components: {
		ProjectsDesktop,
		ProjectsMobile,
	},
};
</script>

