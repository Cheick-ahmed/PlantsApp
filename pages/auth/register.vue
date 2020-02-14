<template>
	<div class="container py-16">
		<div class="flex lg:flex-no-wrap items-center justify-between">
			<div class="w-full lg:w-5/12">
				<form>
					<div class="flex flex-wrap lg:flex-no-wrap">
						<div class="w-full lg:w-6/12 lg:mr-4 mb-4">
							<input type="text" class="block w-full rounded-full p-2 px-3 text-sm text-gray-800 border-2" placeholder="First name">
						</div>
						<div class="w-full lg:w-6/12 mb-4">
							<input type="text" class="block w-full rounded-full border-2  p-2 px-3 text-sm text-gray-800" placeholder="Last name">
						</div>
					</div>

					<div class="flex flex-wrap lg:flex-no-wrap">
						<div class="w-full lg:w-8/12 lg:mr-4 mb-4">
							<input type="email" class="block w-full rounded-full p-2 px-3 text-sm text-gray-800 border-2" placeholder="Email">
						</div>
						<!-- State select -->
						<div class="w-full lg:w-4/12 mb-4">
							<div class="relative">
								<select class="block appearance-none rounded-full w-full border-2 text-gray-700 p-2 px-3 pr-8 leading-tight focus:outline-none" id="grid-state">
									<option>Status</option>
									<option>Stagiaire</option>
									<option>Etudiant</option>
								</select>
								<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
									<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
										<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
									</svg>
								</div>
							</div>
						</div>
						<!-- end select -->
					</div>

					<div class="w-full mb-4">
						<input type="text" class="block w-full rounded-full p-2 px-3 text-sm text-gray-800 border-2" placeholder="Password">
					</div>
					<div class="w-full mb-6">
						<input type="password" class="block w-full rounded-full border-2  p-2 px-3 text-sm text-gray-800" placeholder="Password confirmation">
					</div>

					<div class="mb-8">
						<button type="submit" class="px-10 py-3 bg-green-700 rounded-full text-xs font-semibold uppercase text-white">
							register
						</button>
					</div>

					<div class="font-semibold text-sm">
						Already got an account? <nuxt-link :to="{ name: 'auth-login' }" class="text-blue-500"> Sign in here</nuxt-link>
					</div>
				</form>
			</div>

			<div class="w-full lg:w-6/12 ">
				<img src="@/assets/img/register.svg" alt="" class="w-full">
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		//
	}
</script>