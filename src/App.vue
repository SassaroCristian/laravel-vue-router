<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import EventCardComponent from "./components/EventCardComponent.vue";
import axios from 'axios';

export default {
	components: {
		HeaderComponent,
		EventCardComponent
	},
	data() {
		return {
			events: [] // Inizializza lo stato degli eventi
		};
	},
	mounted() {
		axios.get("http://127.0.0.1:8000/api/json-e")
			.then(response => {
				console.log(response);
				this.events = response.data; // Aggiorna lo stato degli eventi
			})
			.catch(error => {
				console.error(error);
			});
	},
	methods: {
		doThings() {
			console.log("App.vue does things");
		}
	}
}
</script>

<template>
	<main>
		<HeaderComponent />
		<!-- Passa gli eventi come prop al componente EventCardComponent -->
		<EventCardComponent :events="events" />
	</main>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>

<style scoped lang="scss">
main {
	padding: 1rem;
}
</style>
