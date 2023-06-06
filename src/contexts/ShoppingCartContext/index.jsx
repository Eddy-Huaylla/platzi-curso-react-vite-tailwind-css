import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

const defaultState = [];

export const ShoppingCartProvider = ( { children } ) => {
	const [ cart, setCart ] = useState( defaultState );
	const [ isOpenCartDetail, setIsOpenCartDetail ] = useState( false );
	const [ isOpenCart, setIsOpenCart ] = useState( false );
	const [ cartDetail, setCartDetail ] = useState( {} );

	const openCartDetail = ( product ) => {
		setCartDetail( product );
		setIsOpenCartDetail( true );
	};

	const closeCartDetail = () => {
		setCartDetail( {} );
		setIsOpenCartDetail( false );
	};

	const addItem = ( product ) => {
		const productInCartIndex = cart.findIndex( item => item.id === product.id );

		if ( productInCartIndex >= 0 ) {
			const newCart = structuredClone( cart );
			newCart[productInCartIndex].quantity += 1;
			setCart( newCart );
			return;
		}

		const productTem = product;
		productTem.quantity = 1;

		setCart( [ ...cart, productTem ] );
	};

	const getQuantityCart = () => {
		let quantity = 0;
		cart.forEach( item => {
			quantity = quantity + item.quantity;
		} );

		return quantity;
	};

	return (
		<ShoppingCartContext.Provider
			value={
				{
					cart,
					cartDetail,
					addItem,
					getQuantityCart,
					isOpenCartDetail,
					openCartDetail,
					closeCartDetail,
					isOpenCart,
					setIsOpenCart
				}
			}
		>
			{ children }
		</ShoppingCartContext.Provider>
	);
};
