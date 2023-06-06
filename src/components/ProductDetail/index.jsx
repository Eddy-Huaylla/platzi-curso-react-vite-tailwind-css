import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

const ProductDetail = () => {
	const { cartDetail } = useContext( ShoppingCartContext );

	const { images, title, price, description } = cartDetail;

	const image = images?.[0] || '';

	return (
		<section>
			{
				image !== '' && (
					<figure>
						<img src={ image } alt={ title } />
					</figure>
				)
			}

			<p className='font-medium text-2xl mt-2 text-lime-600'>s/{ price }</p>
			<p className='font-medium text-md mt-1'>{ title }</p>
			<p className='font-light text-sm mt-1'>{ description }</p>
		</section>
	);
};

export { ProductDetail };
