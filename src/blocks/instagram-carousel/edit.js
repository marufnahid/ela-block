/**
 * Internal dependencies
 */

import { useState, useEffect } from '@wordpress/element';
/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { useInstanceId } from "@wordpress/compose";
import { __ } from '@wordpress/i18n';
import { Fragment, Component } from '@wordpress/element';
import { useBlockProps , InnerBlocks, MediaUpload, MediaUploadCheck, RichText} from '@wordpress/block-editor';
import { select, withSelect, withDispatch, dispatch } from '@wordpress/data';
import {
	FormFileUpload,
	Button,
	Dashicon,
	Panel,
	PanelBody,
	__experimentalHeading as Heading, TextControl, PanelRow, RangeControl, ColorPalette,
} from '@wordpress/components'
import { compose } from '@wordpress/compose';




const ALLOWED_MEDIA_TYPES = [ 'image' ];

function MyMediaUploader( { mediaIDs, onSelect } ) {
	return (
		<MediaUploadCheck>
			<MediaUpload
				onSelect={ onSelect }
				allowedTypes={ ALLOWED_MEDIA_TYPES }
				value={ mediaIDs }
				render={ ( { open } ) => (
					<Button
						onClick={ open }
						className="button button-large"
					>{ mediaIDs.length < 1 ? 'Upload/Select Images' : 'Edit' }</Button>
				) }
				gallery
				multiple
			/>
		</MediaUploadCheck>
	);
}


/**
 * Block edit function
 */
export default function Edit({clientId, attributes, setAttributes}) {

	const blockProps = useBlockProps();
	const onSelect = ( items ) => {
		setAttributes( {
			images: items.map( item => {
				return {
					mediaID: parseInt( item.id, 10 ),
					mediaURL: item.url,
					thumbnail: item.sizes.full.url,
				};
			} ),
		} );
	};

	const instanceId = useInstanceId(Edit);
	alert(instanceId);

	useState(()=>{
		setAttributes( { id : instanceId  } )
	})



	console.log(instanceId);
	console.log(attributes.id);

	return (
		<div { ...blockProps }>
			{ attributes.images.length >= 1 ? (
				<div className="slider">
					{ attributes.images.map( item => (
						<div className="slider-item" key={ 'image-' + item.mediaID }>
							<img src={ item.thumbnail || item.mediaURL } />
						</div>
					) ) }
				</div>
			) : <p>Click the button and add some images to your slider! :)</p> }

			<MyMediaUploader
				mediaIDs={ attributes.images.map( item => item.mediaID ) }
				onSelect={ onSelect }
			/>
		</div>

	);
}


