import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

const defaultState = [];

export const ShoppingCartProvider = ( { children } ) => {
	const [ cart, setCart ] = useState( defaultState );

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
		<ShoppingCartContext.Provider value={{ cart, addItem, getQuantityCart }}>
			{ children }
		</ShoppingCartContext.Provider>
	);
};
