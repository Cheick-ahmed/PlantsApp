<template>
	<div class="container ">
		<div class="mb-16">
			<h2 class="pt-12 tracking-wide text-4xl text-gray-500 font-bold font-montserrat">
				{{ user.first_name }}
			</h2>
			<p>
				Member since {{ joined }}
			</p>
		</div>

		<div class="">
			<h1 class="text-xl text-gray-600 font-medium mb-6 font-header tracking-wide"> 
				({{ plants.length }}) published plant{{ plants.length > 1 ? 's' : ''}} 
			</h1>
			<div class="">
				<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
					<plant-card v-for="plant in plants" :key="plant.id" :plant="plant" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import plantCard from './components/plantCard'
	import moment from 'moment'
	export default {
		head () {
			return {
				title : `plant by ${this.user.first_name}` 
			}
		},
		components : {
			plantCard
		},
		computed : {
			joined () {
				return moment(this.user.joined_at, 'YYYY-MM-DD').format('Do MMMM YYYY');
			}
		},
		data() {
			return {
				user : null,
				plants : null
			}
		},
		async asyncData({app, params, error}) {
			try {
				let user = await app.$axios.get(`users/${params.id}`)
				let plants = await app.$axios.get(`users/${params.id}/plants`)
				return { 
					user : user.data.data,
					plants : plants.data.data
				}
			} catch (e) {
					//
				}
			}
		}
	</script>