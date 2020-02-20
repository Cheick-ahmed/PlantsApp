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
			<div class="w-full lg:w-10/12">
				<ais-hits>
					<div slot="item" slot-scope="{item}">
						<plant-card :plant="item[0]" />
					</div>
				</ais-hits>
			</div>
		</div>
	</AisInstantSearchSsr>
</template>

<script>
	import { 
		AisInstantSearchSsr,
		AisHits,
		AisSearchBox
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
			AisSearchBox
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
				hitsPerPage : 20
			}).then(() => {
				return {
					instantSearchState : instantsearch.getState()
				}
			})
		}
	}
</script>