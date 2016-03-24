/**
 * KIRKI CONTROL: GRADIENT
 */
wp.customize.controlConstructor['gradient'] = wp.customize.Control.extend( {
	ready: function() {
		var control = this;
		var value   = control.setting._value;
		console.log(value);
		var picker = {};

		for ( i = 0; i < control.params.choices.colors; i++ ) {
			// Start colorpicker
			picker[ i ] = this.container.find( '.kirki-gradient-color-control-' + i );
			var new_color = picker[ i ].val();

			// when the color changes update the value
			picker[ i ].wpColorPicker({
				change: function( event, ui ) {console.log(i);
					setTimeout( function() {
						value[ i ]['color'] = picker[ i ].val();
						control.setting.set( value );
						console.log(value);
					}, 100 );
				},
			});

			// When the position changes update the value
			this.container.on( 'change keyup paste', '.kirki-gradient-position-control-' + i, function() {
				value[ i ]['position'] = jQuery( this ).val();
				control.setting.set( value );
				console.log(value);
			});

		}
	}
});
