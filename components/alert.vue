<template>
	<div>
		<template v-if="status">
			<div class="flex justify-center items-center transition-all duration-500" >
				<div class="flex items-center justify-between w-full lg:w-8/12 bg-green-200 border-l-4  border-green-500 text-green-700 p-4" role="alert">
					<p> {{ message }} </p>
				</div>
			</div>
		</template>
	</div>
	
</template>

<script>
	export default {
		props : {
			status : {
				required : true,
				type : Boolean,
				default : true
			},
			message : {
				required : true,
				type : String
			}
		},
	}
</script>