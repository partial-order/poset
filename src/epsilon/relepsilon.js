
export function __relepsilon__ ( epsilon ) {


	return function ( a, b ) {

		var r;

		if ( b === 0 ) {
			return a;
		}

		else if ( a === 0 ) {
			return -b;
		}

		else {

			r = a / b - 1;

			return r < -epsilon ? -1 : r > epsilon ? 1 : 0;

		}

	};

}

