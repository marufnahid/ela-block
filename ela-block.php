<?php
/**
 * Plugin Name:       Ela Block
 * Description:       This is a gutenberg block collection.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ela-block
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

function ela_block_category( $categories ) {

	// Adding a new category.
	$categories[] = array(
		'slug'  => 'ela-block',
		'title' => __( 'Ela Blocks', 'ela-block' ),
	);

	return $categories;
}
add_filter( 'block_categories_all' ,'ela_block_category', 9999999,1 );


function ela_block_init() {
	wp_enqueue_style('ela-glide-css','/node_modules/@glidejs/glide/dist/css/glide.core.min.css', null, 3.3);

	wp_enqueue_script('ela-ajax-chimp',plugins_url('assets/js/ajax-chimp/ajax-chimp.js',__FILE__),array('jquery'), time());
	wp_enqueue_script('ela-glide-js',plugins_url('assets/js/glide/glide.min.js',__FILE__),'', '3.3', true);
	wp_register_script('ela-block-main',plugins_url('assets/js/main.js',__FILE__),'', time(), true);

	if(class_exists('CSF')) {
		wp_enqueue_script( 'ela-ajax-chimp-activation', plugins_url( 'assets/js/ajax-chimp/mail-activation.js', __FILE__ ), array( 'jquery' ), time(), true );
		$option       = get_option( 'ela_option_data' );
		$mailchimpUrl = $option['mailchimp_code'];
		wp_localize_script( 'ela-ajax-chimp-activation', 'urls', array( 'mailchimpUrl' => $mailchimpUrl ) );
	}

	register_block_type( __DIR__ . '/build/blocks/newsletter' );
	register_block_type( __DIR__ . '/build/blocks/instagram-carousel' );
}
add_action( 'init', 'ela_block_init' );


