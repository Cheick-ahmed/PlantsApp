<template>
	<div>
		<div class="flex justify-between items-center mb-12">
			<div class="font-rubik text-3xl text-gray-800 font-medium">
				Utilisateurs
			</div>
			<nuxt-link :to="{ name : '' }" class="-mr-2 bg-green-700 text-center p-1 lg:p-2 rounded-full">
				<svg 
				class="fill-current text-white h-6 w-6 "
				xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
				<path d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"/>
			</svg>
		</nuxt-link>
	</div>

	<div class="grid grid-cols-2 gap-4 mb-12">
		<div class="border-r text-center font-rubik">
			<h3 class=" text-green-700 font-semibold">Nombre d'utilisateurs</h3>
			<div class="text-green-700 font-semibold text-xl">
				<template v-if="users.data.length">
					{{ users.data.length }}
				</template>
				<template v-else>
					0
				</template>
			</div>
		</div>
		<div class=" text-center font-rubik">
			<nuxt-link :to="{ name : 'admin' }" class=" text-red-600 font-semibold">
				Demande(s) en attente
			</nuxt-link>
			<div class="text-red-600 font-semibold text-xl">
				<template v-if="users.meta.not_confirmed ">
					{{ users.meta.not_confirmed.length }}
				</template>
			</div>
		</div>
	</div>
	<template v-if="users.data.length">
		<table class="min-w-full">
			<thead>
				<tr>
					<th class="px-5 py-3"></th>
					<th class="px-5 py-3 text-left">Nom</th>
					<th class="px-5 py-3 text-left">Prénom</th>
					<th class="px-5 py-3 text-left">Status</th>
					<th class="px-5 py-3 text-left">Email</th>
				</tr>
			</thead>
			<tbody class="bg-white">
				<tr v-for="user in users.data">
					<td class="px-2 py-5 border-b-4 border-gray-100 bg-white text-sm">
						<div 
						class="h-4 w-4 rounded-full mx-auto"
						:class=" { 'bg-green-500' : user.is_confirmed === true, 
						'bg-red-500' : user.is_confirmed === false } "
						></div>
					</td>
					<td class="px-5 py-5 border-b-4 border-gray-100 bg-white text-sm">
						{{ user.first_name }}
					</td>
					<td class="px-5 py-5 border-b-4 border-gray-100 bg-white text-sm">
						{{ user.last_name }}
					</td>
					<td class="px-5 py-5 border-b-4 border-gray-100 bg-white text-sm">
						{{ user.status }}
					</td>
					<td class="px-5 py-5 border-b-4 border-gray-100 bg-white text-sm">
						{{ user.email }}
					</td>
				</tr>
			</tbody>
		</table>
	</template>
	<template v-else>
		<nuxt-link :to="{name : 'admin'}"> Demande en attente </nuxt-link>
	</template>

</div>
</template>
<script>
	export default {
		layout : 'admin',
		data () {
			return {
				users : null
			}
		},
		async asyncData ({app}) {
			let users = await app.$axios.get('admin/users')
			return { users : users.data }
		}
	}	
</script>