<?php
/**
 * Customizer Control: editor.
 *
 * Creates a TinyMCE textarea.
 *
 * @package     Kirki
 * @subpackage  Controls
 * @copyright   Copyright (c) 2016, Aristeides Stathopoulos
 * @license     http://opensource.org/licenses/https://opensource.org/licenses/MIT
 * @since       1.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'Kirki_Controls_Editor_Control' ) ) {

	/**
	 * A TinyMCE control.
	 */
	class Kirki_Controls_Editor_Control extends Kirki_Customize_Control {

		/**
		 * The control type.
		 *
		 * @access public
		 * @var string
		 */
		public $type = 'kirki-editor';

		/**
		 * Enqueue control related scripts/styles.
		 *
		 * @access public
		 */
		public function enqueue() {
			wp_enqueue_script( 'kirki-editor' );
		}

		/**
		 * Render the control's content.
		 * Allows the content to be overriden without having to rewrite the wrapper in $this->render().
		 *
		 * @access protected
		 */
		protected function render_content() {
			?>
			<?php if ( '' !== $this->tooltip ) : ?>
				<a href="#" class="tooltip hint--left" data-hint="<?php echo esc_html( $this->tooltip ); ?>"><span class='dashicons dashicons-info'></span></a>
			<?php endif; ?>

			<label>
				<span class="customize-control-title">
					<?php echo esc_html( $this->label ); ?>
				</span>
			</label>
			<?php if ( ! empty( $this->description ) ) : ?>
				<span class="description customize-control-description"><?php echo wp_kses_post( $this->description ); ?></span>
			<?php endif; ?>
			<a href="#" class="button button-primary toggle-editor">Toggle Editor</a>
			<?php
		}
	}
}
