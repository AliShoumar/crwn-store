import './App.css';
import {Route, Routes} from 'react-router-dom';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignOut from './page/sign-in-and-sign-out/sign-in-and-sign-out.component';
import React from 'react';
import {auth} from './firebase/firebase.utils';

const HatPage = () => {
	return 'This is hat page';
};

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null
		};
	}
	unsubscribeFromAuth = null;
	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>
			this.setState({currentUser: user})
		);
	}
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	render() {
		return (
			<div className='App'>
				<Header currentUser={this.state.currentUser}/>
				<Routes>
					<Route path='/'>
						<Route index element={<HomePage />} />
						<Route path='/hats' element={<HatPage />}></Route>
						<Route path='/shop' element={<ShopPage />} />
						<Route path='/signin' element={<SignInAndSignOut />} />
					</Route>
				</Routes>
			</div>
		);
	}
}

export default App;
