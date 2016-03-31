function kirkiRequired( control, value, init ) {

	if ( undefined !== kirkiVars.dependencies ) {

		jQuery.each( kirkiVars.dependencies, function( setting, deps ) {

			jQuery.each( deps, function( key, dep ) {

				if ( dep.setting === control.id ) {

					var show = kirkiRequiredDep( value, dep.value, dep.operator )

					if ( false == show ) {
						setTimeout( function() {
							wp.customize.control( setting ).deactivate();
						}, 3000 );
					} else {
						wp.customize.control( setting ).activate();
					}

				}

			});

		});
	}

}

function kirkiRequiredDep( value, depValue, operator ) {
	var show = true;
	if ( '==' === operator || 'equals' === operator || 'equal' === operator || '=' === operator ) {
		if ( value != depValue ) {
			show = false;
		}
	} else if ( '===' === operator ) {
		if ( value !== depValue ) {
			show = false;
		}
	} else if ( '!==' === operator ) {
		if ( value === depValue ) {
			show = false;
		}
	} else if ( '!=' === operator || 'not equal' === operator ) {
		if ( value == depValue ) {
			show = false;
		}
	} else if ( '>=' === operator || 'greater or equal' === operator || 'equal or greater' === operator ) {
		if ( value < depValue ) {
			show = false;
		}
	} else if ( '<=' === operator || 'smaller or equal' === operator || 'equal or smaller' === operator ) {
		if ( value > depValue ) {
			show = false;
		}
	} else if ( '>' === operator || 'greater' === operator ) {
		if ( value < depValue ) {
			show = false;
		}
	} else if ( '<' === operator || 'smaller' === operator ) {
		if ( value > depValue ) {
			show = false;
		}
	} else if ( 'in' === operator || 'contains' === operator ) {
		if ( 'string' === typeof value ) {
			if ( value.indexOf( depValue ) == -1 ) {
				show = false;
			}
		} else if ( 'array' === typeof value || 'object' === typeof value ) {
			if ( undefined === value[ depValue ] ) {
				show = false;
			}
		}
	}

	return show;

}
