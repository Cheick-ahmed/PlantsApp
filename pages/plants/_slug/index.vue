<template>
	<div>
		<div class="bg-white py-12">
			<div class="container font-rubik">
				<h1 class="text-4xl text-gray-700 font-medium leading-tight mb-4 flex items-center">
					{{ plant.n_vernaculaire  }}
				</h1>
				<div class="text-gray-700">
					Ajouté par <nuxt-link :to="{name :'author-id',params: {id : plant.author.data.last_name }}" class="text-blue-500">  
						{{ plant.author.data.first_name }} 
					</nuxt-link>
				</div>
			</div>
		</div>
		<div class="container py-16">
			<div class="mb-16">
				<div class="font-medium font-rubik overflow-hidden sm:rounded-lg">
					<div>
						<dl>
							<div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt class="text-sm leading-5 font-medium text-gray-500">
									Famille
								</dt>
								<dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
									{{ plant.family }}
								</dd>
							</div>
							<div class=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt class="text-sm leading-5 font-medium text-gray-500">
									Nom vernaculaire
								</dt>
								<dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
									{{ plant.n_vernaculaire  }}
								</dd>
							</div>
							<div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt class="text-sm leading-5 font-medium text-gray-500">
									Nom genre latin
								</dt>
								<dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
									{{ plant.ng_latin }}
								</dd>
							</div>
							<div class=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt class="text-sm leading-5 font-medium text-gray-500">
									Nom espèce latin
								</dt>
								<dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
									{{ plant.ne_latin }}
								</dd>
							</div>
							<div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt class="text-sm leading-5 font-medium text-gray-500">
									Toxicité
								</dt>
								<dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
									<template v-if="plant.is_toxic">
										Toxique
									</template>
									<template v-else>
										Non toxique
									</template>
								</dd>
							</div>
						</dl>
					</div>
				</div>
			</div>
			<div class="" v-if="plant.display">

				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
					<div v-for="i in plant.display" class="bg-white shadow hover:shadow-xl transition duration-300 ">
						<img :src="i.path" :alt="i.name" class="object-cover object-center  w-full">
					</div>
				</div>
				<div v-if="plant.display" class="mt-16 text-center tracking-wide leading-6 bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
				role="alert">
				<h3>© {{ plant.author.data.first_name }} 2020</h3> 
				<p class="">
					{{ plant.display.length > 1 ? 'Ces' : 'Cette'  }}
					image{{ plant.display.length > 1 ? 's' : ''  }} {{ plant.display.length > 1 ? 'font' : 'fait'  }}
					l'object de droits d'auteurs.
					<br>
					Copie ou reproduction par quels que moyen que ce soit interdis.
				</p>
			</div>
		</div>
	</div>
</div>
</template>

<script>
	export default {
		head () {
			return {
				title : `${this.plant.n_vernaculaire}`
			}
		},
		data () {
			return {
				plant : {}
			}
		},
		async asyncData ({ app, params }) {
			let plant = await app.$axios.get(`plants/${params.slug}`)

			return { plant : plant.data.data }
		}
	}
</script>