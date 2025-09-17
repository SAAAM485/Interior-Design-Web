<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import { getOptimizedImage } from '$lib/data/image-loader';

	const { project } = $page.data as PageData;
</script>

<div class="container mx-auto px-4 py-12">
	<h1 class="mb-4 text-4xl font-bold tracking-tight text-secondary sm:text-5xl">{project.title}</h1>
	<p class="mb-12 text-xl text-secondary">{project.description}</p>

	<div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
		{#each project.images as imageInfo}
			{@const image = getOptimizedImage(imageInfo.src)}
			<div class="flex flex-col gap-2">
				{#if image && image.sources && image.img}
					<div class="overflow-hidden">
						<picture>
							{#if image.sources.avif}
								<source srcset={image.sources.avif} type="image/avif" />
							{/if}
							{#if image.sources.webp}
								<source srcset={image.sources.webp} type="image/webp" />
							{/if}
							<img
								src={image.img.src}
								alt={imageInfo.alt}
								class="h-full w-full object-cover"
								loading="lazy"
							/>
						</picture>
					</div>
				{/if}
				<p class="text-center text-sm text-paragraph">{imageInfo.alt}</p>
			</div>
		{/each}
	</div>
</div>
