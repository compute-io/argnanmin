'use strict';

var argmin = require( './../lib' );

// Simulate some data...
var data = new Array( 100 );
for ( var i = 0; i < data.length; i++ ) {
	// Every so often insert a missing value...
	if ( i%10 === 0 ) {
		data[ i ] = null;
	} else {
		data[ i ] = Math.round( Math.random()*100 );
	}
}
var idx = argmin( data );
console.log( idx );
