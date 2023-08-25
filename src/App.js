import './App.css';
import {Route, Routes} from 'react-router-dom';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import Header from './components/header/header.component';

const HatPage = () => {
	return 'This is hat page';
};

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/'>
					<Route index element={<HomePage />} />
					<Route path='/hats' element={<HatPage />}></Route>
					<Route path='/shop' element={<ShopPage />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
