# modulo

[modulo](#) implements the mathematical [modulo operation] in TypeScript for
[Deno](https://deno.land).

<!-- badges -->

[![License](https://img.shields.io/github/license/eibens/modulo?color=informational)](LICENSE)
[![deno.land/x](https://img.shields.io/badge/x/modulo-informational?logo=deno&label)](https://deno.land/x/modulo)
[![Repository](https://img.shields.io/github/v/tag/eibens/modulo?label&logo=github)](https://github.com/eibens/modulo)
[![ci](https://github.com/eibens/modulo/actions/workflows/ci.yml/badge.svg)](https://github.com/eibens/modulo/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/eibens/modulo/branch/master/graph/badge.svg?token=OV98O91EJ1)](https://codecov.io/gh/eibens/modulo)

<!-- /badges -->

# Motivation

JavaScript has no native support for true modulo. The `%` operator works as
modulo for positive numbers, but not negative ones. For example, `-1 % 3 = -1`
compared to `-1 mod 3 = 2`. If you need the latter, you can either use this
module, or memorize this [modulo formula for JavaScript]:

```
x mod n = ((x % n) + n) % n
```

# Usage

The `modulo` function calculates `m = x mod n`:

```ts
import { modulo } from "https://deno.land/x/modulo/mod.ts";

const x = -1;
const n = 3;
const m = modulo(x, n);

console.assert(m === 2);
```

The `quotient` function calculates `q = floor(x / n)`.

```ts
import { quotient } from "https://deno.land/x/modulo/mod.ts";

const x = -1;
const n = 3;
const q = quotient(x, n);

console.assert(q === -1);
```

The `decompose` function calculates `(q, m)`. `q`, `m`, and `n` together define
the original value `x = q * n + m`:

```ts
import { decompose } from "https://deno.land/x/modulo/mod.ts";

const x = -1;
const n = 3;
const [q, m] = decompose(x, n);

console.assert(x == q * n + m);
```

[modulo operation]: https://en.wikipedia.org/wiki/Modulo_operation
[modulo formula for JavaScript]: https://web.archive.org/web/20090717035140if_/javascript.about.com/od/problemsolving/a/modulobug.htm
