import { BrowserRouter } from 'react-router-dom';
import { Router } from './routers/Router';

import { NavBar } from './components/NavBar';

import './App.css';
import { Layout } from './components/Layout';

function App () {
	return (
		<BrowserRouter>
			<header className='sticky top-0 shadow border-b bg-white flex justify-center z-10'>
				<NavBar />
			</header>
			<Layout>
				<Router />
			</Layout>
		</BrowserRouter>
	);
}

export default App;
