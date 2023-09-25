<?php
/**
 *
 * Plugin Name:       WP Query Block Extension - Metadata Filter
 * Description:       Add metadata support to Query Loop Block filter.
 * Version:           1.0
 * Author:            Kelvin Xu
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       wp-query-block-extension
 *
 * @package ubc_query_block_extension
 */

namespace UBC\CTLT\BLOCKS\QUERY_BLOCK\METADATA\FILTER;

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\enqueue_assets' );

/**
 * Enqueue block assets.
 *
 * @return void
 */
function enqueue_assets() {

	wp_enqueue_script(
		'wp-query-block-metadata-filter-js',
		plugin_dir_url( __FILE__ ) . 'build/script.js',
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'build/script.js' ),
		true
	);

	wp_localize_script(
		'wp-query-block-metadata-filter-js',
		'wp_query_block_metadata_filter',
		array(
			'nonce' => wp_create_nonce( 'metadata_filter_ajax' ),
		)
	);

}//end enqueue_assets()

add_filter( 'rest_post_query', __NAMESPACE__ . '\\query_post_by_metadata', 10, 2 );
add_filter( 'rest_page_query', __NAMESPACE__ . '\\query_post_by_metadata', 10, 2 );

/**
 * Add query args to post and page rest endpoint.
 *
 * @param  array           $args Array of arguments for WP_Query.
 * @param  WP_REST_Request $request The REST API request.
 * @return array
 */
function query_post_by_metadata( $args, $request ) {
	if ( ! isset( $request['metaQuery'] ) ) {
		return $args;
	}

	// Secure the meta sort to same host ONLY.
	if ( $request->get_headers()['host'][0] !== $_SERVER['HTTP_HOST'] ) {
		return $args;
	}

	$query_count        = count( $request['metaQuery']['innerQueries'] );
	$args['meta_query'] = array();

	if ( $query_count > 1 ) {
		$args['meta_query']['relation'] = sanitize_text_field( $request['metaQuery']['relation'] );
	}

	foreach ( $request['metaQuery']['innerQueries'] as $key => $inner_query ) {
		$args['meta_query'][] = array(
			'key' => sanitize_text_field( $inner_query['key'] ),
			'value' => sanitize_text_field( $inner_query['value'] ),
			'type' => sanitize_text_field( $inner_query['type'] ),
			'compare' => $inner_query['compare']
		);
	}

	return $args;
}//end query_post_by_metadata()

add_filter( 'query_loop_block_query_vars', __NAMESPACE__ . '\\update_query_args', 10, 3 );

/**
 * Update query args for blocks that inherits the main query loop block.
 *
 * @param  array    $query Array containing parameters for WP_Query as parsed by the block context.
 * @param  WP_Block $block Block instance.
 * @param  int      $page Current query's page.
 * @return array
 */
function update_query_args( $query, $block, $page ) {
	if ( ! isset( $block->context['query']['metaQuery'] ) ) {
		return $query;
	}

	$query_count        = count( $block->context['query']['metaQuery']['innerQueries'] );
	$query['meta_query'] = array();

	if ( $query_count > 1 ) {
		$query['meta_query']['relation'] = sanitize_text_field( $block->context['query']['metaQuery']['relation'] );
	}

	foreach ( $block->context['query']['metaQuery']['innerQueries'] as $key => $inner_query ) {
		$query['meta_query'][] = array(
			'key' => sanitize_text_field( $inner_query['key'] ),
			'value' => sanitize_text_field( $inner_query['value'] ),
			'type' => sanitize_text_field( $inner_query['type'] ),
			'compare' => $inner_query['compare']
		);
	}

	return $query;
}

add_action( 'wp_ajax_metadata_filter_get_meta_keys', __NAMESPACE__ . '\\get_meta_keys' );

/**
 * Ajax request handler to return the list of meta keys from the post meta table.
 *
 * @return void
 */
function get_meta_keys() {
	global $wpdb;

	wp_verify_nonce( $_POST['nonce'], 'metadata_filter_ajax' );

	$keys = get_transient( 'wp_metadata_get_keys' );
	if ( false !== $keys ) {
		wp_send_json_success( $keys );
	}

	$keys = $wpdb->get_col(
		$wpdb->prepare(
			"SELECT DISTINCT meta_key
			FROM $wpdb->postmeta
			WHERE meta_key NOT BETWEEN '_' AND '_z'
			HAVING meta_key NOT LIKE %s
			ORDER BY meta_key",
			$wpdb->esc_like( '_' ) . '%'
		)
	);

	set_transient( 'wp_metadata_get_keys', $keys, HOUR_IN_SECONDS );

	wp_send_json_success( $keys );
}//end get_meta_keys()

add_action( 'updated_post_meta', __NAMESPACE__ . '\\reset_metakeys_transient' );

/**
 * Delete `wp_metadata_filter_get_keys` transient when any of the post metas is updated.
 */
function reset_metakeys_transient() {
	if ( false !== get_transient( 'wp_metadata_get_keys' ) ) {
		delete_transient( 'wp_metadata_get_keys' );
	}
}//end reset_metakeys_transient()
