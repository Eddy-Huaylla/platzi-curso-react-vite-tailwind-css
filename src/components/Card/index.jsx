import React from 'react';

const Card = ( { product } ) => {
	const { title, price, images, category } = product;
	return (
		<div className='flex flex-col rounded-lg overflow-hidden border border-gray-400 pb-2'>
			<figure className='relative w-full'>
				<img
					src={ images[0] }
					alt={ title }
					className='w-full h-full object-cover'
					style={{ aspectRatio: '3/1.8' }}
				/>
				<span className='px-2 absolute text-xs text-black bg-white/60 rounded-lg bottom-2 left-2'>{ category.name }</span>
			</figure>
			<section className='flex flex-col h-full justify-between p-2 gap-4'>
				<div className='flex flex-row justify-between items-center'>
					<h3 className='text-sm font-light'>{ title }</h3>
					<p className='font-medium'>s/{ price }</p>
				</div>
				<button className='bg-black text-white rounded-lg w-full py-2 font-medium hover:bg-black/95'>Add to Cart 🛒</button>
			</section>
		</div>
	);
};

export { Card };
