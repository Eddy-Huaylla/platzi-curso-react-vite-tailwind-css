import { useState } from 'react';

const useFilter = ( products ) => {
	const [ filter, setFilter ] = useState(
		{
			search: ''
		}
	);

	const productsFilter = products.filter( product => {
		return (
			filter.search === '' ||
			product.title.toLowerCase().includes( filter.search.toLowerCase() )
		);
	} );

	return {
		filter,
		setFilter,
		productsFilter
	};
};

export { useFilter };
