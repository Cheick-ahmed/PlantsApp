<template>
	<div class="container py-16">
		<div class="flex lg:flex-no-wrap items-center justify-between">
			<div class="w-full lg:w-7/12 ">
				<img src="@/assets/img/login.svg" alt="" class="w-full">
			</div>
			<div class="w-full lg:w-4/12">
				<form>
					<div class="w-full mb-4">
						<input type="email" class="block w-full rounded-full p-2 px-3 text-sm text-gray-800 border-2" placeholder="Email">
					</div>

					<div class="w-full mb-4">
						<input type="text" class="block w-full rounded-full p-2 px-3 text-sm text-gray-800 border-2" placeholder="Password">
					</div>

					<div class="mb-8">
						<button type="submit" class="px-10 py-3 bg-green-700 rounded-full text-xs font-semibold uppercase text-white">
							Login
						</button>
					</div>

					<div class="font-semibold text-sm">
						Already got an account? <nuxt-link :to="{ name: 'auth-login' }" class="text-blue-500"> Sign in here</nuxt-link>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		//
	}
</script>