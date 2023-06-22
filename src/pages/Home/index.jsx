import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Card } from '../../components/Card';
import { Drawer } from '../../components/Drawer';
import { ProductDetail } from '../../components/ProductDetail';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

import { useFilter } from '../../hooks/useFilter';

import { getProducts } from '../../services/platzi';

const Home = () => {
	const { category } = useParams();
	const [ products, setProducts ] = useState( [] );
	const [ error, setError ] = useState();
	const { isOpenCartDetail, closeCartDetail } = useContext( ShoppingCartContext );
	const { filter, setFilter, productsFilter } = useFilter( products );

	useEffect( () => {
		getProducts()
			.then( products => {
				setProducts( products );
			} )
			.catch( error => {
				setError( error );
			} );
	}, [] );

	useEffect( () => {
		setFilter( { ...filter, category: category === undefined ? '' : category } );
	}, [ category ] );

	return (
		<>
			<div className='flex flex-col justify-center items-center'>
				<input
					type='search'
					placeholder='Search product'
					className='rounded-lg border-black w-80 p-4 mb-4'
					value={ filter.search }
					onChange={ ( e ) => setFilter( { ...filter, search: e.target.value } ) }
				/>

				<section className='grid gap-4 grid-cols-4 w-full max-w-screen-2xl justify-items-center'>

					{
						error && <p className='px-3 rounded-lg bg-red-700 text-white font-medium text-center'>{ error }</p>
					}

					{
						productsFilter.map( product => <Card key={ product.id } product={ product } /> )
					}
				</section>
			</div>

			<Drawer
				title='Details'
				isOpen={ isOpenCartDetail }
				onClose={ closeCartDetail }
			>
				<ProductDetail />
			</Drawer>
		</>
	);
};

export { Home };
