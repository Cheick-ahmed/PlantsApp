<template>
	<div class="relative">
		<button @click.prevent="show =! show" class="block flex items-center flex-no-wrap focus:outline-none">
			<span class="font-montserrat font-semibold capitalize mr-2">
				{{ $auth.user.last_name }}
			</span>
			<svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-gray-500 h-6 w-6" viewBox="0 0 20 20">
				<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
			</svg>
		</button>
		<div class="mt-4 absolute right-0  shadow-2xl font-rubik" v-if="show">
			<div class="bg-gray-800 rounded-lg py-4 px-6 w-full text-xs uppercase text-white ">
				<nuxt-link :to="{ name : 'dashboard' }" class="flex items-center block py-3">
					<svg xmlns="http://www.w3.org/2000/svg" class="fill-current h-4 w-4 mr-4"  viewBox="0 0 20 20">
						<path d="M0 6l10-6 10 6v2H0V6zm0 12h20v2H0v-2zm2-2h16v2H2v-2zm0-8h4v8H2V8zm6 0h4v8H8V8zm6 0h4v8h-4V8z"/>
					</svg>
					Dashboard
				</nuxt-link>
				<nuxt-link :to="{ name : 'auth-me' }" class="flex items-center block py-3">
					<svg class="fill-current h-4 w-4 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
						<path d="M3.94 6.5L2.22 3.64l1.42-1.42L6.5 3.94c.52-.3 1.1-.54 1.7-.7L9 0h2l.8 3.24c.6.16 1.18.4 1.7.7l2.86-1.72 1.42 1.42-1.72 2.86c.3.52.54 1.1.7 1.7L20 9v2l-3.24.8c-.16.6-.4 1.18-.7 1.7l1.72 2.86-1.42 1.42-2.86-1.72c-.52.3-1.1.54-1.7.7L11 20H9l-.8-3.24c-.6-.16-1.18-.4-1.7-.7l-2.86 1.72-1.42-1.42 1.72-2.86c-.3-.52-.54-1.1-.7-1.7L0 11V9l3.24-.8c.16-.6.4-1.18.7-1.7zM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
					</svg>
					Mon compte
				</nuxt-link>

				<a href="#" @click.prevent="logout" class="flex items-center block py-3">
					<svg class="fill-current text-red-500 h-4 w-4 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M4.16 4.16l1.42 1.42A6.99 6.99 0 0 0 10 18a7 7 0 0 0 4.42-12.42l1.42-1.42a9 9 0 1 1-11.69 0zM9 0h2v8H9V0z"/>
					</svg>
					Déconnexion
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				show : false
			}
		},
		methods : {
			async logout() {
				await this.$auth.logout()
			}
		}
	}
</script>