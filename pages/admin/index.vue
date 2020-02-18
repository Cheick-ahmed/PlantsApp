<template>
	<div>
		<div class="flex justify-between items-center mb-12">
			<div class="font-rubik text-2xl text-gray-800 font-medium">
				<h3 class="mb-2">Demande{{ users.length > 1 ? 's' : '' }} en attente ({{ users.length }}) </h3>
			</div>
		</div>

		<div class="" v-if="users.length">
			<div class="grid grid-cols-3 gap-4">
				<div v-for="x in users" class="rounded bg-white transition ease-out transition-all duration-1000">
					<div class="px-16 py-4 text-center">
						<span class="font-semibold text-gray-700 ">{{ x.last_name }}</span> 
						{{ x.first_name }}
					</div>
					<div class="border-t-2 flex justify-between">
						<div class="w-1/2 flex items-center border-r-2  justify-center">
							<button @click.prevent="reject(x)">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
								class="fill-current text-red-600 h-4 w-4">
								<path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>
							</svg>
						</button>
					</div>

					<div class="w-1/2 flex items-center justify-center p-4">
						<form @submit.prevent="validate(x)">
							<input type="hidden" v-model="form.not_confirmed">
							<button type="submit">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
								class="fill-current text-teal-500 h-4 w-4">
								<path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
							</svg>
						</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
</template>
<script>
	export default {
		layout : 'admin',
		data () {
			return {
				users : [],
				form : {
					is_confirmed : '',
				}
			}
		},
		async asyncData ({app}) {
			let users = await app.$axios.get('admin')
			return { users : users.data.data}
		},
		methods : {
			async validate (user) {
				try {
					await this.$axios.patch(`admin/users/${user.last_name}`, { data : { 'is_confirmed' : true } })
					this.users = this.users.filter((u) => {
						return u.last_name !== user.last_name 
					})
				} catch (e) {
					console.log(e)
				}
			},
			async reject (user) {
				try {
					await this.$axios.delete(`admin/users/${user.last_name}`)
					this.users = this.users.filter((u) => {
						return u.id !== user.id 
					})
				} catch (e) {
					console.log(e)
				}
			},
		}
	}	
</script>
