import { useContext } from 'react';
import { OrderContext } from '../contexts/OrderContext';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';

const useOrder = () => {
	const { orders, addOrder } = useContext( OrderContext );
	const { cart, getTotalPrice, removeAll } = useContext( ShoppingCartContext );

	const add = () => {
		if ( cart.length > 0 ) {
			const order = {
				date: new Date().toLocaleString( 'es-PE', {
					timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
				} ),
				products: cart,
				totalPrice: getTotalPrice()
			};

			addOrder( order );
			removeAll();
		}
	};

	return {
		orders,
		add
	};
};

export { useOrder };
