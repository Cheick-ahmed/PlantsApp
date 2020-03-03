<template>
	<div class="container py-16"> 
		<div class="flex lg:flex-no-wrap items-center justify-between"> 
			<div class="w-full lg:w-5/12">
				<form @submit.prevent="submit">
					<div class="flex flex-wrap lg:flex-no-wrap">
						<div class="w-full lg:w-6/12 lg:mr-4 mb-4">
							<input type="text" class="block w-full rounded-full p-2 px-3 text-sm text-gray-800 border-2 mb-1" placeholder="First name" 
							v-model="form.first_name"
							:class="{ 'border-red-500' : validation.first_name }">
							<template v-if="validation.first_name">
								<div class="ml-2 text-xs font-semibold text-red-500">
									{{ validation.first_name[0] }}
								</div>
							</template>
						</div>
						<div class="w-full lg:w-6/12 mb-4">
							<input type="text" class="block w-full rounded-full border-2  p-2 px-3 text-sm text-gray-800" placeholder="Last name" v-model="form.last_name" 
							:class="{ 'border-red-500' : validation.last_name }">
							<template v-if="validation.last_name">
								<div class="ml-2 text-xs font-semibold text-red-500">
									{{ validation.first_name[0] }}
								</div>
							</template>
						</div>
					</div>

					<div class="flex flex-wrap lg:flex-no-wrap">
						<div class="w-full lg:w-8/12 lg:mr-4 mb-4">
							<input type="email" class="block w-full rounded-full p-2 px-3 text-sm text-gray-800 border-2" placeholder="Email" 
							v-model="form.email"
							:class="{ 'border-red-500' : validation.email }">
							<template v-if="validation.first_name" >
								<div class="ml-2 text-xs font-semibold text-red-500">
									{{ validation.email[0] }}
								</div>
							</template>
						</div>
						<!-- State select -->
						<div class="w-full lg:w-4/12 mb-4">
							<div class="relative">
								<select class="block appearance-none rounded-full w-full border-2 text-gray-700 p-2 px-3 pr-8 leading-tight focus:outline-none" id="grid-state" v-model="form.status" :class="{ 'border-red-500' : validation.status}">
									<option></option>
									<option>Stagiaire</option>
									<option>Etudiant</option>
								</select>
								<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
									<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
										<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
									</svg>
								</div>
							</div>
							<template v-if="validation.status">
								<div class="ml-2 text-xs font-semibold text-red-500">
									{{ validation.status[0] }}
								</div>
							</template>
						</div>
						<!-- end select -->
					</div>

					<div class="w-full mb-4">
						<input type="password" class="block w-full rounded-full p-2 px-3 text-sm text-gray-800 border-2" placeholder="Password" v-model="form.password" 
						:class="{ 'border-red-500' : validation.password}">
						<template v-if="validation.password" >
							<div class="ml-2 text-xs font-semibold text-red-500">
								{{ validation.password[0] }}
							</div>
						</template>
					</div>
					<div class="w-full mb-6">
						<input type="password" class="block w-full rounded-full border-2  p-2 px-3 text-sm text-gray-800" placeholder="Password confirmation" v-model="form.password_confirmation"
						:class="{ 'border-red-500' : validation.password_confirmation }">
						<template v-if="validation.password_confirmation">
							<div class="ml-2 text-xs font-semibold text-red-500">
								{{ validation.password_confirmation[0] }}
							</div>
						</template>
					</div>

					<div class="mb-6">
						<button type="submit" class="px-10 py-3 bg-green-700 rounded-full text-xs font-semibold uppercase text-white">
							register
						</button>
					</div>

					<div class="font-semibold text-sm">
						Already got an account? <nuxt-link :to="{ name: 'auth-login' }" class="text-blue-500"> Sign in here</nuxt-link>
					</div>
				</form>
			</div>

			<div class="hidden lg:block w-full lg:w-6/12 ">
				<img src="@/assets/img/register.svg" alt="" class="w-full">
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		head () {
			return {
				title : 'Register'
			}
		},
		data () {
			return {
				user  : {},
				form : {
					'first_name' : '',
					'last_name' : '',
					'email' : '',
					'status' : '',
					'password' : '',
					'password_confirmation': ''
				},
				validation : {}
			}
		},
		methods : {
			async submit() {
				try {
					await this.$axios.post('/auth/register', this.form).then((res) => {
						//
					})
				} catch (e) {
					if (e.response.status === 422) {
						this.validation = e.response.data.errors
					}
				}
				this.$router.push({ name : 'auth-dashboard' })
			}
		}
	}
</script>