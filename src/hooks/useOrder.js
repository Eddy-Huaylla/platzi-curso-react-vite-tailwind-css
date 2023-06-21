import { useContext } from 'react';
import { OrderContext } from '../contexts/OrderContext';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';

const useOrder = () => {
	const { orders, addOrder } = useContext( OrderContext );
	const { cart, getTotalPrice, removeAll, closeCartDetail, setIsOpenCart, getQuantityCart } = useContext( ShoppingCartContext );

	const add = () => {
		if ( cart.length > 0 ) {
			const order = {
				id: orders.length + 1,
				date: new Date().toLocaleString( 'es-PE', {
					timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
				} ),
				products: cart,
				quantity: getQuantityCart(),
				totalPrice: getTotalPrice()
			};

			addOrder( order );
			removeAll();
			closeCartDetail();
			setIsOpenCart( false );
		}
	};

	return {
		orders,
		add
	};
};

export { useOrder };
