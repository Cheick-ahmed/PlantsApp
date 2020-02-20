<template>
	<div class="p-8 mb-6 bg-white rounded-lg">
		{{ plant.slug }}
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