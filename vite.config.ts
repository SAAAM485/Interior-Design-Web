import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
	plugins: [imagetools(), tailwindcss(), sveltekit()],
	server: {
		mimeTypes: {
			'.webp': 'image/webp'
		}
	}
});
