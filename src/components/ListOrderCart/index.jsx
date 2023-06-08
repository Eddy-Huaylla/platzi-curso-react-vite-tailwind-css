import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import { OrderCart } from '../OrderCart';

const ListOrderCart = () => {
	const { cart } = useContext( ShoppingCartContext );

	return (
		<section className='w-full flex flex-col gap-2'>
			{
				cart.map( item => {
					return (
						<OrderCart
							key={ item.id }
							id={ item.id }
							title={ item.title }
							imageUrl={ item.images?.[0] }
							price={ item.price }
							quantity={ item.quantity }
						/>
					);
				} )
			}
		</section>
	);
};

export { ListOrderCart };
