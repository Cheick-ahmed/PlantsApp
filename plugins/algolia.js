import algoliasearch from 'algoliasearch/lite'
import { createInstantSearch } from 'vue-instantsearch'
import { history } from 'instantsearch.js/es/lib/routers'
import { simple } from 'instantsearch.js/es/lib/stateMappings'

export default ({ app }, inject) => {
	const searchClient = algoliasearch('ETS3RNA1T6', '6f4442ff23a67d53436675a573704627')

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