/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText , InspectorControls } from '@wordpress/block-editor';
import {Button, Panel, PanelBody, Notice, PanelRow, TextControl, TextareaControl,FontSizePicker , ColorPalette,__experimentalHeading as Heading, RangeControl, SelectControl ,ColorPicker  } from '@wordpress/components';
import { more } from '@wordpress/icons';
import './editor.scss';

export default function Edit({attributes, setAttributes}) {

	const blockProps = useBlockProps();
	const colors = [
		{ name: 'red', color: '#f00' },
		{ name: 'white', color: '#fff' },
		{ name: 'blue', color: '#00f' },
	];

	return (
		<div { ...useBlockProps() }>

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
			<div
				className="subscribe-widget clearfix"
				style={
				{
					backgroundColor: attributes.blockBgColor,
					padding: attributes.padding+ "px",
					marginTop: attributes.marginTop+ "px",
					marginBottom: attributes.marginBottom+ "px"
				}
			}
			>
				<RichText
					{ ...blockProps }
					style={ {color: attributes.titleColor, fontSize: attributes.titleFontSize+"px"} }
					tagName="h3"
					value={ attributes.title }
					allowedFormats={ [ 'core/bold', 'core/italic' ] }
					onChange={ ( title ) => setAttributes( { title } ) }
					placeholder={ __( 'Title...' ) }
				/>
				<form className="mailchimp inputSubscribeDiv">
					<div className="input-wrap">
						<input type="email" name="subscribe" id="subscriber-email" placeholder={attributes.placeholderText}
									 className="form-control"
						style={{
							width: attributes.inputWidth + '%',
							height: attributes.inputHeight + 'px',
						}}/>

						<Button
							type={"submit"}
							id={"subscribe-button"}
							className={"btn"}
							style={
								{
									color: attributes.buttonTextColor,
									backgroundColor: attributes.buttonBgColor,
									width: attributes.buttonWidth + "%",
									height: attributes.buttonHeight + "px"
								}
							}
						>
							{attributes.buttonText}
						</Button>
					</div>
					<h5 className="subscription-success"></h5>
					<h5 className="subscription-error"></h5>
					<label className="subscription-label" htmlFor="subscriber-email"></label>
				</form>
			</div>
		</div>

	);
}
