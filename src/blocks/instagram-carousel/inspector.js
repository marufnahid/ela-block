
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { RangeControl, PanelBody, FormFileUpload } from '@wordpress/components';
import { InspectorControls, ContrastChecker, PanelColorSettings } from '@wordpress/block-editor';



class Inspector extends Component {
	 render() {
		const {
			attributes,
			setAttributes
		} = this.props;

		const {
			textAlign,
			title,
			value,
			fontSize
		} = attributes;

		const changeBackground = (color) => {
			setAttributes({ backgroundColor: color})
		}
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody
						title={ __( "Development Tools", 'frontrom' ) }
						initialOpen={ false }
					>
						<FormFileUpload
							accept="image/*"
							onChange={ ( event ) => console.log( event.target.files ) }
						>
							Upload
						</FormFileUpload>

					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	}
}
export  default Inspector;
