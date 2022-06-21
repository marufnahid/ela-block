/**
 * External dependencies
 */
import classnames from 'classnames'

/**
 * WordPress dependencies
 */
import { useBlockProps , RichText} from '@wordpress/block-editor';

//import React, { useState, useEffect } from "react";
import { useState, useEffect } from '@wordpress/element';
import { useInstanceId } from "@wordpress/compose";



const save = ({ attributes }) => {

	if (attributes.images.length < 1) {
		return null
	}
	console.log(attributes)
	const blockProps = useBlockProps.save({ className: 'slider' })

	return (
		<div {...blockProps}>
		  <slider/>
			<div className={'title'}>
				<RichText.Content/>
			</div>
			<div
				className="glide-brand-carousel">
				<div className="glide__track" data-glide-el="track">
					<div className="slider d-flex">
						{attributes.images.map(item => (
							<div className="single-item" key={'image-' + item.mediaID}>
								<div className="item-wrap">
							  	<img src={item.mediaURL} data-id={item.mediaID} data-thumb={item.thumbnail} alt={'slider-img'}/>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="glide__arrows"
						 data-glide-el="controls">
					<button className="glide__arrow glide__arrow--left" data-glide-dir="<"><i className="fas fa-arrow-left"></i>
					</button>
					<button className="glide__arrow glide__arrow--right" data-glide-dir=">"><i className="fas fa-arrow-right"></i>
					</button>
				</div>

			</div>
		</div>
	)
}

export default save;



