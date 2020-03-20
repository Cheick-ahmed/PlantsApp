<template>
	<div class="container py-16 flex flex-wrap lg:flex-no-wrap justify-between">
		<div class="w-full lg:w-7/12">
			<div>
				<div class="mb-12">
					<form 
					enctype="multipart/form-data"
					novalidate
					class="p-12 border-2 rounded-lg border-gray-400 border-dashed relative flex items-center justify-center mb-4">
					<input type="file" class="absolute h-full w-full top-0 left-0 opacity-0">
					<p>Glissez les image(s) ici</p>
				</form>
			</div>
			<div>
				<form class="font-rubik" @submit.prevent="editPlant">
					<div class="w-full mb-8">
						<label for="familly" class="block mb-2 text-gray-800 text-xs uppercase font-medium"
						:class=" { 'text-red-500' : validation.family }">
						Famille
					</label>
					<input type="text" v-model="plant.family"
					class="block mb-2 w-full shadow rounded p-3 text-sm text-gray-700 focus:shadow-lg transition duration-500"
					:class=" { 'border border-red-500' : validation.family } "
					>
					<template v-if="validation.family">
						<div class="text-xs font-semibold text-red-500">
							{{ validation.family[0] }}
						</div>
					</template>
				</div>

				<div class="w-full mb-8">
					<label for="ng_latin" class="block mb-2 text-gray-800 text-xs uppercase font-medium"
					:class=" { 'text-red-500' : validation.n_vernaculaire }">
					Nom vernaculaire
				</label>
				<input type="text" v-model="plant.n_vernaculaire"
				class="block mb-2 w-full shadow rounded p-3 text-sm text-gray-700 focus:shadow-lg transition duration-500"
				:class=" { 'border border-red-500' : validation.n_vernaculaire } "
				>
				<template v-if="validation.n_vernaculaire">
					<div class="text-xs font-semibold text-red-500">
						{{ validation.n_vernaculaire[0] }}
					</div>
				</template>
			</div>
			<div class="w-full mb-8">
				<label for="ng_latin" class="block mb-2 text-gray-800 text-xs uppercase font-medium"
				:class=" { 'text-red-500' : validation.ng_latin }">
				Nom genre latin
			</label>
			<input type="text" v-model="plant.ng_latin"
			class="block lowercase mb-2 w-full shadow rounded p-3 text-sm text-gray-700 focus:shadow-lg transition duration-500"
			:class=" { 'border  border-red-500' : validation.ng_latin } "
			>
			<template v-if="validation.ng_latin">
				<div class="text-xs font-semibold text-red-500">
					{{ validation.ng_latin[0] }}
				</div>
			</template>
		</div>
		<div class="w-full mb-8">
			<label for="ng_latin" class="block mb-2 text-gray-800 text-xs uppercase font-medium"
			:class=" { 'text-red-500' : validation.ne_latin }">
			Nom espece latin
		</label>
		<input type="text" v-model="plant.ne_latin"
		class="block mb-2 w-full shadow rounded p-3 text-sm text-gray-700 focus:shadow-lg transition duration-500"
		:class=" { 'border border-red-500' : validation.ne_latin } "
		>
		<template v-if="validation.ne_latin">
			<div class="text-xs font-semibold text-red-500">
				{{ validation.ne_latin[0] }}
			</div>
		</template>
	</div>

	<div class="mb-8">
		<label for="ng_latin" class="flex flex-no-wrap items-end block mb-2 text-gray-800 text-xs uppercase font-medium" :class=" { 'text-red-500' : validation.is_toxic } ">
			<input type="checkbox" class="outline-none mr-2" v-model="plant.is_toxic">
			Toxicité
		</label>
	</div>

	<div>
		<button type="submit" class="outline-none px-8 py-2 rounded-full bg-green-700 text-white text-xs uppercase font-medium  hover:bg-green-800 transition duration-500">
			Modifier
		</button>
	</div>
</form>
</div>

</div>
</div>
<div class=" container w-full lg:w-4/12">
	<div v-if="plant.display != null">
		<div class="grid grid-cols-3 lg:grid-cols-1 gap-6">
			<div v-for="image in plant.display">
				<img :src="image.path" :alt="image.name">
			</div>
		</div>
	</div>
</div>
</div>
</template>

<script>
	export default {
		middleware : 'auth',
		head() {
			return {
				title : `Edit ${this.plant.slug}`
			}
		},
		data () {
			return {
				plant : null,
				validation : {},
			}
		},
		async asyncData({app, params}) {
			let plant = await app.$axios.get(`plants/${params.slug}`)
			return { plant : plant.data.data }
		},
		methods : {
			async editPlant() {
				try {
					await this.$axios.patch(`plants/${this.plant.slug}`, this.plant)
					this.$router.push({
						name : 'dashboard'
					})
				} catch (e) {
					this.validation = e.response.data.errors
				}
			}
		}
	}
</script>