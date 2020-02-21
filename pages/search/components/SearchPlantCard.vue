<template>
	<div class="p-8 mb-6 bg-white rounded-lg">
		<nuxt-link :to=" { name : 'plant-slug' , params : { slug : plant.slug }} ">
			{{ plant }}
		</nuxt-link>
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