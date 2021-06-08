/**
 * Calculates the value of a number `n` modulo `m`.
 *
 * @param n is the original number.
 * @param m is the number used for the modulo.
 * @returns the resulting modulo.
 */
export function modulo(n: number, m: number): number {
  return ((n % m) + m) % m;
}

/**
 * Calculates the quotient of a number `n` modulo `m`.
 *
 * @param n is the original number.
 * @param m is the number used for the modulo.
 * @returns the resulting quotient.
 */

export function quotient(n: number, m: number): number {
  return Math.floor(n / m);
}

/**
 * Decomposes a number `n` into its quotient and modulo.
 *
 * @param n is the original number.
 * @param m is the number used for the modulo.
 * @returns the resulting quotient and modulo as a pair (in that order).
 */
export const decompose = (n: number, m: number): [number, number] => {
  return [quotient(n, m), modulo(n, m)];
};
