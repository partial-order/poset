import test from 'ava';

import {sort} from '@comparison-sorting/insertion-sort';
import {range} from '@iterable-iterator/range';
import {increasing} from '@total-order/primitive';

import {entropy} from '../fixtures.js';

import {minima} from '../../src/index.js';

const divides = (a, b) => b % a === 0;
const norel = (_a, _b) => false;

test('minima 1', (t) => {
	const a = [1, 2, 3, 4, 6, 12];

	const seed = [0, 17];
	const {shuffle} = entropy(seed);
	shuffle(a, 0, a.length);

	const min = minima(divides, a, 0, a.length);

	t.is(min, 1, 'minima set has cardinality 1');

	t.is(a[0], 1, 'minimum is 1');
});

test('minima 2,3', (t) => {
	const a = [1, 2, 3, 4, 6, 12];

	const i = 1;

	const j = a.length;

	const seed = [0, 17];
	const {shuffle} = entropy(seed);
	shuffle(a, i, j);

	const min = minima(divides, a, i, j);

	t.is(min - i, 2, 'minima set has cardinality 2');

	sort(increasing, a, i, min);

	t.is(a[i + 0], 2, '1st minimum is 2');
	t.is(a[i + 1], 3, '2nd minimum is 3');
});

test('minima totally unordered set', (t) => {
	const n = 1000;

	const a = Array.from(range(n));

	const seed = [0, 17];
	const {shuffle} = entropy(seed);
	shuffle(a, 0, n);

	const min = minima(norel, a, 0, n);

	t.deepEqual(min, n, 'minima set has cardinality n');
});
