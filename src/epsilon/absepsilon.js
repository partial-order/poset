

export function __absepsilon__ ( epsilon ) {


	return function ( a, b ) {

		var r;

		r = a - b;

		return r < -epsilon ? -1 : r > epsilon ? 1 : 0;

	};

}

