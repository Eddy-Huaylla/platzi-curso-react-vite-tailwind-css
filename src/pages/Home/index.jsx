import React, { useContext, useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import { getProducts } from '../../services/platzi';
import { Drawer } from '../../components/Drawer';
import { ProductDetail } from '../../components/ProductDetail';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

const Home = () => {
	const [ products, setProducts ] = useState( [] );
	const [ error, setError ] = useState();
	const { isOpenCartDetail, closeCartDetail } = useContext( ShoppingCartContext );

	useEffect( () => {
		getProducts()
			.then( products => {
				setProducts( products );
			} )
			.catch( error => {
				setError( error );
			} );
	}, [] );

	return (
		<>
			<section className='grid gap-4 grid-cols-4 w-full max-w-screen-2xl justify-items-center'>
				{
					error && <p className='px-3 rounded-lg bg-red-700 text-white font-medium text-center'>{ error }</p>
				}

				{
					products.map( product => <Card key={ product.id } product={ product } /> )
				}
			</section>

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
