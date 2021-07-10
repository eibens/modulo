# [modulo]

> [modulo] implements the mathematical [modulo operation] in TypeScript for
> [Deno].

[![License][license-shield]](LICENSE) [![Deno doc][deno-doc-shield]][deno-doc]
[![Deno module][deno-land-shield]][deno-land]
[![Github tag][github-shield]][github] [![Build][build-shield]][build]
[![Code coverage][coverage-shield]][coverage]

# Motivation

JavaScript has no native support for true modulo. The `%` operator works as
modulo for positive numbers, but not negative ones. For example, `-1 % 3 = -1`
compared to `-1 mod 3 = 2`. If you need the latter, you can either use this
module, or memorize this [modulo formula for JavaScript]:

```
x mod n = ((x % n) + n) % n
```

# [mod.ts]

The `modulo` function calculates `m = x mod n`:

```ts
import { modulo } from "https://deno.land/x/modulo/mod.ts";

const x = -1;
const n = 3;
const m = modulo(x, n);

const test = m === 2;
if (!test) throw new Error();
```

The `quotient` function calculates `q = floor(x / n)`.

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

[modulo]: #
[mod.ts]: mod.ts
[Deno]: https://deno.land
[modulo operation]: https://en.wikipedia.org/wiki/Modulo_operation
[modulo formula for JavaScript]: https://web.archive.org/web/20090717035140if_/javascript.about.com/od/problemsolving/a/modulobug.htm
[github]: https://github.com/eibens/modulo
[github-shield]: https://img.shields.io/github/v/tag/eibens/modulo?label&logo=github
[coverage-shield]: https://img.shields.io/codecov/c/github/eibens/modulo?logo=codecov&label
[license-shield]: https://img.shields.io/github/license/eibens/modulo?color=informational
[coverage]: https://codecov.io/gh/eibens/modulo
[build]: https://github.com/eibens/modulo/actions/workflows/ci.yml
[build-shield]: https://img.shields.io/github/workflow/status/eibens/modulo/ci?logo=github&label
[deno-doc]: https://doc.deno.land/https/deno.land/x/modulo/mod.ts
[deno-doc-shield]: https://img.shields.io/badge/doc-informational?logo=deno
[deno-land]: https://deno.land/x/modulo
[deno-land-shield]: https://img.shields.io/badge/x/modulo-informational?logo=deno&label
