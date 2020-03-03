<template>
	<div class="container py-16 pb-0 ">
		<div class="flex lg:flex-no-wrap py-16 pb-0  items-center justify-between">
			<div class="hidden lg:block w-full lg:w-7/12 -mt-16">
				<img src="@/assets/img/login.svg" alt="" class="w-full">
			</div>
			<div class="w-full lg:w-4/12 flex justify-center">
				<form @submit.prevent="submit" class="py-16 lg:w-full">
					<div class="w-full mb-4">
						<input type="email" 
						class="block w-full rounded-full p-2 px-3 text-sm text-gray-800 border-2" 
						placeholder="Email" v-model="form.email" 
						:class="{ 'border-red-500' : validation.email }">

						<template v-if="validation.email">
							<div class="ml-2 text-xs font-semibold text-red-500">
								{{ validation.email[0] }}
							</div>
						</template>
					</div>

					<div class="w-full mb-6">
						<input type="password" class="block w-full rounded-full p-2 px-3 text-sm text-gray-800 border-2" placeholder="Password" v-model="form.password" 
						:class="{ 'border-red-500' : validation.password}">
						<template v-if="validation.password">
							<div class="ml-2 text-xs font-semibold text-red-500">
								{{ validation.password[0] }}
							</div>
						</template>
					</div>

					<div class="mb-6">
						<button type="submit" 
						class="px-10 py-2 bg-green-700 rounded-full text-xs font-semibold uppercase text-white">
						Login
					</button>
				</div>

				<div class="font-semibold text-sm">
					<nuxt-link :to="{ name: 'auth-register' }" class="text-blue-500">
						Create new account
					</nuxt-link>
				</div>
			</form>
		</div>
	</div>
</div>
</template>
<script>
	export default {
		head () {
			return {
				title : 'Login'
			}
		},
		data () {
			return {
				form : {
					'email' : '',
					'password' : ''
				},
				validation : {}
			}
		},
		methods : {
			async submit() {
				try {
					await this.$auth.loginWith('local', {
						data : this.form
					}) 
					
				} catch (e) {
					if (e.response.status === 422) {
						this.validation = e.response.data.errors
					}
				}
			}
		}
	}
</script>