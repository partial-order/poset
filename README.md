:spider_web: [@partial-order/poset](https://partial-order.github.io/poset)
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
See [docs](https://partial-order.github.io/poset).
Parent is [js-algorithms](https://github.com/make-github-pseudonymous-again/js-algorithms).

```js
import {minima} from '@partial-order/poset';
import {increasing} from '@total-order/primitive';

const a = [4, 12, 2, 6, 3];

const divides = (a, b) => b % a === 0;
const n = minima(divides, a, 0, a.length); // 2
a.slice(0, n).sort(increasing); // 2 3

const norel = (_a, _b) => false;
minima(norel, a, 0, a.length); // a.length
```

[![License](https://img.shields.io/github/license/partial-order/poset.svg)](https://raw.githubusercontent.com/partial-order/poset/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@partial-order/poset.svg)](https://www.npmjs.org/package/@partial-order/poset)
[![Tests](https://img.shields.io/github/workflow/status/partial-order/poset/ci:test?event=push&label=tests)](https://github.com/partial-order/poset/actions/workflows/ci:test.yml?query=branch:main)
[![Dependencies](https://img.shields.io/david/partial-order/poset.svg)](https://david-dm.org/partial-order/poset)
[![Dev dependencies](https://img.shields.io/david/dev/partial-order/poset.svg)](https://david-dm.org/partial-order/poset?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/partial-order/poset.svg)](https://github.com/partial-order/poset/issues)
[![Downloads](https://img.shields.io/npm/dm/@partial-order/poset.svg)](https://www.npmjs.org/package/@partial-order/poset)

[![Code issues](https://img.shields.io/codeclimate/issues/partial-order/poset.svg)](https://codeclimate.com/github/partial-order/poset/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/partial-order/poset.svg)](https://codeclimate.com/github/partial-order/poset/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/partial-order/poset/main.svg)](https://codecov.io/gh/partial-order/poset)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/partial-order/poset.svg)](https://codeclimate.com/github/partial-order/poset/trends/technical_debt)
[![Documentation](https://partial-order.github.io/poset/badge.svg)](https://partial-order.github.io/poset/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@partial-order/poset)](https://bundlephobia.com/result?p=@partial-order/poset)
