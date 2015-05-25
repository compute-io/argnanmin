'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isFunction = require( 'validate.io-function' ),
	isNumber = require( 'validate.io-number' );

// ARGNANMIN //

/**
* FUNCTION: argnanmin( arr )
*	Computes the minimum value of an array ignoring non-numeric values and returns the corresponding array indices.
*
* @param {Number[]|Array} arr - array of values
* @param {Function} [accessor] - accessor function for accessing array values
* @returns {Array|Null} array indices or null
*/
function argnanmin( arr, clbk ) {
	if ( !isArray( arr ) ) {
		throw new TypeError( 'argnanmin()::invalid input argument. Must provide an array. Value: `' + arr + '`.' );
	}
	if ( arguments.length > 1 && !isFunction( clbk ) ) {
		throw new TypeError( 'argnanmin()::invalid input argument. Accessor must be a function. Value: `' + clbk + '`.' );
	}
	var len = arr.length,
		min = Number.POSITIVE_INFINITY,
		idx = [],
		val,
		i;

	if ( clbk ) {
		for ( i = 0; i < len; i++ ) {
			val = clbk( arr[ i ], i );
			if ( !isNumber( val ) ) {
				continue;
			}
			if ( val < min ) {
				min = val;
				idx.length = 0;
				idx.push( i );
			}
			else if ( val === min ) {
				idx.push( i );
			}
		}
	} else {
		for ( i = 0; i < len; i++ ) {
			val = arr[ i ];
			if ( !isNumber( val ) ) {
				continue;
			}
			if ( val < min ) {
				min = val;
				idx.length = 0;
				idx.push( i );
			}
			else if ( val === min ) {
				idx.push( i );
			}
		}
	}
	return idx;
} // end FUNCTION argnanmin()


// EXPORTS //

module.exports = argnanmin;
