<template>
	<div class="bg-white ">
		<nav class="container flex items-center justify-between h-20">
			<div class="font-rubik font-bold text-xl">
				<nuxt-link :to="{ name : 'index' }" class="outline-none">
					Plants<span class="text-green-700">App</span>
				</nuxt-link>
			</div>

			<div class="">
				<template v-if="!loggedIn">
					<nuxt-link :to="{ name : 'auth-register' }" class="capitalize mr-4 text-gray-800">
						register
					</nuxt-link>
					<nuxt-link :to="{ name : 'auth-login' }" class="capitalize px-8 py-2 rounded-full border border-green-500 text-gray-800">
						login
					</nuxt-link>
				</template>
				<template v-else>
					<avatar-dropdown />
				</template>
			</div>
		</nav>
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
				loggedIn : false ,
			}
		}
	}
</script>