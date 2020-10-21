import test from 'ava';
import * as poset from '../../src';


test( "epsilon", t => {

	var absepsilon, relepsilon, epsilon;

	epsilon = Math.pow( 2, -10 );
	morethanepsilon = epsilon + epsilon / 128;

	absepsilon = algorithms.__absepsilon__( epsilon );
	relepsilon = algorithms.__relepsilon__( epsilon );


	t.truthy( absepsilon( 0, 0 ) === 0, " absolute 0 === 0 " );
	t.truthy( relepsilon( 0, 0 ) === 0, " relative 0 === 0 " );


	t.truthy( absepsilon(  epsilon, 0 ) === 0, " absolute  e ===  0 " );
	t.truthy( absepsilon( -epsilon, 0 ) === 0, " absolute -e ===  0 " );
	t.truthy( absepsilon( 0,  epsilon ) === 0, " absolute  0 ===  e " );
	t.truthy( absepsilon( 0, -epsilon ) === 0, " absolute  0 === -e " );

	t.truthy( relepsilon(  epsilon, 0 )  >  0, " relative  e  >   0 " );
	t.truthy( relepsilon( -epsilon, 0 )  <  0, " relative -e  <   0 " );
	t.truthy( relepsilon( 0,  epsilon )  <  0, " relative  0  <   e " );
	t.truthy( relepsilon( 0, -epsilon )  >  0, " relative  0  >  -e " );


	t.truthy( absepsilon(  morethanepsilon, 0 )  >  0, " absolute  e'  >   0  " );
	t.truthy( absepsilon( -morethanepsilon, 0 )  <  0, " absolute -e'  <   0  " );
	t.truthy( absepsilon( 0,  morethanepsilon )  <  0, " absolute  0   <   e' " );
	t.truthy( absepsilon( 0, -morethanepsilon )  >  0, " absolute  0   <  -e' " );

	t.truthy( relepsilon(  morethanepsilon, 0 )  >  0, " relative  e'  >   0  " );
	t.truthy( relepsilon( -morethanepsilon, 0 )  <  0, " relative -e'  <   0  " );
	t.truthy( relepsilon( 0,  morethanepsilon )  <  0, " relative  0   <   e' " );
	t.truthy( relepsilon( 0, -morethanepsilon )  >  0, " relative  0   >  -e' " );


	t.truthy( absepsilon( 1 + epsilon, 1 ) === 0, " absolute  1 + e ===  1 " );
	t.truthy( absepsilon( 1 - epsilon, 1 ) === 0, " absolute  1 - e ===  1 " );
	t.truthy( absepsilon( 1, 1 + epsilon ) === 0, " absolute  1     ===  1 + e " );
	t.truthy( absepsilon( 1, 1 - epsilon ) === 0, " absolute  1     ===  1 - e " );

	t.truthy( relepsilon( 1 * ( 1 + epsilon ), 1 ) === 0, " relative  1 * ( 1 + e ) ===  1 " );
	t.truthy( relepsilon( 1 / ( 1 + epsilon ), 1 ) === 0, " relative  1 / ( 1 + e ) ===  1 " );
	t.truthy( relepsilon( 1, 1 * ( 1 + epsilon ) ) === 0, " relative  1     ===  1 * ( 1 + e ) " );
	t.truthy( relepsilon( 1, 1 / ( 1 + epsilon ) ) === 0, " relative  1     ===  1 / ( 1 + e ) " );

	t.truthy( absepsilon( 1 + morethanepsilon, 1 )  >  0, " absolute  1 + e'  >  1 " );
	t.truthy( absepsilon( 1 - morethanepsilon, 1 )  <  0, " absolute  1 - e'  <  1 " );
	t.truthy( absepsilon( 1, 1 + morethanepsilon )  <  0, " absolute  1       <  1 + e' " );
	t.truthy( absepsilon( 1, 1 - morethanepsilon )  >  0, " absolute  1       >  1 - e' " );

	t.truthy( relepsilon( 1 * ( 1 + morethanepsilon ), 1 )  >  0, " relative  1 * ( 1 + e' ) >  1 " );
	t.truthy( relepsilon( 1 / ( 1 + morethanepsilon ), 1 )  <  0, " relative  1 / ( 1 + e' ) <  1 " );
	t.truthy( relepsilon( 1, 1 * ( 1 + morethanepsilon ) )  <  0, " relative  1     <  1 * ( 1 + e' ) " );
	t.truthy( relepsilon( 1, 1 / ( 1 + morethanepsilon ) )  >  0, " relative  1     >  1 / ( 1 + e' ) " );



} );
