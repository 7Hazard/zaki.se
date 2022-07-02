import cloudflare from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';

export default {
	preprocess: preprocess(),
	kit: {
		adapter: cloudflare({
			// any esbuild options
		})
	}
};