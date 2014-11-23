/**
*
*	COMPUTE: argnanmin
*
*
*	DESCRIPTION:
*		- Computes the minimum value of an array ignoring non-numeric values and returns the corresponding array indices.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

/**
* FUNCTION: argnanmin( arr )
*	Computes the minimum value of an array ignoring non-numeric values and returns the corresponding array indices.
*
* @param {Array} arr - array of values
* @returns {Array} array indices
*/
function argnanmin( arr ) {
	if ( !Array.isArray( arr ) ) {
		throw new TypeError( 'argnanmin()::invalid input argument. Must provide an array.' );
	}
	var len = arr.length,
		min = Number.POSITIVE_INFINITY,
		idx = [],
		val;

	for ( var i = 0; i < len; i++ ) {
		val = arr[ i ];
		if ( typeof val !== 'number' || val !== val ) {
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
	return idx;
} // end FUNCTION argnanmin()


// EXPORTS //

module.exports = argnanmin;
