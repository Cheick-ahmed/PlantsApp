import algoliasearch from 'algoliasearch/lite'
import { createInstantSearch } from 'vue-instantsearch'
import { history } from 'instantsearch.js/es/lib/routers'
import { simple } from 'instantsearch.js/es/lib/stateMappings'

export default ({ app }, inject) => {
	const searchClient = algoliasearch('ETS3RNA1T6', '61094bbfd4d06e3b464be4860cb78c33')

	const { instantsearch } = createInstantSearch({
		searchClient,
		routing : {
			router : history(),
			stateMappings : simple()
		},
		indexName : 'plants'
	})

	inject ('instantsearch', instantsearch)
}