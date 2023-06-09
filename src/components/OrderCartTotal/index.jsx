import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

const OrderCartTotal = () => {
	const { cart, getTotalPrice } = useContext( ShoppingCartContext );

	return (
		<>
			{
				cart.length > 0 && (
					<div className='flex justify-between items-center w-full'>
						<div className='font-light'>Total:</div>
						<div className='font-medium text-2xl'>s/{ getTotalPrice() }</div>
					</div>
				)
			}
		</>
	);
};

export { OrderCartTotal };
