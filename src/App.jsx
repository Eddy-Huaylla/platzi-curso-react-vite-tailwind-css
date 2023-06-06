import { BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';

import { Router } from './routers/Router';

import { NavBar } from './components/NavBar';
import { Layout } from './components/Layout';

import './App.css';

function App () {
	return (
		<ShoppingCartProvider>
			<BrowserRouter>
				<header className='sticky top-0 shadow border-b bg-white flex justify-center z-10'>
					<NavBar />
				</header>
				<Layout>
					<Router />
				</Layout>
			</BrowserRouter>
		</ShoppingCartProvider>
	);
}

export default App;
