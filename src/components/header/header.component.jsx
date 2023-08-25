import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from './../../assets/4.3 crown.svg.svg';
import './header.styles.scss';

const Header = () => {
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
			</div>
		
		</div>
	);
};

export default Header;
