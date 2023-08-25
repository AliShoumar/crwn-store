import React from 'react';
import SHOP_DATA from './shop.data.js';
import PreviewCollection from '../../components/preview-collection/preview-collection.component.jsx';

class ShopPage extends React.Component {
	constructor() {
		super();

		this.state = {
			collections: SHOP_DATA
		};
	}
	render() {
		return (
			<div className='shop-page'>
				{this.state.collections.map(({id, ...otherProps}) => (
					<PreviewCollection key={id} {...otherProps} />
				))}
			</div>
		);
	}
}

export default ShopPage;
