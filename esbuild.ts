import esbuild from 'esbuild';
import {dtsPlugin} from 'esbuild-plugin-d.ts';

(async () => {
	console.info(`Running ESBuild..`);

	await esbuild.build({
		bundle: false,
		outdir: './dist',
		platform: 'node',
		entryPoints: ['./src/**/*'],
		plugins: [dtsPlugin()]
	});
})();
