import React from 'react';
import { Link } from 'react-router-dom';

const OrdersCart = ( { order } ) => {
	return (
		<li className='flex w-full border border-zinc-600'>
			<Link className='w-full flex justify-between items-center p-2 hover:bg-gray-200' to={ `/my-order/${ order.id }` }>
				<div className='flex flex-col'>
					<span>{ order.date }</span>
					<span>{ order.quantity } articles</span>
				</div>
				<span>s/{ order.totalPrice }</span>
			</Link>
		</li>
	);
};

export default OrdersCart;
