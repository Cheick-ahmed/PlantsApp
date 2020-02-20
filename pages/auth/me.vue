<template>
	<div class="py-16">
		<div v-if="alert.status === true" class="mb-12">
			<alert :status="alert.status" :message="alert.message" />
		</div>

		<div class="flex flex-wrap lg:flex-no-wrap justify-center ">
			<div class="w-full lg:w-6/12">
				<div class="mb-8 lg:mb-12">
					<form class="font-rubik" @submit.prevent="changeProfile">
						<!-- Informations personnelles  -->
						<div class="mb-8 ">
							<h3 class="font-rubik font-medium text-xl lg:text-2xl border-b mb-4 lg:mb-8">
								Informations personnelles
							</h3>
							<!-- First name & Last name  -->
							<div class="flex flex-wrap lg:flex-no-wrap mb-2">
								<div class="w-full lg:w-6/12 lg:mr-2 mb-4">
									<label for="first_name" class="block mb-2 text-gray-500 text-xs uppercase font-medium">
										Prenom
									</label>
									<input type="text" class="block w-full  shadow mb-2 rounded p-3 text-sm text-gray-700 focus:shadow-lg transition duration-500" 
									v-model="profile.form.first_name"
									:class="{ 'border border-red-500' : validation.first_name }">
									<template v-if="validation.first_name">
										<div class="text-red-500 text-sm">
											{{ validation.first_name[0] }}
										</div>
									</template>
								</div>
								<div class="w-full lg:w-6/12 mb-4">
									<label for="last_name" class="block mb-2 text-gray-500 text-xs uppercase font-medium">
										Nom
									</label>
									<input type="text" class="block w-full shadow mb-2 rounded p-3 text-sm text-gray-700 focus:shadow-lg transition duration-500" 
									v-model="profile.form.last_name"
									:class="{ 'border border-red-500' : validation.last_name }">
									<template v-if="validation.last_name">
										<div class="text-sm text-red-500">
											{{ validation.last_name[0] }}
										</div>
									</template>
								</div>
							</div>
							<!-- Email -->
							<div class="w-full">
								<label for="email" class="block mb-2 text-gray-500 text-xs uppercase font-medium">
									Email
								</label>
								<input type="email" class="block w-full shadow mb-2 rounded p-3 text-sm text-gray-700 focus:shadow-lg transition duration-500"
								v-model="profile.form.email"
								:class="{ 'border border-red-500' : validation.email }">
								<template v-if="validation.email">
									<div class="text-red-500 text-sm">
										{{ validation.email[0] }}
									</div>
								</template>
							</div>
						</div>
						<!-- Mot de passe -->
						<div>
							<h3 class="font-rubik font-medium text-2xl border-b mb-8">Mot de passe</h3>
							<div class="w-full mb-6">
								<label for="current_password" class="block mb-2 text-gray-500 text-xs uppercase font-medium">
									Mot de passe actuel
								</label>
								<input type="password" class="block w-full shadow rounded p-3 text-sm text-gray-700 focus:shadow-lg transition duration-500"
								v-model="profile.form.current_password" 
								:class="{ 'border border-red-500' : validation.current_password }">
								<template v-if="validation.current_password">
									<div class="text-red-500 text-sm">
										{{ validation.password[0] }}
									</div>
								</template>
							</div>

							<div class="w-full mb-6">
								<label for="password" class="block mb-2 text-gray-500 text-xs uppercase font-medium">
									Nouveau mot de passe
								</label>
								<input type="password" class="block w-full shadow rounded p-3 text-sm text-gray-700 focus:shadow-lg transition duration-500"
								v-model="profile.form.password" :class="{ 'border border-red-500' : validation.password }">
								<template v-if="validation.password">
									<div class="text-red-500 text-sm">
										{{ validation.password[0] }}
									</div>
								</template>
							</div>
							<!-- Email -->
							<div class="w-full mb-8">
								<label for="password" class="block mb-2 text-gray-500 text-xs uppercase font-medium">
									Confirmez le nouveau mot de passe
								</label>
								<input type="password" 
								class="block mb-4 w-full shadow rounded p-3 text-sm text-gray-700 focus:shadow-lg transition duration-500"
								v-model="profile.form.password_confirmation"
								>
								<template v-if="validation.password_confirmation">
									<div class="text-red-500 text-sm">
										{{ validation.password_confirmation[0] }}
									</div>
								</template>
							</div>
							<div class="">
								<button type="submit" class="outline-none px-8 py-3 rounded-full bg-green-700 text-white text-xs uppercase font-medium  hover:bg-green-800 transition duration-500">
									Mettre à jour
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import alert from '@/components/alert'
	export default {
		components : {
			alert
		},
		data () {
			return {
				alert : {
					status : false,
					message : ''
				},
				validation : {},
				profile : {
					form : {
						first_name : this.$auth.user.first_name,
						last_name : this.$auth.user.last_name,
						email : this.$auth.user.email,
						current_password : '',
						password : '',
						password_confirmation : ''
					}
				}
			}
		},
		methods : {
			async changeProfile () {
				try {
					await this.$axios.$patch(`users/${this.$auth.user.last_name}`, this.profile.form)
					await this.$auth.fetchUser()
					this.alert.status = true
					this.alert.message = 'Account details updated'
				} catch (e) {
					this.validation = e.response.data.errors
				}
				setTimeout(() => {
					this.alert.status = false
				}, 10000)
			},
			changePassword () {
				console.log(this.password.form)
			}
		}
	}
</script>