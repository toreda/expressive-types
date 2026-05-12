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

import {series} from 'gulp';

import {ESLint} from 'eslint';
import {deleteAsync} from 'del';
import esbuild from 'esbuild';
import {dtsPlugin} from 'esbuild-plugin-d.ts';

const srcPatterns = ['src/**.ts', 'src/**/*.ts'];

// Lint runs by default. Set BUILD_LINT=false (e.g. via `cross-env`) to skip.
const lintEnabled = process.env.BUILD_LINT !== 'false';

async function cleanDist() {
	return deleteAsync('dist/**', {
		force: true,
		dryRun: false
	});
}

async function linter() {
	if (!lintEnabled) {
		console.log('Skipping lint (BUILD_LINT=false).');
		return;
	}

	const eslint = new ESLint();
	const results = await eslint.lintFiles(srcPatterns);
	const formatter = await eslint.loadFormatter('stylish');
	const output = formatter.format(results);

	if (output) {
		console.log(output);
	}

	if (results.some((r) => r.errorCount > 0)) {
		throw new Error('ESLint reported errors.');
	}
}

async function buildSrc() {
	await esbuild.build({
		bundle: false,
		outdir: './dist',
		platform: 'node',
		entryPoints: ['./src/**/*'],
		plugins: [dtsPlugin()]
	});
}

exports.default = series(cleanDist, linter, buildSrc);
