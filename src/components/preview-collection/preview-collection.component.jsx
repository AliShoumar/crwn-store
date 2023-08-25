import React from 'react';
import CollectionItem from './../collection-item/collection-item.component';
import './preview-collection.styles.scss';

const PreviewCollection = ({title, items}) => (
	<div className='collection-preview'>
		<h1 className='title'>{title}</h1>
		<div className='preview'>
			{items
				.filter((item, indx) => indx < 4)
				.map(item => (
					<CollectionItem key={item.id} {...item} />
				))}
		</div>
	</div>
);

export default PreviewCollection;
