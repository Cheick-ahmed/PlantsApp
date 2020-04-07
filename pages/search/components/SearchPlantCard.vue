<template>
	<div class="mb-6 border-b transition-all duration-500">
		<div class="py-6 font-montserrat lg:flex lg:items-center lg:justify-between">
			<div class="flex-1 min-w-0">
				<nuxt-link :to="{name : 'plants-slug', params : { slug : plant.slug }}" class="text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
					{{ plant.n_vernaculaire }}
				</nuxt-link>
				<div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap">
					<div class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mr-6">
						<svg class="flex-shrink-0 mr-2 h-4 w-4 fill-current text-red-500" :class="isToxic ? 'text-red-500' : 'text-green-500'" viewBox="0 0 20 20">
							<path d="M0 10a10 10 0 1 1 20 0 10 10 0 0 1-20 0zm16.32-4.9L5.09 16.31A8 8 0 0 0 16.32 5.09zm-1.41-1.42A8 8 0 0 0 3.68 14.91L14.91 3.68z"/>
						</svg>
						{{ formattedToxic }}
					</div>
				</div>
			</div>
			<div class="mt-5 flex lg:mt-0 lg:ml-4">
				<nuxt-link :to=" { name : 'plants-slug-edit', params : { slug : plant.slug } } " class="hidden sm:block shadow-sm rounded-md" v-if="isOwner">
					<button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out">
						<svg class="-ml-1 mr-2 h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
							<path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
						</svg>
						Edit
					</button>
				</nuxt-link>

				<nuxt-link :to=" { name : 'plants-slug', params : { slug : plant.slug } } " class="hidden sm:block ml-3 shadow-sm rounded-md">
					<button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out">
						<svg class="-ml-1 mr-2 h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"/>
						</svg>
						View
					</button>
				</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		middleware : 'auth',
		head () {
			return {
				title : 'Search'
			}
		},
		props : {
			plant : {
				required : true,
				type : Object
			}
		},
		computed : {
			isOwner () {
				return this.plant.author.data.first_name === this.$auth.user.first_name
			},
			isToxic () {
				return this.plant.is_toxic 
			},
			formattedToxic () {
				return this.plant.is_toxic ? 'Toxique' : 'Non toxique'
			}
		}
	}
</script>