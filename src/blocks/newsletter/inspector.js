
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import {
	RangeControl,
	PanelBody,
	Panel,
	__experimentalHeading as Heading,
	TextControl,
	PanelRow, ColorPalette,
} from '@wordpress/components'
import { InspectorControls } from '@wordpress/block-editor';

import { more } from '@wordpress/icons';


/**
 * Inspector controls
 */
class Inspector extends Component {

	render() {
		const colors = [
			{ name: 'red', color: '#f00' },
			{ name: 'white', color: '#fff' },
			{ name: 'blue', color: '#00f' },
		];
		const {
			attributes,
			setAttributes
		} = this.props;

		const {
			marginTop,
			marginBottom,
			title,
			placeholderText,
			buttonText,
			titleFontSize,
			padding,
			inputWidth,
			inputHeight,
			buttonWidth,
			buttonHeight,
			titleColor,
			blockBgColor,
			buttonTextColor,
			buttonBgColor

		} = attributes;


		return (
			<Fragment>
				<InspectorControls key="setting">
					<Panel header="Newsletter">
						<PanelBody title="Mailchimp" icon={ more } initialOpen={ true }>
							<Heading style={{marginTop: "20px"}}>Button Text</Heading>
							<TextControl
								value={ attributes.buttonText }
								onChange={ ( value ) => setAttributes( { buttonText: value }) }
							/>
							<Heading style={{marginTop: "20px"}}>Placeholder Text</Heading>
							<TextControl
								value={ attributes.placeholderText }
								onChange={ ( value ) => setAttributes( { placeholderText: value }) }
							/>
						</PanelBody>
						<PanelBody title="General" icon={ more } initialOpen={ false }>
							<PanelRow>
								<RangeControl
									label="Title Font Size"
									value={ attributes.titleFontSize }
									onChange={ ( value ) => setAttributes({titleFontSize: value}) }
									min={ 15 }
									max={ 60 }
								/>
							</PanelRow>
							<PanelRow>
								<RangeControl
									label="Block Padding"
									value={ attributes.padding }
									onChange={ ( value ) => setAttributes({padding: value} ) }
									min={ 0 }
									max={ 100 }
								/>
							</PanelRow>
							<PanelRow>
								<RangeControl
									label="Block Margin Top"
									value={ attributes.marginTop }
									onChange={ ( value ) => setAttributes( {marginTop: value} ) }
									min={ 0 }
									max={ 100 }
								/>
							</PanelRow>
							<PanelRow>
								<RangeControl
									label="Block Margin Bottom"
									value={ attributes.marginBottom }
									onChange={ ( value ) => setAttributes( {marginBottom: value }) }
									min={ 0 }
									max={ 100 }
								/>
							</PanelRow>
							<PanelRow>
								<RangeControl
									label="Input Width"
									value={ attributes.inputWidth }
									onChange={ ( value ) => setAttributes({ inputWidth: value} ) }
									min={ 20 }
									max={ 100 }
								/>
							</PanelRow>
							<PanelRow>
								<RangeControl
									label="Input Height"
									value={ attributes.inputHeight }
									onChange={ ( value ) => setAttributes({ inputHeight: value} ) }
									min={ 20 }
									max={ 100 }
								/>
							</PanelRow>
							<PanelRow>
								<RangeControl
									label="Button Width"
									value={ attributes.buttonWidth }
									onChange={ ( value ) => setAttributes({ buttonWidth: value} ) }
									min={ 5 }
									max={ 30 }
								/>
							</PanelRow>
							<PanelRow>
								<RangeControl
									label="Button Height"
									value={ attributes.buttonHeight }
									onChange={ ( value ) => setAttributes({ buttonHeight: value} ) }
									min={ 20 }
									max={ 100 }
								/>
							</PanelRow>

						</PanelBody>
						<PanelBody title="Color" icon={ more } initialOpen={ false }>
							<Heading style={{marginTop: "20px"}}>Title Color</Heading>
							<ColorPalette
								colors={ colors }
								value={ attributes.titleColor }
								onChange={ ( color ) => setAttributes( {titleColor:color} ) }
							/>
							<Heading style={{marginTop: "20px"}}>Block Background Color</Heading>
							<ColorPalette
								colors={ colors }
								value={attributes.blockBgColor}
								onChange={( value )=> setAttributes({blockBgColor: value})}
							/>
							<Heading style={{marginTop: "20px"}}>Button Text Color</Heading>
							<ColorPalette
								colors={ colors }
								value={attributes.buttonTextColor}
								onChange={( value )=> setAttributes({buttonTextColor: value})}
							/>
							<Heading style={{marginTop: "20px"}}>Button Background Color</Heading>
							<ColorPalette
								colors={ colors }
								value={attributes.buttonBgColor}
								onChange={( value )=> setAttributes({buttonBgColor: value})}
							/>
						</PanelBody>
					</Panel>

				</InspectorControls>
			</Fragment>
		);
	}

}

export default Inspector;
