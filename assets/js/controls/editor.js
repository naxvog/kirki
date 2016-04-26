wp.customize.controlConstructor['kirki-editor'] = wp.customize.Control.extend({

	// When we're finished loading continue processing
	ready: function() {

		var control = this;

		jQuery( window ).load( function() {

			var element,
					editor,
					setChange,
					content,
					toggler = control.container.find( 'a.button' );

			toggler.on( 'click', function() {

				// TODO: Add the control ID to the textarea.

				// Show/Hide the editor.
				jQuery( '#kirki-editor-editor-pane' ).toggleClass( 'show' );

				// TODO: Init tinyMCE.

				// TODO: Put the content in tinyMCE.

			});

			// TODO: Detect changes and save.

		});

	}

});
