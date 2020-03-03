<template>
	<div class="container py-10 sm:py-32">
		<div v-if="plants">
			<div v-for="plant in plants" class="grid grid-cols-1 sm:grid-cols-3 gap-4">
				<plant-card :plant="plant" />
			</div>
		</div>
		<div v-else>
			0 plant found
		</div>
	</div>
</template>

<script>
	import plantCard from './components/plantCard'
	export default {
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