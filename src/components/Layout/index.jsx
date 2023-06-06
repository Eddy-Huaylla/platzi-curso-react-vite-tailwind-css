import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import { Drawer } from '../Drawer';

const Layout = ( { children } ) => {
	const { isOpenCart, setIsOpenCart } = useContext( ShoppingCartContext );

	return (
		<main className='flex items-center justify-center pt-2 px-2'>
			{ children }
			<Drawer
				title='Cart'
				isOpen={ isOpenCart }
				onClose={ () => setIsOpenCart( false ) }
			>
				<h1>Hola Carrito</h1>
			</Drawer>
		</main>
	);
};

export { Layout };
