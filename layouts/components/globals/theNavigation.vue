<template>
	<div class="bg-white">
		<div class="container lg:flex justify-between items-center">				
			<div class="flex items-center lg:border-none justify-between font-header">
				<nuxt-link :to="{ name : 'index' }" class="outline-none font-rubik font-bold text-xl py-6">
					Plants<span class="text-green-700">App</span>
				</nuxt-link>
				
				<div class="lg:hidden transition duration-1000">
					<button @click="isOpen = !isOpen" type="button" class="text-gray-900 focus:outline-none transition duration-1000">
						<svg class="fill-current h-6 w-6" viewBox="0 0 20 20">
							<template v-if="!isOpen" >
								<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
							</template>
							<template v-else>
								<path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>
							</template>
						</svg>
					</button>				
				</div>
			</div>

			<div class="py-16 pt-10 lg:py-0 lg:block lg:flex lg:items-center  transition duration-500" :class="!isOpen ? 'hidden' : 'block' ">
				<template v-if="$auth.loggedIn">
					<nuxt-link :to="{ name : 'search' }" class="block text-lg capitalize lg:mr-8 text-gray-800 mb-4 lg:mb-0 py-6 lg:px-4">
						Search
					</nuxt-link>
					<avatar-dropdown />
				</template>

				<template v-else>
					<nuxt-link :to="{ name : 'auth-register' }" 
					class="block capitalize mr-4 text-gray-800 mb-4 lg:mb-0 py-2 rounded-lg">
					register
				</nuxt-link>
				<nuxt-link :to="{ name : 'auth-login' }" 
				class="block capitalize lg:px-8 py-2 lg:rounded-full  lg:border lg:border-green-500 text-gray-800 ">
				login
			</nuxt-link>
		</template>
	</div>
</div>
</div>
</template>

<script>
	import avatarDropdown from './avatarDropdown'
	export default {
		components : {
			avatarDropdown
		},
		data () {
			return {
				isOpen : false,
			}
		}
	}
</script>