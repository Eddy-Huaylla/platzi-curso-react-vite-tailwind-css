import React, { useContext } from 'react';
import { OrderContext } from '../../contexts/OrderContext';
import OrdersCart from '../../components/OrdersCart';

const MyOrders = () => {
	const { orders } = useContext( OrderContext );

	return (
		<div className='flex flex-col gap-2 w-full max-w-screen-2xl justify-items-center'>
			<h1>Orders</h1>

			<ul className='max-w-screen-md w-full m-auto flex flex-col gap-2'>
				{
					orders.length > 0 && (
						orders.map( order => {
							return (
								<OrdersCart key={ order.id } order={ order } />
							);
						} )
					)
				}
			</ul>

		</div>
	);
};

export { MyOrders };
