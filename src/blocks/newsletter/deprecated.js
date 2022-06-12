import React from 'react'
import { attributes } from './block.json';

import { useBlockProps, RichText } from '@wordpress/block-editor';
const deprecated =  [
	{
		attributes,

		save({ attributes }) {

			const blockProps = useBlockProps.save();

			return (

				<div>
					<div
						className="subscribe-widget clearfix"
						style={
							{
								backgroundColor: attributes.blockBgColor,
								padding: attributes.padding,
								marginTop: attributes.marginTop,
								marginBottom: attributes.marginBottom
							}
						}
					>
						<RichText.Content
							{ ...blockProps }
							tagName="h3"
							value={ attributes.title }
							style={ {color: attributes.titleColor, fontSize: attributes.titleFontSize+"px"} }
						/>
						<form className="mailchimp inputSubscribeDiv">
							<div className="input-wrap">
								<input type="email" name="subscribe" id="subscriber-email" placeholder={attributes.placeholderText}
											 className="form-control"
											 style={{
												 width: attributes.inputWidth + '%',
												 height: attributes.inputHeight + 'px',
											 }}/>

								<button
									type={"submit"}
									id={"subscribe-button"}
									className={"btn"}
									style={
										{
											color: attributes.buttonTextColor,
											backgroundColor: attributes.buttonBgColor,
											width: attributes.buttonWidth + "%",
											height: attributes.buttonHeight + "px",
											border: "none",
											fontSize: "1.2em"
										}
									}
								>
									{attributes.buttonText}
								</button>
							</div>
							<h5 className="subscription-success"></h5>
							<h5 className="subscription-error"></h5>
							<label className="subscription-label" htmlFor="subscriber-email"></label>

						</form>
					</div>
				</div>
			);
		}
	}
]

export default deprecated;

