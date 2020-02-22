<template>
	<AisInstantSearchSsr>
		<div class="container py-16 flex flex-col justify-center items-center">
			<div class="mb-16 w-full lg:w-9/12">
				<ais-search-box :class-names="{
					'ais-SearchBox': 'w-full',
					'ais-SearchBox-input': 'w-full shadow rounded-lg p-4',
					'ais-SearchBox-submit' : 'hidden',
					'ais-SearchBox-submit' : 'hidden',
					'ais-SearchBox-reset' : 'hidden'
				}" 
				placeholder="Search plants"
				/>
			</div>
			<div>
				<!-- <ais-refinement-list  attribute="is_toxic"/> -->
			</div>
			<div class="w-full">
				<ais-hits :class-names=" { 
					'ais-Hits-list' : 'grid grid-cols-1 lg:grid-cols-4 gap-4',
				} ">
					<div slot="item" slot-scope="{item}">
						<plant-card :plant="item[0]" />
					</div>
				</ais-hits>
				<template v-if="instantSearchState.length">
					<ais-pagination 
						:class-names="{
							'ais-Pagination' : 'my-10',
							'ais-Pagination-list' : 'flex flex-wrap',
							'ais-Pagination-link' : 'inline-block w-10 h-10 flex items-center justify-center',
							'ais-Pagination-item' : 'bg-white rounded mr-3 mb-2',
							'ais-Pagination-item--selected' : 'bg-blue-500 text-white'
						}"
					/>
				</template>
			</div>
		</div>
	</AisInstantSearchSsr>
</template>

<script>
	import { 
		AisInstantSearchSsr,
		AisHits,
		AisSearchBox,
		AisPagination,
		AisRefinementList
	} from 'vue-instantsearch'

	import plantCard from './components/SearchPlantCard'

	export default {
		head () {
			return {
				title : 'Search'
			}
		},
		components : {
			plantCard,
			AisInstantSearchSsr,
			AisHits,
			AisSearchBox,
			AisPagination,
			AisRefinementList
		},
		data () {
			return {
				instantSearchState : null
			}
		},
		provide () {
			return {
				$_ais : this.$instantsearch
			}
		},
		beforeMount() {
			this.$instantsearch.hydrate(this.instantSearchState)
		},
		async asyncData({app}) {
			const instantsearch = app.$instantsearch

			return instantsearch.findResultsState({
				query : '',
				hitsPerPage : 10
			}).then(() => {
				return {
					instantSearchState : instantsearch.getState()
				}
			})
		}
	}
</script>