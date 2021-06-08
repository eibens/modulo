# modulo

> **modulo** defines the mathematical [modulo operation] in TypeScript for
> [Deno].
> <br/> — [eibens/modulo on GitHub]

[![deno.land mod](http://img.shields.io/badge/deno.land-modulo-lightgrey.svg?logo=deno)](https://deno.land/x/modulo)
[![deno.land doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/modulo/mod.ts)
![tag](https://img.shields.io/github/v/tag/eibens/modulo)
![MIT license](https://img.shields.io/github/license/eibens/modulo)
![CI](https://github.com/eibens/modulo/workflows/ci/badge.svg)
[![Code coverage](https://img.shields.io/codecov/c/github/eibens/modulo)](https://codecov.io/gh/eibens/modulo)

## Motivation

JavaScript has no native support for true modulo. The `%` operator works as
modulo for positive numbers, but not negative ones. For example, `-1 % 3 = -1`
compared to `-1 mod 3 = 2`. If you need the latter, you can either use this
module, or memorize this [modulo formula for JavaScript]:

```
n mod m = ((n % m) + m) % m
```

## [mod.ts]

The `modulo` function calculates _`p` = `n` mod `m`_:

```ts
import { modulo } from "./mod.ts";

const n = -1;
const m = 3;
const p = modulo(n, m);

const test = p === 2;
if (!test) throw new Error();
```

The `quotient` function calculates _`q` = floor(`q` / `m`)_.

```ts
import { modulo, quotient } from "./mod.ts";

const n = -1;
const m = 3;
const q = quotient(n, m);

const test = q === -1;
if (!test) throw new Error();
```

The `decompose` function calculates _(`q`, `p`)_. `q`, `m`, and `p` together
define the original value `n` = `q` * `m` + `p`:

```ts
import { decompose } from "./mod.ts";

const n = -1;
const m = 3;
const [q, p] = decompose(n, m);

const test = n == q * m + p;
if (!test) throw new Error();
```

[mod.ts]: mod.ts
[Deno]: https://deno.land
[modulo operation]: https://en.wikipedia.org/wiki/Modulo_operation
[eibens/modulo on GitHub]: https://github.com/eibens/modulo
[modulo formula for JavaScript]: https://web.archive.org/web/20090717035140if_/javascript.about.com/od/problemsolving/a/modulobug.htm
