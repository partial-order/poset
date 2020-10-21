import test from 'ava';

import {clarkson} from '../../src';

import {sort} from "@aureooms/js-insertion-sort" ;
import {alloc, iota} from "@aureooms/js-array" ;
import {shuffle} from "@aureooms/js-random" ;
import {increasing} from "@aureooms/js-compare" ;

test( "minima 1" , t => {

	var a = [ 1 , 2 , 3 , 4 , 6 , 12 ] ;

	var divides = function ( a , b ) { return b % a === 0 ; } ;

	shuffle( a , 0 , a.length ) ;

	var min = clarkson( divides , a , 0 , a.length ) ;

	t.deepEqual( min , 1 , "minima set has cardinality 1" ) ;

	t.deepEqual( a[0] , 1 , "minimum is 1" ) ;

} ) ;

test( "minima 2,3" , t => {

	var a = [ 1 , 2 , 3 , 4 , 6 , 12 ] ;

	const i = 1 ;

	const j = a.length ;

	const divides = ( a , b ) => b % a === 0 ;

	shuffle( a , i , j ) ;

	const min = clarkson( divides , a , i , j ) ;

	t.deepEqual( min - i , 2 , "minima set has cardinality 2" ) ;

	sort( increasing , a , i , min ) ;

	t.deepEqual( a[i+0] , 2 , "1st minimum is 2" ) ;
	t.deepEqual( a[i+1] , 3 , "2nd minimum is 3" ) ;

} ) ;


test( "minima totally unordered set" , t => {

	const n = 1000 ;

	const a = alloc( n ) ;

	iota( a , 0 , n , 0 ) ;

	const prec = ( a , b ) => false ;

	shuffle( a , 0 , n ) ;

	var min = clarkson( prec , a , 0 , n ) ;

	t.deepEqual( min , n , "minima set has cardinality n" ) ;

} ) ;
