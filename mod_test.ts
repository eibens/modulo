import { assertEquals } from "https://deno.land/std@0.90.0/testing/asserts.ts";
import { decompose, modulo } from "./mod.ts";

Deno.test("`modulo`: 1 mod 3 -> 1", () => {
  assertEquals(modulo(1, 3), 1);
});
Deno.test("`modulo`: -1 mod 3 -> 2", () => {
  assertEquals(modulo(-1, 3), 2);
});

Deno.test("`decompose`: 7 mod 3 -> (2, 1)", () => {
  assertEquals(decompose(7, 3), [2, 1]);
});
Deno.test("`decompose`: -7 mod 3 -> (-3, 2)", () => {
  assertEquals(decompose(-7, 3), [-3, 2]);
});
