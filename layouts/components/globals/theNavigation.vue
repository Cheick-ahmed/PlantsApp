<template>
	<div class="bg-white">
		<div class="container lg:flex justify-between items-center">				
			<div class="flex items-center lg:border-none justify-between font-header">
				<nuxt-link :to="{ name : 'index' }" class="outline-none font-rubik font-bold text-xl py-4 lg:py-6">
					Plants<span class="text-green-700">App</span>
				</nuxt-link>

				<template v-if="$auth.loggedIn">
					<div class="hidden lg:flex">
						<nuxt-link :to="{name:'plants'}" class="block lg:ml-6 lg:px-3 py-2 text-gray-400 hover:text-green-800 font-semibold focus:outline-none" :class="{'text-green-800 font-bold' : this.$route.name === 'plants'}">Browse</nuxt-link>
						<nuxt-link :to="{name:'search'}" class="block lg:ml-3 lg:px-3 py-2 text-gray-400 hover:text-green-800 font-semibold focus:outline-none" :class="{'text-green-800 font-bold' : this.$route.name === 'search'}">Search</nuxt-link>
						<nuxt-link :to="{name:'dashboard'}" class="block lg:ml-3 lg:px-3 py-2 text-gray-400 hover:text-green-800 font-semibold focus:outline-none" :class="{'text-green-800 font-bold' : this.$route.name === 'dashboard'}">Dashboard</nuxt-link>
					</div>
				</template>

				<span class="lg:hidden ml-auto relative flex flex-col justify-center h-8 w-8" @click=" isOpen = !isOpen ">
					<span class="h-1 w-6 rounded bg-green-700 mb-1 transition-all duration-300" :class=" { 'transform rotate-135 absolute right-0' : isOpen } "></span>
					<span class="h-1 w-6 rounded bg-green-700 mb-1 transition-all duration-300" :class=" { 'transform -rotate-135 absolute right-0' : isOpen } "></span>
					<span class="h-1 w-6 rounded bg-green-700" :class=" { 'hidden' : isOpen } "></span>
				</span>	
			</div>

			<div class="py-4 pb-8 lg:py-0 lg:block lg:flex lg:items-center font-rubik transition duration-500" :class="!isOpen ? 'hidden' : 'block' ">
				<template v-if="$auth.loggedIn">
					<div class="flex justify-between">
						<div :class="isOpen ? '' : 'hidden'">
							<nuxt-link :to="{name:'plants'}" class="block lg:ml-6 lg:px-3 py-2 text-gray-400 hover:text-green-800 font-semibold focus:outline-none" :class="{'text-green-800 font-bold' : this.$route.name === 'plants'}">Browse</nuxt-link>
							<nuxt-link :to="{name:'search'}" class="block lg:ml-3 lg:px-3 py-2 text-gray-400 hover:text-green-800 font-semibold focus:outline-none" :class="{'text-green-800 font-bold' : this.$route.name === 'search'}">Search</nuxt-link>
							<nuxt-link :to="{name:'dashboard'}" class="block lg:ml-3 lg:px-3 py-2 text-gray-400 hover:text-green-800 font-semibold focus:outline-none" :class="{'text-green-800 font-bold' : this.$route.name === 'dashboard'}">Dashboard</nuxt-link>
						</div>
						<div class="lg:flex lg:items-center">
							<nuxt-link :to="{name:'auth-me'}" class="block lg:ml-4 lg:px-3 py-2 text-gray-400 hover:text-green-800 font-semibold focus:outline-none" :class="{'text-green-800 font-bold' : this.$route.name === 'auth-me'}">
								{{ $auth.user.first_name }}
							</nuxt-link>
							<a href="#" @click.prevent="logout" class="block lg:ml-4 lg:px-3 py-2 text-gray-400 hover:text-green-800 font-semibold focus:outline-none flex items-center">
								<svg class="fill-current text-red-500 h-4 w-4 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M4.16 4.16l1.42 1.42A6.99 6.99 0 0 0 10 18a7 7 0 0 0 4.42-12.42l1.42-1.42a9 9 0 1 1-11.69 0zM9 0h2v8H9V0z"/>
								</svg>
								Logout
							</a>
						</div>
					</div>
				</template>

				<template v-else>
					<nuxt-link :to="{ name : 'auth-register' }" class="block capitalize mr-4 text-gray-800 mb-2 lg:mb-0 py-2 rounded-lg">
						register
					</nuxt-link>
					<nuxt-link :to="{ name : 'auth-login' }" class="block capitalize lg:px-8 py-2 lg:rounded-full  lg:border lg:border-green-500 text-gray-800 ">
						login
					</nuxt-link>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				isOpen : false,
			}
		},
		methods : {
			async logout() {
				await this.$auth.logout()
			}
		}
	}
</script>