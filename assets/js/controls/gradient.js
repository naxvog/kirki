/**
 * KIRKI CONTROL: GRADIENT
 */
wp.customize.controlConstructor['gradient'] = wp.customize.Control.extend( {
	ready: function() {
		var control = this;
		var value   = control.setting._value;

		// Start colorpicker
		picker0 = this.container.find( '.kirki-gradient-color-control-0' );

		// when the color changes update the value
		picker0.wpColorPicker({
			change: function( event, ui ) {
				setTimeout( function() {
					value[0]['color'] = picker0.val();
					control.setting.set( value );
				}, 100 );
			},
		});

		// Start colorpicker
		picker1 = this.container.find( '.kirki-gradient-color-control-1' );

		// when the color changes update the value
		picker1.wpColorPicker({
			change: function( event, ui ) {
				setTimeout( function() {
					value[1]['color'] = picker1.val();
					control.setting.set( value );
				}, 100 );
			},
		});
		// When the position changes update the value
		this.container.on( 'change keyup paste', '.kirki-gradient-position-control-0', function() {
			value[0]['position'] = jQuery( this ).val();
			control.setting.set( value );
		});
		// When the position changes update the value
		this.container.on( 'change keyup paste', '.kirki-gradient-position-control-1', function() {
			value[1]['position'] = jQuery( this ).val();
			control.setting.set( value );
		});

	}
});
