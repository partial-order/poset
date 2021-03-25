import test from 'ava';

import {minima} from "../../src/index.js";

import {sort} from '@aureooms/js-insertion-sort';
import {alloc, iota} from '@aureooms/js-array';
import {shuffle} from '@aureooms/js-random';
import {increasing} from '@aureooms/js-compare';

const divides = (a, b) => b % a === 0;
const norel = (_a, _b) => false;

test('minima 1', (t) => {
	const a = [1, 2, 3, 4, 6, 12];

	shuffle(a, 0, a.length);

	const min = minima(divides, a, 0, a.length);

	t.is(min, 1, 'minima set has cardinality 1');

	t.is(a[0], 1, 'minimum is 1');
});

test('minima 2,3', (t) => {
	const a = [1, 2, 3, 4, 6, 12];

	const i = 1;

	const j = a.length;

	shuffle(a, i, j);

	const min = minima(divides, a, i, j);

	t.is(min - i, 2, 'minima set has cardinality 2');

	sort(increasing, a, i, min);

	t.is(a[i + 0], 2, '1st minimum is 2');
	t.is(a[i + 1], 3, '2nd minimum is 3');
});

test('minima totally unordered set', (t) => {
	const n = 1000;

	const a = alloc(n);

	iota(a, 0, n, 0);

	shuffle(a, 0, n);

	const min = minima(norel, a, 0, n);

	t.deepEqual(min, n, 'minima set has cardinality n');
});
