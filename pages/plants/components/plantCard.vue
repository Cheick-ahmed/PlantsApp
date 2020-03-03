<template>
	<div class="mb-6 shadow hover:shadow-xl transition-all duration-500">
		<nuxt-link :to=" { name : 'plants-slug', params : { slug : plant.slug }} ">
			<img class="w-full object-cover object-center w-full" :src="plant.display.data.path" :alt="plant.display.data.name">
		</nuxt-link>
		
		<div class="px-6 py-4 font-montserrat">
			<div class="font-semibold text-xl text-gray-900 mb-2">
				<nuxt-link :to=" { name : 'plants-slug', params : { slug : plant.slug }} ">
					{{ plant.family }} 
				</nuxt-link>
			</div>
			<div class="font-bold tracking-wider italic capitalize mb-2 text-gray-800">
				{{ plant.ng_latin }}
			</div>
			<div class="font-bold italic lowercase mb-2 text-gray-800">
				{{ plant.ne_latin }}
			</div>
		</div>
	<!-- 	<div class="px-6 py-4">
			<span v-if="plant.is_toxic" class="inline-block bg-red-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
		</div> -->
	</div>
</template>

<script>
	export default {
		props : {
			plant : {
				required : true,
				type : Object
			}
		}
	}
</script>