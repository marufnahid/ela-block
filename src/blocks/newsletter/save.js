/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n'

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, RichText } from '@wordpress/block-editor'

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

export default function save ({ attributes }) {
	const blockProps = useBlockProps.save()

	return (

		<div>
			<div
				className="subscribe-widget clearfix"
				style={
					{
						backgroundColor: attributes.blockBgColor,
						padding: attributes.padding + 'px',
						marginTop: attributes.marginTop + 'px',
						marginBottom: attributes.marginBottom + 'px',
					}
				}
			>
				<RichText.Content
					{...blockProps}
					tagName="h3"
					value={attributes.title}
					style={{ color: attributes.titleColor, fontSize: attributes.titleFontSize + 'px' }}
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
							type={'submit'}
							id={'subscribe-button'}
							className={'btn'}
							style={
								{
									color: attributes.buttonTextColor,
									backgroundColor: attributes.buttonBgColor,
									width: attributes.buttonWidth + '%',
									height: attributes.buttonHeight + 'px',
									border: 'none',
									fontSize: '1.2em',
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
	)
}


