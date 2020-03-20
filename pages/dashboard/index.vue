<template>
	<div class="font-rubik">
		<div class="container my-10">
			<div class=" flex items-center justify-between">
				<h3 class="text-3xl font-header text-gray-700 font-medium">
					<template v-if="plants.length">
						Plants ({{plants.length}})
					</template>
					<template v-else>
						Pas encore de plante
					</template>
				</h3>
				<nuxt-link :to="{ name : 'plants-create' }" class="py-2 bg-green-600 shadow hover:shadow-lg text-white px-4 rounded transition duration-300">
					+ &nbsp; Add
				</nuxt-link>
			</div>
		</div>

		<div class="container mb-8 lg:mb-16">
			<card v-for="plant in plants" :key="plant.id" :plant="plant" @deleted="deletedPlant(plant)"></card>
		</div>
	</div>
</template>

<script>
	import card from './components/plantCard'
	export default {
		middleware : 'auth',
		head () {
			return {
				title : 'Your dashboard'
			}
		},
		components : {
			card
		},
		data() {
			return {
				plants : null
			}
		},
		methods : {
			deletedPlant(plant) {
				this.plants = this.plants.filter((p) => p.id !== plant.id)
			},
		},
		async asyncData( { app}) {
			let plants = await app.$axios.$get('me/plants')
			return {
				plants : plants.data,
			}
		}
	}
</script>