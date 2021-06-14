/**
 * Calculates the modulo `x mod n`.
 *
 * @param x is the original number.
 * @param n is the divider.
 * @returns the resulting modulo.
 */
export function modulo(x: number, n: number): number {
  return ((x % n) + n) % n;
}

/**
 * Calculates the quotient `floor(x / n)`.
 *
 * @param x is the original number.
 * @param n is the divider.
 * @returns the resulting quotient.
 */
export function quotient(x: number, n: number): number {
  return Math.floor(x / n);
}

/**
 * Calculates the quotient and modulo.
 *
 * @param x is the original number.
 * @param n is the divider.
 * @returns the resulting quotient and modulo as a pair (in that order).
 */
export function decompose(x: number, n: number): [number, number] {
  return [quotient(x, n), modulo(x, n)];
}
