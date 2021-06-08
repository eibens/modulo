# modulo

> **modulo** defines the mathematical [modulo operation] in TypeScript for
> [Deno].
> <br/> — [eibens/modulo on GitHub]

![Tag](https://img.shields.io/github/v/tag/eibens/modulo)
![License](https://img.shields.io/github/license/eibens/modulo)
[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/modulo/mod.ts)
![CI](https://github.com/eibens/modulo/workflows/ci/badge.svg)
[![Code coverage](https://img.shields.io/codecov/c/github/eibens/modulo)](https://codecov.io/gh/eibens/modulo)

## Motivation

JavaScript has no native support for true modulo. The `%` operator works as
modulo for positive numbers, but not negative ones. For example, `-1 % 3 = -1`
compared to `1 mod 3 = 2`. If you need the latter, you can use this module, or
you can memorize this formula:

```
n mod m = ((n % m) + m) % m
```

## [mod.ts]

The `modulo` function calculates the _modulo_ of a number `n` modulo `m`:

```ts
import { modulo } from "./mod.ts";

const n = 1;
const m = 3;
const p = modulo(n, m);
console.assert(p === 2);
```

The `quotient` function calculates the _quotient_ `q`, which together with `m`
and `p` defines the original value `n`:

```ts
import { modulo, quotient } from "./mod.ts";

const n = 1;
const m = 3;
const q = quotient(n, m);
const p = modulo(n, m);
console.assert(q * m + p === n);
```

The `decompose` function calculates both the _quotient_ and _modulo_:

```ts
import { decompose } from "./mod.ts";

const n = 1;
const m = 3;
const [q, p] = decompose(n, m);
console.assert(q * m + p === n);
```

[mod.ts]: mod.ts
[Deno]: https://deno.land
[modulo operation]: https://en.wikipedia.org/wiki/Modulo_operation
[eibens/modulo on GitHub]: https://github.com/eibens/modulo
