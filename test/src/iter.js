import test from 'ava';
import * as poset from '../../src';

import array from "@aureooms/js-array" ;

test( "iter", t => {

	var f, b, fe, be, n;

	f = [];
	b = [];
	fe = [];
	be = [];

	n = 10;

	array.iota( fe, 0, n, 0 );
	array.reversed( fe, be );

	algorithms.fiter( 0, n, f.push.bind(f) );
	algorithms.biter( 0, n, b.push.bind(b) );

	t.deepEqual( f, fe, "forward" );
	t.deepEqual( b, be, "backward" );

});
