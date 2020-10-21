

/**
 * Hypothesis :
 *   - A is sorted in increasing order
 *   - B is sorted in increasing order
 *   - |A| > 0
 *   - |B| > 0
 */

export function _3sum_n2 (A, ai, aj, B, bi, bj, C, ci, cj, fn) {

	var hi, lo, a, b, c, v;

	for (; ci < cj; ++ci) {
		lo = ai;
		hi = bj - 1;

		do {

			a = A[lo];
			b = B[hi];
			c = C[ci];
			v = a + b;

			if (-c === v) fn(a, b, c);

			if (-c < v) --hi;
			else ++lo;

		} while (lo < aj && hi >= bi);
	}

}

