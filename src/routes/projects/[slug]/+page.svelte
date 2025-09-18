<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import { getOptimizedImage } from '$lib/data/image-loader';

	const { project } = $page.data as PageData;
</script>

<div class="container mx-auto px-8 py-12 md:px-30">
	<h1
		class="mb-4 text-4xl font-bold tracking-tight text-secondary sm:text-5xl dark:text-dark-secondary"
	>
		{project.title}
	</h1>
	<p class="mb-12 text-xl text-secondary dark:text-dark-secondary">{project.description}</p>

	<div class="masonry-container columns-1 gap-6 md:columns-2">
		{#each project.images as imageInfo}
			{@const image = getOptimizedImage(imageInfo.src)}
			<figure class="masonry-item mb-6 break-inside-avoid">
				<div
					class="{imageInfo.orientation === 'portrait'
						? 'aspect-[3/4]'
						: 'aspect-[4/3]'} bg-muted overflow-hidden rounded-md"
				>
					<picture class="block h-full w-full">
						{#if image?.sources?.avif}
							<source srcset={image.sources.avif} type="image/avif" />
						{/if}
						{#if image?.sources?.webp}
							<source srcset={image.sources.webp} type="image/webp" />
						{/if}
						<img
							src={image.img.src}
							alt={imageInfo.alt}
							class="block h-full w-full object-cover"
							loading="lazy"
						/>
					</picture>
				</div>
				{#if imageInfo.alt}
					<figcaption
						class="mt-2 text-center text-sm text-paragraph md:text-left dark:text-dark-paragraph"
					>
						{imageInfo.alt}
					</figcaption>
				{/if}
			</figure>
		{/each}
	</div>
</div>
