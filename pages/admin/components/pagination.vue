<template>
	<nav class="my-20">
		<ul class="flex flex-wrap items-center my-12">
			<li class="bg-white rounded mr-3 mb-2" :class=" { 'hidden' : meta.current_page === 1} ">
				<a href="#" @click.prevent="switched(meta.current_page - 1)">
					<span>&laquo;</span>
				</a>
			</li>
			<li class="bg-white rounded mr-3 mb-2" v-for="x in meta.last_page" 
			:class="{ 'bg-blue-500 text-white' : meta.current_page === x }">
				<a href="#" class="inline-block w-10 h-10 flex items-center justify-center" @click.prevent="switched(x)"> {{ x }} </a>
			</li>
			<li class="bg-white rounded mr-3 mb-2" :class=" { 'hidden' : meta.current_page === meta.last_page} ">
				<a href="#" @click.prevent="switched(meta.current_page - 1)">
					<span>&raquo;</span>
				</a>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default {
		props : {
			meta : {
				required : true,
				type : Object
			}
		},
		methods : {
			switched (page) {
				if (this.pageIsOutOfBounds(page)) {
					return;
				}
				this.$emit('pagination:switched', page)
			},
			pageIsOutOfBounds (page) {
				return page <= 0 || page > this.meta.last_page;
			}
		}
	}
</script>