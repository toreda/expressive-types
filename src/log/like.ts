/**
 *	MIT License
 *
 *	Copyright (c) 2019 - 2026 Toreda, Inc.
 *
 *	Permission is hereby granted, free of charge, to any person obtaining a copy
 *	of this software and associated documentation files (the "Software"), to deal
 *	in the Software without restriction, including without limitation the rights
 *	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *	copies of the Software, and to permit persons to whom the Software is
 *	furnished to do so, subject to the following conditions:

 * 	The above copyright notice and this permission notice shall be included in all
 * 	copies or substantial portions of the Software.
 *
 * 	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * 	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * 	SOFTWARE.
 *
 */

/**
 * Minimal logger contract used internally by this package. Decouples internals
 * from any specific logging implementation.
 *
 * The shape is the structural intersection of `console` and `@toreda/log`'s
 * `Log`: any object exposing these five level-named methods satisfies it.
 * That includes the global `console` object, a `@toreda/log` `Log` instance,
 * and any custom logger shaped the same way.
 *
 * Methods take any arguments and the return value is ignored. Implementations
 * that return a Promise (e.g. `@toreda/log`) are accepted because their return
 * type is assignable to `void`; fire-and-forget is the only supported usage
 * inside this package — callers must not await results.
 *
 * Note: `log(level, ...args)` is intentionally excluded. The signatures of
 * `console.log` (message-first) and `Log.log` (level-first) conflict, so a
 * common contract is not safely expressible.
 *
 * @category Logging
 */
export interface LogLike {
	error(...args: unknown[]): void;
	warn(...args: unknown[]): void;
	info(...args: unknown[]): void;
	debug(...args: unknown[]): void;
	trace(...args: unknown[]): void;
}

/**
 * Structural runtime check: does `value` satisfy `LogLike`?
 *
 * @category Logging
 */
export function logLike(value: unknown): value is LogLike {
	if (!value || typeof value !== 'object') {
		return false;
	}

	const candidate = value as Record<string, unknown>;
	return (
		typeof candidate.error === 'function' &&
		typeof candidate.warn === 'function' &&
		typeof candidate.info === 'function' &&
		typeof candidate.debug === 'function' &&
		typeof candidate.trace === 'function'
	);
}
