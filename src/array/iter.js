


export function fiter ( i, j, fn ) {
	for ( ; i < j ; ++i ) {
		fn( i );
	}
}

export function biter ( i, j, fn ) {
	while ( --j >= i ) {
		fn( j );
	}
}



