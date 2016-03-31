/**
 * KIRKI CONTROL: CHECKBOX
 */
wp.customize.controlConstructor['kirki-checkbox'] = wp.customize.Control.extend( {
	ready: function() {
		var control = this;
		// initial state for required fields
		kirkiRequired( control, control.setting._value );

		// Get the initial value
		var checkbox_value = control.setting._value;

		this.container.on( 'change', 'input', function() {
			checkbox_value = ( jQuery( this ).is( ':checked' ) ) ? true : false;
			control.setting.set( checkbox_value );
			// trigger required fields changes
			kirkiRequired( control, checkbox_value );
		});
	}
});
