import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

const OrderCart = ( { id, title, imageUrl, price, quantity, cart = true } ) => {
	const { removeItem } = useContext( ShoppingCartContext );

	return (
		<div className='flex justify-between items-center gap-2 border border-slate-500 rounded-lg pr-2'>
			<div className='flex items-center gap-2'>
				<figure className='w-20 h-20'>
					<img src={ imageUrl } alt={ title } className='w-full h-full rounded-lg object-cover' />
				</figure>
				<div>
					<p className='text-sm font-light'>{ title }</p>
					<p className='text-base font-medium'>Cantidad: { quantity }</p>
				</div>
			</div>
			<div className='flex items-center gap-2'>
				<p className='text-lg font-medium'>s/{ price * quantity }</p>

				{
					cart && <button onClick={ () => removeItem( id ) }>❌</button>
				}
			</div>
		</div>
	);
};

export { OrderCart };
