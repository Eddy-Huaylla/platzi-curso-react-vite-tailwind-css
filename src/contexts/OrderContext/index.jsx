import { createContext, useState } from 'react';

export const OrderContext = createContext();

export const OrderContextProvider = ( { children } ) => {
	const [ orders, setOrder ] = useState( [] );

	const addOrder = ( order ) => {
		setOrder( [ ...orders, order ] );
	};

	return (
		<OrderContext.Provider
			value={
				{
					orders,
					addOrder
				}
			}
		>
			{ children }
		</OrderContext.Provider>
	);
};
