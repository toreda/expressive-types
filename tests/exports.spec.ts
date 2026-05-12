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

import type {ANY} from '../src/any';
import type {AnyFunc} from '../src/any/func';
import type {AnyObj} from '../src/any/obj';
import type {Arrayable} from '../src/arrayable';
import type {Awaited} from '../src/awaited';
import type {BitMask} from '../src/bit/mask';
import type {Constructor} from '../src/constructor';
import type {Data} from '../src/data';
import type {DeepExpand} from '../src/deep/expand';
import type {DeepPartial} from '../src/deep/partial';
import type {DeepRequired} from '../src/deep/required';
import type {Expand} from '../src/expand';
import type {LiteralToPrimitive} from '../src/literal/to/primitive';
import type {NullOrUndefined} from '../src/null/or/undefined';
import type {Nullable} from '../src/nullable';
import type {Optional} from '../src/optional';
import type {Primitive} from '../src/primitive';
import type {PrimitiveOrConstructor} from '../src/primitive/or/constructor';
import type {Promisable} from '../src/promisable';
import type {Records} from '../src/records';
import type {Stringable} from '../src/stringable';
import type {TypeMap} from '../src/type/map';
import {expectTypeOf} from 'expect-type';

interface Sample {
	key1: string;
	key2: string;
}

class SampleCls {
	public one: string;
	constructor() {
		// empty
		this.one = 'aaaa';
	}
}

describe('Package Exports', () => {
	it(`should export type 'AnyFunc'`, () => {
		expectTypeOf<AnyFunc>().not.toBeAny();
		expectTypeOf<AnyFunc>().not.toBeNever();
	});

	it(`should export type 'AnyObj'`, () => {
		expectTypeOf<AnyObj>().not.toBeAny();
		expectTypeOf<AnyObj>().not.toBeNever();
	});

	it(`should export type 'TypeMap'`, () => {
		expectTypeOf<TypeMap>().not.toBeAny();
		expectTypeOf<TypeMap>().not.toBeNever();
	});

	it(`should export type 'BitMask'`, () => {
		expectTypeOf<BitMask>().not.toBeAny();
		expectTypeOf<BitMask>().not.toBeNever();
	});

	it(`should export type 'ANY'`, () => {
		expectTypeOf<ANY>().toBeAny();
		expectTypeOf<ANY>().not.toBeNever();
	});

	it(`should export type 'Primitive'`, () => {
		expectTypeOf<Primitive>().not.toBeAny();
		expectTypeOf<Primitive>().not.toBeNever();
	});

	it(`should export type 'Constructor'`, () => {
		expectTypeOf<Constructor>().not.toBeAny();
		expectTypeOf<Constructor>().not.toBeNever();
	});

	it(`should export type 'PrimitiveOrConstructor'`, () => {
		expectTypeOf<PrimitiveOrConstructor>().not.toBeAny();
		expectTypeOf<PrimitiveOrConstructor>().not.toBeNever();
	});

	it(`should export type 'LiteralToPrimitive'`, () => {
		expectTypeOf<LiteralToPrimitive<Sample>>().not.toBeAny();
		expectTypeOf<LiteralToPrimitive<Sample>>().not.toBeNever();
	});

	it(`should export type 'DeepRequired'`, () => {
		expectTypeOf<DeepRequired<Sample>>().not.toBeAny();
		expectTypeOf<DeepRequired<Sample>>().not.toBeNever();
	});

	it(`should export type 'DeepPartial'`, () => {
		expectTypeOf<DeepPartial<Sample>>().not.toBeAny();
		expectTypeOf<DeepPartial<Sample>>().not.toBeNever();
	});

	it(`should export type 'NullOrUndefined'`, () => {
		expectTypeOf<NullOrUndefined>().not.toBeAny();
		expectTypeOf<NullOrUndefined>().not.toBeNever();
	});

	it(`should export type 'Records'`, () => {
		expectTypeOf<Records<Sample>>().not.toBeAny();
		expectTypeOf<Records<Sample>>().not.toBeNever();
	});

	it(`should export type 'Arrayable'`, () => {
		expectTypeOf<Arrayable<Sample>>().not.toBeAny();
		expectTypeOf<Arrayable<Sample>>().not.toBeNever();
	});

	it(`should export type 'Optional'`, () => {
		expectTypeOf<Optional<Sample, 'key1'>>().not.toBeAny();
		expectTypeOf<Optional<Sample, 'key1'>>().not.toBeNever();
	});

	it(`should export type 'Nullable'`, () => {
		expectTypeOf<Nullable<Sample>>().not.toBeAny();
		expectTypeOf<Nullable<Sample>>().not.toBeNever();
	});

	it(`should export type 'Expand'`, () => {
		expectTypeOf<Expand<Sample>>().not.toBeAny();
		expectTypeOf<Expand<Sample>>().not.toBeNever();
	});

	it(`should export type 'Awaited'`, () => {
		expectTypeOf<Awaited<Sample>>().not.toBeAny();
		expectTypeOf<Awaited<Sample>>().not.toBeNever();
	});

	it(`should export type 'DeepExpand'`, () => {
		expectTypeOf<DeepExpand<Sample>>().not.toBeAny();
		expectTypeOf<DeepExpand<Sample>>().not.toBeNever();
	});

	it(`should export type 'Promisable'`, () => {
		expectTypeOf<Promisable<SampleCls>>().not.toBeAny();
		expectTypeOf<Promisable<SampleCls>>().not.toBeNever();
	});

	it(`should export type 'Stringable'`, () => {
		expectTypeOf<Stringable>().not.toBeAny();
		expectTypeOf<Stringable>().not.toBeNever();
	});

	it(`should export type 'Data'`, () => {
		expectTypeOf<Data>().not.toBeAny();
		expectTypeOf<Data>().not.toBeNever();
	});
});
