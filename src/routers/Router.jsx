import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './AppRouter';

const Router = () => {
	return (
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
	);
};

export { Router };
