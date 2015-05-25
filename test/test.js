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


	it( 'should throw an error if provided an accessor argument which is not a function', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			[],
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				argmin( [1,2,3], value );
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


	it( 'should compute the maximum value and return the corresponding indices using an accessor', function test() {
		var data, expected, actual;

		data = [
			{'x':4},
			{'x':null},
			{'x':2},
			{'x':5},
			{'x':null},
			{'x':3},
			{'x':8},
			{'x':2},
		];

		actual = argmin( data, getValue );
		expected = [ 2, 7 ];

		assert.deepEqual( actual, expected );

		function getValue( d ) {
			return d.x;
		}
	});

	it( 'should return null if provided an empty array', function test() {
		assert.isNull( argmin( [] ) );
	});

});
