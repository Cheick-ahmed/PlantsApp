<template>
	<div>
		{{ $auth.user }}
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