<template>
	<div class="px-32 my-6 lg:my-12 lg:mt-8">
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
		<form class="font-rubik">
			<div class="w-full mb-8">
				<label for="familly" class="block mb-2 text-gray-800 text-xs uppercase font-medium">
					Famille
				</label>
				<input type="text" 
				class="block mb-4 w-full shadow rounded p-3 text-sm text-gray-700 focus:shadow-lg transition duration-500"
				>
			</div>

			<div class="w-full mb-8">
				<label for="ng_latin" class="block mb-2 text-gray-800 text-xs uppercase font-medium">
					Nom vernaculaire
				</label>
				<input type="text" 
				class="block mb-4 w-full shadow rounded p-3 text-sm text-gray-700 focus:shadow-lg transition duration-500"
				>
			</div>

			<div class="w-full mb-8">
				<label for="ng_latin" class="block mb-2 text-gray-800 text-xs uppercase font-medium ">
					Nom genre latin
				</label>
				<input type="text" 
				class="block lowercase italic mb-4 w-full shadow rounded p-3 text-sm text-gray-700 focus:shadow-lg transition duration-500"
				>
			</div>

			<div class="w-full mb-8">
				<label for="ng_latin" class="block mb-2 text-gray-800 text-xs uppercase font-medium">
					Nom espece latin
				</label>
				<input type="text" 
				class="block mb-4 lowercase italic w-full shadow rounded p-3 text-sm text-gray-700 focus:shadow-lg transition duration-500"
				>
			</div>

			<div class="w-full mb-8">
				<label for="ng_latin" class="block mb-2 text-gray-800 text-xs uppercase font-medium">
					Nom espece latin
				</label>
				<input type="text" 
				class="block mb-4 w-full shadow rounded p-3 text-sm text-gray-700 focus:shadow-lg transition duration-500"
				>
			</div>
			<div class="mb-8">
				<label for="ng_latin" class="flex flex-no-wrap items-end block mb-2 text-gray-800 text-xs uppercase font-medium">
					<input type="checkbox" class="outline-none mr-2">
					Toxicité
				</label>
			</div>

			<div>
				<button type="submit" class="outline-none px-8 py-2 rounded-full bg-green-700 text-white text-xs uppercase font-medium  hover:bg-green-800 transition duration-500">
					Créer
				</button>
			</div>
		</form>
	</div>

</div>
</template>

<script>
	export default {
		layout : 'admin'
	}
</script>