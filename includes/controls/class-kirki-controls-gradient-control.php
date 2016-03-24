<?php
/**
 * gradient Customizer Control.
 *
 * @package     Kirki
 * @subpackage  Controls
 * @copyright   Copyright (c) 2016, Aristeides Stathopoulos
 * @license     http://opensource.org/licenses/gpl-2.0.php GNU Public License
 * @since       1.0
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'Kirki_Controls_Gradient_Control' ) ) {
	class Kirki_Controls_Gradient_Control extends Kirki_Customize_Control {

		public $type = 'gradient';

		public $palette = true;

		public $default = '#FFFFFF';

		public function to_json() {
			parent::to_json();
		}

		protected function render() {
			$id    = 'customize-control-' . str_replace( '[', '-', str_replace( ']', '', $this->id ) );
			$class = 'customize-control customize-control-' . $this->type; ?>
			<li id="<?php echo esc_attr( $id ); ?>" class="<?php echo esc_attr( $class ); ?>">
				<?php $this->render_content(); ?>
			</li>
		<?php }

		public function render_content() {}

		public function content_template() { ?>
			<# if ( data.tooltip ) { #>
				<a href="#" class="tooltip hint--left" data-hint="{{ data.tooltip }}"><span class='dashicons dashicons-info'></span></a>
			<# } #>
			<label>
				<span class="customize-control-title">
					{{{ data.label }}}
				</span>
				<# if ( data.description ) { #>
					<span class="description customize-control-description">{{ data.description }}</span>
				<# } #>

				<# for ( i = 0; i < data.choices['colors']; i++ ) {  #>
					<?php // Add the color control ?>
					<input type="text" data-default-color="{{ data.default[ i ]['color'] }}" data-alpha="true" value="{{ data.value[ i ]['color'] }}" class="kirki-gradient-color-control-{{ i }} color-picker" {{{ data.link }}} />
					<?php // Add the position control ?>
					<input type="text" value="{{ data.value[ i ]['position'] }}" class="kirki-gradient-position-control-{{ i }}" {{{ data.link }}} />

				<# } #>

			</label>
			<?php
		}
	}
}
