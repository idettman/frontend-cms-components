import buble from 'rollup-plugin-buble';

export default {
	entry: 'src/app.js',
	dest: 'bin/edit-blog-item.js',
	format: 'iife',
	exports: 'none',
	plugins: [
		buble({
			modules: false
		})
	]
}
