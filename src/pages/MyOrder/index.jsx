import React from 'react';
import { useOrder } from '../../hooks/useOrder';
import { OrderCart } from '../../components/OrderCart';
import { Link, useParams } from 'react-router-dom';

const MyOrder = () => {
	const { orders } = useOrder();
	const { id } = useParams();

	const orderFilter = id
		? orders.filter( order => {
			return order.id === parseInt( id );
		} )
		: orders;

	return (
		<>
			<section className='flex flex-col gap-2 w-full max-w-screen-2xl justify-items-center'>
				{
					orders.length === 0 && <p className='px-3 rounded-lg bg-red-700 text-white font-medium text-center'>No hay orden.</p>
				}

				{
					orders.length > 0 && <Link to='/my-orders'>⬅️ Atras</Link>
				}

				{
					orderFilter.slice( -1 )[0]?.products.map( item =>
						<OrderCart
							key={ item.id }
							id={ item.id }
							title={ item.title }
							imageUrl={ item.images?.[0] }
							price={ item.price }
							quantity={ item.quantity }
							cart={ false }
						/>
					)
				}
			</section>
		</>
	);
};

export { MyOrder };
