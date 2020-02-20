<template>
	<div class="container py-16 flex flex-wrap lg:flex-no-wrap justify-center">
		<!-- <div class="w-full lg:w-2/12 lg:mr-4 flex justify-center">
			<img src="@/assets/img/profile.svg" alt="" class="h-40 w-40">
		</div> -->
		
		<div class="w-full lg:w-7/12">
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
								<input type="text" class="block w-full shadow rounded p-3 text-sm text-gray-700 focus:shadow-lg transition duration-500" v-model="profile.form.first_name">
							</div>
							<div class="w-full lg:w-6/12 mb-4">
								<label for="last_name" class="block mb-2 text-gray-500 text-xs uppercase font-medium">
									Nom
								</label>
								<input type="text" class="block w-full shadow rounded p-3 text-sm text-gray-700 focus:shadow-lg transition duration-500" v-model="profile.form.last_name">
							</div>
						</div>
						<!-- Email -->
						<div class="w-full">
							<label for="email" class="block mb-2 text-gray-500 text-xs uppercase font-medium">
								Email
							</label>
							<input type="email" class="block w-full shadow rounded p-3 text-sm text-gray-700 focus:shadow-lg transition duration-500"
							v-model="profile.form.email">
						</div>
					</div>
					<div class="">
						<button type="submit" class="outline-none px-8 py-3 rounded-full bg-green-700 text-white text-xs uppercase font-medium  hover:bg-green-800 transition duration-500">
							Enregistrer
						</button>
					</div>
				</form>
			</div>				
			<!-- Mot de passe -->
			<div>
				<h3 class="font-rubik font-medium text-2xl border-b mb-8">Mot de passe</h3>
				<form class="font-rubik" @submit.prevent="changePassword">
					<div class="w-full mb-6">
						<label for="current_password" class="block mb-2 text-gray-500 text-xs uppercase font-medium">
							Mot de passe actuel
						</label>
						<input type="password" class="block w-full shadow rounded p-3 text-sm text-gray-700 focus:shadow-lg transition duration-500"
						v-model="password.form.current_password">
					</div>

					<div class="w-full mb-6">
						<label for="password" class="block mb-2 text-gray-500 text-xs uppercase font-medium">
							Nouveau mot de passe
						</label>
						<input type="password" class="block w-full shadow rounded p-3 text-sm text-gray-700 focus:shadow-lg transition duration-500"
						v-model="password.form.password">
					</div>
					<!-- Email -->
					<div class="w-full mb-8">
						<label for="password" class="block mb-2 text-gray-500 text-xs uppercase font-medium">
							Confirmez le nouveau mot de passe
						</label>
						<input type="password" 
						class="block mb-4 w-full shadow rounded p-3 text-sm text-gray-700 focus:shadow-lg transition duration-500"
						v-model="password.form.password_confirmation"
						>
					</div>
					<div class="">
						<button type="submit" class="outline-none px-8 py-3 rounded-full bg-green-700 text-white text-xs uppercase font-medium  hover:bg-green-800 transition duration-500">
							Changer
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				profile : {
					form : {
						first_name : '',
						last_name : '',
						email : ''
					}
				},
				password : {
					form : {
						current_password : '',
						password : '',
						password_confirmation : ''
					}
				}
			}
		},
		methods : {
			changeProfile () {
				console.log('profile changed')
			},
			changePassword () {
				console.log(this.password.form)
			}
		}
	}
</script>