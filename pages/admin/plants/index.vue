<template>
	<div>
		<div>
			<div class="flex justify-between items-center mb-12">
				<div class="font-rubik text-3xl text-gray-800 font-medium">
					Plantes
				</div>
				<nuxt-link :to="{ name : 'admin-plants-create' }" class="outline-none -mr-2 bg-green-700 text-center p-1 lg:p-2 rounded-full">
					<svg 
					class="fill-current text-white h-6 w-6 "
					xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
					<path d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"/>
				</svg>
			</nuxt-link>
		</div>
	</div>

	<div v-if="plants.data.length">
		<table class="min-w-full">
			<thead>
				<tr>
					<th class="px-2 py-3 text-left"></th>
					<th class="px-5 py-3 text-left">Auteur</th>
					<th class="px-5 py-3 text-left">Famille</th>
					<th class="px-5 py-3 text-left">N vernaculaire</th>
					<th class="px-5 py-3 text-left">N.G latin</th>
					<th class="px-5 py-3 text-left">N.E latin</th>
				</tr>
			</thead>
			<tbody class="bg-white">
				<tr v-for="plant in plants.data">
					<td class="px-2 py-5 border-b-4 border-gray-100 bg-white text-sm">
						<div class="h-4 w-4 rounded-full mx-auto" :class=" plant.is_toxic ? 'bg-red-500' : 'bg-teal-400' "
						></div>
					</td>
					<td class="px-5 py-5 border-b-4 border-gray-100 bg-white text-sm">
						{{ plant.author.data.last_name }}
					</td>
					<td class="px-5 py-5 border-b-4 border-gray-100 bg-white text-sm">
						{{ plant.family }}
					</td>
					<td class="px-5 py-5 border-b-4 border-gray-100 bg-white text-sm">
						{{ plant.n_vernaculaire }}
					</td>
					<td class="px-5 py-5 border-b-4 border-gray-100 bg-white text-sm">
						{{ plant.ng_latin }}
					</td>
					<td class="px-5 py-5 border-b-4 border-gray-100 bg-white text-sm">
						{{ plant.ne_latin }}
					</td>
					<td class="px-5 py-5 border-b-4 border-gray-100 bg-white text-sm">
						<div class="flex items-center justify-between">
							<nuxt-link :to="{ name :'admin-plants-slug-edit', params : { slug : plant.slug } }">
								<svg class="fill-current h-4 w-4 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"/>
								</svg>
							</nuxt-link>
							<a href="#" @click="deletePlant(plant)" class="outline-none">
								<svg class="fill-current h-4 w-4 text-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path d="M0 2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v2H0V2zm1 3h18v13a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5zm6 2v2h6V7H7z"/>
								</svg>
							</a>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
<!-- 		<div class="flex justify-end" v-if="plants.meta">
			<pagination :meta="plants.meta" v-on:pagination:switched="getPlants"/>
		</div> -->
	</div>
</div>
</template>

<script>
	import pagination from '../components/pagination'
	export default {
		layout : 'admin',
		components : {
			pagination
		},
		data () {
			return {
				plants : []
			}
		},

		async asyncData ({app}) {
			let plants = await app.$axios.get('plants')
			return { plants : plants.data}
		},
		methods : {
			async getPlants (page = 1) {
				let plants = await this.$axios.get('plants', {
					params : {
						page : page
					}
				})
				// this.plants = plants.data
			},
			async deletePlant (plant) {
				if ( !window.confirm('Êtes-vous sûr de supprimer cette plante ?')) {
					return
				}
				await this.$axios.delete(`plants/${plant.slug}`)
				this.plants.data = this.plants.data.filter((p) => p.id !== plant.id )		
			}
		}
	}
</script>
