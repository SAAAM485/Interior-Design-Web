<script lang="ts">
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import 'swiper/css';
	import type { Swiper as SwiperType } from 'swiper';

	import { projects } from '$lib/data/projects';
	import { getOptimizedImage } from '$lib/data/image-loader';

	let swiperInstance: SwiperType | null = null;

	onMount(() => {
		swiperInstance = new Swiper('.swiper-container', {
			loop: true,
			breakpoints: {
				320: {
					slidesPerView: 1.2,
					spaceBetween: 20,
					centeredSlides: true
				},
				900: {
					slidesPerView: 2.66,
					spaceBetween: 30
				}
			}
		});
	});
</script>

<!-- Height is now dynamic, so md:h-[60vh] is removed -->
<div class="swiper-container ml-2 overflow-hidden md:w-full md:p-20 md:pt-0 md:pb-0">
	<div class="swiper-wrapper py-8">
		{#each projects as project}
			{@const image = getOptimizedImage(project.coverImage)}
			<!-- h-full is removed -->
			<a
				href="/projects/{project.slug}"
				class="swiper-slide group block overflow-hidden rounded-sm bg-gray-800 md:rounded-xl"
			>
				<!-- w-full is restored, h-full is removed. Height is now driven by width + aspect ratio. -->
				<div class="relative aspect-[3/4] w-full overflow-hidden">
					{#if image && image.sources && image.img}
						<picture>
							{#if image.sources.avif}
								<source srcset={image.sources.avif} type="image/avif" />
							{/if}
							{#if image.sources.webp}
								<source srcset={image.sources.webp} type="image/webp" />
							{/if}
							<img
								src={image.img.src}
								alt={project.title}
								class="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
							/>
						</picture>
					{/if}
					<div
						class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
					></div>
					<h3 class="absolute bottom-0 left-0 p-6 text-2xl font-bold text-white">
						{project.title}
					</h3>
				</div>
			</a>
		{/each}
	</div>
</div>
