<script lang="ts">
	// Correct usage according to vite-imagetools documentation for `as=picture`
	import portrait from '$lib/assets/images/about/portrait.jpg?w=400;600;1200&flop&format=webp;jpg&as=picture';
</script>

<h1 class="text-2xl font-bold mb-4">About Us</h1>

<div class="max-w-xl container mx-auto p-4">
	<h2 class="text-xl font-semibold mb-2">Image Optimization Demo</h2>

	<picture>
		{#each portrait.sources as source}
			<source srcset={source.srcset} type={source.type} />
		{/each}
		<img src={portrait.img.src} alt="A portrait" class="rounded-lg shadow-md h-auto w-full" />
	</picture>

	<div class="p-4 rounded-lg bg-gray-50 mt-4 border">
		<p>This image is now being processed and optimized by <code>vite-imagetools</code>.</p>
	</div>
</div>
