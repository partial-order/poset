:spider_web: [@aureooms/js-poset](https://aureooms.github.io/js-poset)
==

<p align="center">
<a href="https://commons.wikimedia.org/wiki/File:Birkhoff120.svg">
<img alt="Distributive lattice of the divisors of 120" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Birkhoff120.svg" width="600">
</a><br/>
<a href="https://en.wikipedia.org/wiki/User:David_Eppstein">
User:David_Eppstein
</a>
/
<a href="https://en.wikipedia.org/wiki/Public_domain">Public Domain</a>
</p>

Partially ordered sets algorithms for JavaScript.
See [docs](https://aureooms.github.io/js-poset).
Parent is [@aureooms/js-algorithms](https://github.com/aureooms/js-algorithms).

```js
import {minima} from '@aureooms/js-poset';
import {increasing} from '@aureooms/js-compare';

const a = [4, 12, 2, 6, 3];

const divides = (a, b) => b % a === 0;
const n = minima(divides, a, 0, a.length); // 2
a.slice(0, n).sort(increasing); // 2 3

const norel = (_a, _b) => false;
minima(norel, a, 0, a.length); // a.length
```

[![License](https://img.shields.io/github/license/aureooms/js-poset.svg)](https://raw.githubusercontent.com/aureooms/js-poset/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-poset.svg)](https://www.npmjs.org/package/@aureooms/js-poset)
[![Build](https://img.shields.io/travis/aureooms/js-poset/main.svg)](https://travis-ci.org/aureooms/js-poset/branches)
[![Dependencies](https://img.shields.io/david/aureooms/js-poset.svg)](https://david-dm.org/aureooms/js-poset)
[![Dev dependencies](https://img.shields.io/david/dev/aureooms/js-poset.svg)](https://david-dm.org/aureooms/js-poset?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-poset.svg)](https://github.com/aureooms/js-poset/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-poset.svg)](https://www.npmjs.org/package/@aureooms/js-poset)

[![Code issues](https://img.shields.io/codeclimate/issues/aureooms/js-poset.svg)](https://codeclimate.com/github/aureooms/js-poset/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/aureooms/js-poset.svg)](https://codeclimate.com/github/aureooms/js-poset/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/aureooms/js-poset/main.svg)](https://codecov.io/gh/aureooms/js-poset)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/aureooms/js-poset.svg)](https://codeclimate.com/github/aureooms/js-poset/trends/technical_debt)
[![Documentation](https://aureooms.github.io/js-poset/badge.svg)](https://aureooms.github.io/js-poset/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-poset)](https://bundlephobia.com/result?p=@aureooms/js-poset)
