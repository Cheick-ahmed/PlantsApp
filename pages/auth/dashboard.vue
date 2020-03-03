<template>
	<div class="container font-medium text-gray-800 py-16">
		Welcome {{ $auth.user.first_name }}
	</div>
</template>

<script>
	export default {
		middleware : 'auth',
		head () {
			return {
				title : 'Dashboard'
			}
		}
	}
</script>