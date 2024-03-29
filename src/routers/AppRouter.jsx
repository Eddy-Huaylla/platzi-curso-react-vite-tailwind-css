import { useRoutes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { MyAccount } from '../pages/MyAccount';
import { MyOrder } from '../pages/MyOrder';
import { MyOrders } from '../pages/MyOrders';
import { SignIn } from '../pages/SignIn';
import { NotFound } from '../pages/NotFound';

const AppRouter = () => {
	const router = useRoutes(
		[
			{
				path: '/',
				element: <Home />
			},
			{
				path: 'my-account',
				element: <MyAccount />
			},
			{
				path: 'my-order',
				element: <MyOrder />
			},
			{
				path: 'my-order/:id',
				element: <MyOrder />
			},
			{
				path: 'my-orders',
				element: <MyOrders />
			},
			{
				path: 'sign-in',
				element: <SignIn />
			},
			{
				path: '/:category',
				element: <Home />
			},
			{
				path: '*',
				element: <NotFound />
			}
		]
	);

	return router;
};

export { AppRouter };
