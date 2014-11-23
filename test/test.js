'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	argmin = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-argnanmin', function tests() {

	it( 'should export a function', function test() {
		expect( argmin ).to.be.a( 'function' );
	});

	it( 'should throw an error if provided a non-array', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			function(){},
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				argmin( value );
			};
		}
	});

	it( 'should compute the minimum value ignoring non-numeric values and return the corresponding indices', function test() {
		var data, expected, actual;

		data = [ 4, null, 2, 5, null, 3, 8, 2 ];
		expected = [ 2, 7 ];
		actual = argmin( data );

		assert.deepEqual( actual, expected );
	});

	it( 'should return an empty array if an array does not contain numeric values', function test() {
		var data;

		data = [ 'beep', 'boop', 'bap', null ];

		assert.deepEqual( argmin(data), [] );
	});

});
