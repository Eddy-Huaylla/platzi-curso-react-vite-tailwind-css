import React from 'react';

const Layout = ( { children } ) => {
	return (
		<main className='flex items-center pt-2 px-2'>
			{ children }
		</main>
	);
};

export { Layout };
