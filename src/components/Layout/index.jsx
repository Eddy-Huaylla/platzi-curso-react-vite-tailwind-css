import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import { Drawer } from '../Drawer';
import { ListOrderCart } from '../ListOrderCart';
import { OrderCartTotal } from '../OrderCartTotal';

const Layout = ( { children } ) => {
	const { isOpenCart, setIsOpenCart } = useContext( ShoppingCartContext );

	return (
		<main className='flex items-center justify-center pt-2 px-2'>
			{ children }
			<Drawer
				title='Cart'
				isOpen={ isOpenCart }
				onClose={ () => setIsOpenCart( false ) }
				footer={ <OrderCartTotal /> }
			>
				<ListOrderCart />
			</Drawer>
		</main>
	);
};

export { Layout };
