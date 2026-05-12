[![Toreda](https://content.toreda.com/logo/toreda-logo.png)](https://www.toreda.com)

[![CI](https://img.shields.io/github/workflow/status/toreda/expressive-types/CI?style=for-the-badge)](https://github.com/toreda/expressive-types/actions)

[![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/toreda/expressive-types/master?style=for-the-badge)](https://github.com/toreda/expressive-types/releases/latest) [![GitHub Release Date](https://img.shields.io/github/release-date/toreda/expressive-types?style=for-the-badge)](https://github.com/toreda/expressive-types/releases/latest) [![GitHub issues](https://img.shields.io/github/issues/toreda/expressive-types?style=for-the-badge)](https://github.com/toreda/expressive-types/issues)

 [![license](https://img.shields.io/github/license/toreda/expressive-types?style=for-the-badge)](https://github.com/toreda/expressive-types/blob/master/LICENSE)

&nbsp;

# `@toreda/expressive-types`

Improve readability, reduce redundancy. Functional &amp; Expressive Types used in [**Toreda**](https://www.toreda.com) packages.

&nbsp;

# **Contents**
- [`@toreda/expressive-types`](#toredaexpressive-types)
- [**Contents**](#contents)
- [Object API](#object-api)
	- [`Resettable`](#resettable)
		- [Example](#example)
	- [`Clearable`](#clearable)
		- [Example](#example-1)
	- [`Stringable`](#stringable)
		- [Example](#example-2)
- [**Functional Types**](#functional-types)
	- [`DeepRequired<T>`](#deeprequiredt)
	- [`Primitive`](#primitive)
		- [Import](#import)
		- [Use](#use)
	- [`Stringable`](#stringable-1)
		- [**Import**](#import-1)
		- [**Use**](#use-1)
- [**Expressive Types**](#expressive-types)
	- [**`BitMask`**](#bitmask)
		- [**Import**](#import-2)
		- [**Use**](#use-2)
- [Install](#install)
	- [Yarn](#yarn)
	- [NPM](#npm)
- [Legal](#legal)
	- [License](#license)
	- [Copyright](#copyright)
	- [Website](#website)

&nbsp;

# Object API

## `Resettable`
Interface indicating implementer provides a `reset` method.

### Example
```typescript
import type {Resettable} from '@toreda/expressive-types';

class MyObj implements Resettable {
	public reset(): void {
		console.log('boop');
	}
}

const o = new MyObj();
o.reset();
```

## `Clearable`
Interface indicating implementer provides a `clear()` method. Callers expect `true` to be returned when `clear` call is successful and `false` when it was not successful, or there was nothing to clear.

### Example
```typescript
import type {Clearable} from '@toreda/expressive-types';

class MyObj implements Clearable {
	public clear(): boolean {
		console.log('boop');

		return true;
	}
}

const o = new MyObj();
const result = o.clear();
```


## `Stringable`
Interface indicating implementer provides a `toString()` method which returns the object contents as a string. Typically used for serialization although usage may vary.

### Example
```typescript
import type {Stringable} from '@toreda/expressive-types';

class MyObj implements Stringable {
	public a: string;
	public b: string;

	constructor() {
		this.a = 'aaaa';
		this.b = 'bbbb';
	}

	public toString(): string | null {
		const o = {
			a: this.a,
			b: this.b
		};

		let result: string | null = null;
		try {
			result =  JSON.stringify(o);
		} catch (e){
			if (e instanceof Error) {
				console.log(`toString exception: ${e.message}.`);
			}
		}

		return result;
	}
}

const o = new MyObj();
const result = o.clear();
```


# **Functional Types**

Types & aliases provide shorthand to reduce code duplication and simplify statements.

&nbsp;
## `DeepRequired<T>`
Recursively require all properties on object & children.

&nbsp;
## `Primitive`
Implementer's type is any JavaScript primitive.

### Import
```typescript
import {Primitive} from '@toreda/expressive-types'
```

### Use
```typescript
const myValue: Primitive = null;
```

&nbsp;
## `Stringable`
Implementer's contents can be converted to a string by calling `toString()`.

### **Import**
```typescript
import {Stringable} from '@toreda/expressive-types'
```

### **Use**
```typescript
export class MyClass implements Stringable {
	public toString(): string {
		return 'stringified_contents_here';
	}
}
```

**Example**
```typescript
// Simple generic mapping. When used only once, exporting a type is overkill, but when used repeatedly
// using a common definition reduces chances for mistakes and reduces line lengths.
export type Data<T> = Record<string, T | T[] | null>;
```

&nbsp;

# **Expressive Types**
Express value intent &amp; purpose with type definitions.

&nbsp;
## **`BitMask`**

### **Import**
```typescript
import {BitMask} from '@toreda/expressive-types'
```

### **Use**
```typescript
// Declare and initialize number while also expressing the value's purpose.
let mask: BitMask = 0x1;

// Becomes more clear when expecting values:
function useValue(mask: BitMask): void {
	...
}
// versus:
function useValue(mask: number): void {
	...
}
```


**Example**
```typescript
// Expressive Type alias.
export type BigId = string;

// BigId is an expressive alias replacing the use of 'string' for id's type. It makes no
// functional difference, however id types often impose character and length limitations meaning
// the value cannot be an arbitrary string. BigId gives the caller context for what string values
// are actually valid & accepted.
function validateId(id: BigId): void {
	...
}
```

&nbsp;

# Install

## Yarn
```bash
$ yarn add @toreda/expressive-types --dev
```


## NPM
```bash
$ yarn add @toreda/expressive-types --D
```

&nbsp;
# Legal

## License
[MIT](LICENSE) &copy; Toreda, Inc.


## Copyright
Copyright &copy; 2019 - 2026 Toreda, Inc. All Rights Reserved.


## Website
Toreda's company website can be found at [toreda.com](https://www.toreda.com)
