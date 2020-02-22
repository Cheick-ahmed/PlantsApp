<template>
	<div class="container py-16">
		{{ plant }}
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