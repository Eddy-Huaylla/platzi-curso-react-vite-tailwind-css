import { BrowserRouter } from 'react-router-dom';
import { Router } from './routers/Router';

import { NavBar } from './components/NavBar';

import './App.css';

function App () {
	return (
		<BrowserRouter>
			<header className='sticky top-0 shadow border-b bg-white'>
				<NavBar />
			</header>

			<Router />
		</BrowserRouter>
	);
}

export default App;
