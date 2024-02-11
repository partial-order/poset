import {splitmix64, nextFloat64} from '@entropy-source/pseudo-random';
import {_fisheryates, _shuffle, _randint} from '@randomized/random';

export const entropy = (seed) => {
	const prng = splitmix64(seed);
	const random = () => nextFloat64(prng);
	const randint = _randint(random);
	const sample = _fisheryates(randint);
	const shuffle = _shuffle(sample);
	return {
		prng,
		random,
		randint,
		sample,
		shuffle,
	};
};
