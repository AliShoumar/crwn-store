import './App.css';
import {Route, Routes} from 'react-router-dom';
import HomePage from './page/homepage.component';

const HatPage = () => {
	return 'This is hat page';
};

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/'>
					<Route index element={<HomePage />} />
					<Route path='/hats' element={<HatPage />}></Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
