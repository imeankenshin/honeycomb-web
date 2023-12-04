/**
 * Get the convenient initial of a string
 * @example ```ts
 * getInitial("Hello world"); // "Hw"
 * getInitial("Hello-world"); // "Hw"
 * getInitial("Hello_world"); // "Hw"
 * getInitial("Hello"); // "He"
 * getInitial("Hello world, how are you?"); // "Hwh"
 * getInitial("Hello world, how are you?", 2); // "Hw"
 * ```
 * @param string input string
 */
export function getInitial(string: string, length = 2): string {
  const words = string.split(/[\s_-]/);
  if (words.length === 1) return words[0].slice(0, length);
  return words.reduce((prev, curr) => prev + curr[0], "").slice(0, length);
}
