<?php

/**
 * Plugin Name:       Golden Text
 * Description:       Applies a gold leaf effect to the edges of text in 3D.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Mark Salvatore
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       golden-text
 */

defined('ABSPATH') || exit;

if (!class_exists('Golden_Text')) {
  class Golden_Text {
    function __construct() {
      add_action('init', array($this, 'block_init'));
    }

    /**
     * Register the block using the metadata loaded from `block.json`.
     * It also registers all assets so they can be enqueued.
     */
    function block_init() {
      register_block_type(__DIR__ . '/build');
    }
  }
}
$goldenText = new Golden_Text();
