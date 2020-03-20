<template>
	<div class="">
		<nuxt-link :to=" { name : 'plants-slug', params : { slug : plant.slug }} " v-if="plant.display" class="mb-4 ">
			<img class="w-full h-64 object-cover object-center shadow hover:shadow-xl mb-4 transition duration-300" :src="plant.display.data.path" :alt="plant.display.data.name">
		</nuxt-link>
		<div class="text-center font-light font-rubik text-2xl">
			<nuxt-link :to=" { name : 'plants-slug', params : { slug : plant.slug }} "  class="hover:underline">
				{{ plant.n_vernaculaire}}
			</nuxt-link>
		</div>
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