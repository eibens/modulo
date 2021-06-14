# [modulo]

> [modulo] implements the mathematical [modulo operation] in TypeScript for
> [Deno].

[![deno.land mod](https://img.shields.io/badge/deno.land-modulo-lightgrey.svg?logo=deno)](https://deno.land/x/modulo)
[![deno.land doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/modulo/mod.ts)
![tag](https://img.shields.io/github/v/tag/eibens/modulo)
![MIT license](https://img.shields.io/github/license/eibens/modulo)
![CI](https://github.com/eibens/modulo/workflows/ci/badge.svg)
[![Code coverage](https://img.shields.io/codecov/c/github/eibens/modulo)](https://codecov.io/gh/eibens/modulo)

# Motivation

JavaScript has no native support for true modulo. The `%` operator works as
modulo for positive numbers, but not negative ones. For example, `-1 % 3 = -1`
compared to `-1 mod 3 = 2`. If you need the latter, you can either use this
module, or memorize this [modulo formula for JavaScript]:

```
x mod n = ((x % n) + n) % n
```

# Documentation

[modulo] exposes a TypeScript API for [Deno]. It consists of the [mod.ts]
module, which exports the `modulo` function, the complementary `quotient`
function, and the `decompose` function.

## [mod.ts]

The `modulo` function calculates `m = x mod n`:

```ts
import { modulo } from "https://deno.land/x/modulo/mod.ts";

const x = -1;
const n = 3;
const m = modulo(x, n);

const test = m === 2;
if (!test) throw new Error();
```

The `quotient` function calculates `q = floor(q / n)`.

```ts
import { modulo, quotient } from "https://deno.land/x/modulo/mod.ts";

const x = -1;
const n = 3;
const q = quotient(x, n);

const test = q === -1;
if (!test) throw new Error();
```

The `decompose` function calculates `(q, m)`. `q`, `m`, and `n` together define
the original value `x = q * n + m`:

```ts
import { decompose } from "https://deno.land/x/modulo/mod.ts";

const x = -1;
const n = 3;
const [q, m] = decompose(x, n);

const test = x == q * n + m;
if (!test) throw new Error();
```

# That's it!

- Repository: [eibens/modulo on GitHub]

[modulo]: #
[mod.ts]: mod.ts
[Deno]: https://deno.land
[modulo operation]: https://en.wikipedia.org/wiki/Modulo_operation
[modulo formula for JavaScript]: https://web.archive.org/web/20090717035140if_/javascript.about.com/od/problemsolving/a/modulobug.htm
[eibens/modulo on GitHub]: https://github.com/eibens/modulo
