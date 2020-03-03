<template>
	<div class="container py-10 sm:py-32">
		<div v-if="plants.length">
			<div v-for="plant in plants" class="grid grid-cols-1 sm:grid-cols-3 gap-4">
				<plant-card :plant="plant" />
			</div>
		</div>
		<div v-else class="text-3xl text-gray-800 font-rubik text-center font-semibold">
			0 plants found
		</div>
	</div>
</template>

<script>
	import plantCard from './components/plantCard'
	export default {
		middleware : 'auth',
		head () {
			return {
				title : 'Plants'
			}
		},
		components : {
			plantCard
		},
		data () {
			return {
				plants : null
			}
		},
		async asyncData({app}) {
			let plants = await app.$axios.get('plants')
			return { plants : plants.data.data }
		}
	}	
</script>