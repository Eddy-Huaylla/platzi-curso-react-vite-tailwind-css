import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import { useOrder } from '../../hooks/useOrder';
import { Link } from 'react-router-dom';

const OrderCartTotal = () => {
	const { cart, getTotalPrice } = useContext( ShoppingCartContext );
	const { add: addOrder } = useOrder();

	return (
		<>
			{
				cart.length > 0 && (
					<>
						<div className='flex justify-between items-center w-full pb-2'>
							<div className='font-light'>Total:</div>
							<div className='font-medium text-2xl'>s/{ getTotalPrice() }</div>
						</div>
						<div className='flex justify-between items-center w-full'>
							<Link to='my-order' className='bg-black text-white w-full py-2 hover:bg-black/90' onClick={ () => addOrder() }>
								Comprar
							</Link>
						</div>
					</>
				)
			}
		</>
	);
};

export { OrderCartTotal };
