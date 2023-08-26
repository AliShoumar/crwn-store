import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from './../../assets/4.3 crown.svg.svg';
import './header.styles.scss';
import {auth} from './../../firebase/firebase.utils';

const Header = ({currentUser}) => {
	return (
		<div className='header'>
			<Link to={'/'} className='logo-container'>
				<Logo />
			</Link>
			<div className='options'>
				<Link className='option' to={'/shop'}>
					SHOP
				</Link>
				<Link className='option' to={'/contact'}>
					Contact
				</Link>
				{currentUser ? (
					<div
						className='option'
						style={{cursor: 'pointer'}}
						onClick={() => auth.signOut()}
					>
						SIGN OUT
					</div>
				) : (
					<Link className='option' to={'/signin'}>
						SIGN IN
					</Link>
				)}
			</div>
		</div>
	);
};

export default Header;
