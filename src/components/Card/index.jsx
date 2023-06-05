import React from 'react';

const Card = () => {
	return (
		<div className='flex flex-col w-60 rounded-lg overflow-hidden border border-gray-400 pb-2'>
			<figure className='relative w-full h-40'>
				<img
					src='https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
					alt='Product'
					className='w-full h-full object-cover'
				/>
				<span className='px-2 absolute text-xs text-black bg-white/60 rounded-lg bottom-2 left-2'>Electronic</span>
			</figure>
			<section className='flex flex-col h-full justify-between p-2 gap-4'>
				<div className='flex flex-row justify-between items-center'>
					<h3 className='text-sm font-light'>Headphones</h3>
					<p className='font-medium'>s/300.00</p>
				</div>
				<button className='bg-black text-white rounded-lg w-full py-2 font-medium hover:bg-black/95'>Add to Cart 🛒</button>
			</section>
		</div>
	);
};

export { Card };
