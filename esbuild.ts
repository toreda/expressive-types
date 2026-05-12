import esbuild from 'esbuild';

(async () => {
	console.info(`Running ESBuild..`);

	await esbuild.build({
		bundle: false,
		outdir: './dist',
		platform: 'node',
		entryPoints: ['./src/**/*']
	});
})();
