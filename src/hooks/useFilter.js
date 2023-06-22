import { useState } from 'react';

const useFilter = ( products ) => {
	const [ filter, setFilter ] = useState(
		{
			search: '',
			category: ''
		}
	);

	const productsFilter = products.filter( product => {
		return (
			(
				filter.search === '' ||
				product.title.toLowerCase().includes( filter.search.toLowerCase() )
			) &&
			(
				filter.category === '' ||
				product.category.name.toLowerCase() === filter.category.toLocaleLowerCase()
			)
		);
	} );

	return {
		filter,
		setFilter,
		productsFilter
	};
};

export { useFilter };
