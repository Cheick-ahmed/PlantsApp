<template>
	<div class="container py-16">
		{{ user }}
	</div>
</template>

<script>
	export default {
		data () {
			return {
				user : null
			}
		},
		async asyncData({app, params}) {
			let user =await app.$axios.get(`admin/users/${params.id}`)
			return { user : user.data.data }
		}
	}
</script>