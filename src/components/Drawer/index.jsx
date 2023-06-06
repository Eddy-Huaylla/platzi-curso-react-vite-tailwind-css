import React from 'react';

const Drawer = ( { title, children, isOpen, onClose } ) => {
	return (
		<aside
			className={ `${ isOpen ? 'flex' : 'hidden' } flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-65px)] bottom-0` }
		>
			<div className='flex justify-between items-center pt-6 px-6 pb-5'>
				<h2 className='font-medium text-xl'>{ title }</h2>
				<button onClick={ () => onClose() }>❌</button>
			</div>
			<div className='flex pb-6 px-6 pt-4 border-t border-x-gray-400'>
				{ children }
			</div>
		</aside>
	);
};

export { Drawer };
