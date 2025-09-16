<script lang="ts">
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import 'swiper/css';
	import type { Swiper as SwiperType } from 'swiper';

	// Import local images
	import img1 from '$lib/assets/images/home/main.jpg';
	import img2 from '$lib/assets/images/home/portrait1.jpg';
	import img3 from '$lib/assets/images/home/portrait2.jpg';
	import img4 from '$lib/assets/images/about/portrait.jpg';
	import img5 from '$lib/assets/images/home/bottom.jpg';

	const projects = [
		{ id: 'project-alpha', title: 'Modern Living Room', img: img1 },
		{ id: 'project-beta', title: 'Cozy Bedroom', img: img2 },
		{ id: 'project-gamma', title: 'Sleek Kitchen', img: img3 },
		{ id: 'project-delta', title: 'Elegant Dining Area', img: img4 },
		{ id: 'project-epsilon', title: 'Minimalist Office', img: img5 }
	];

	let swiperInstance: SwiperType | null = null;

	onMount(() => {
		swiperInstance = new Swiper('.swiper-container', {
			loop: true,
			// Responsive breakpoints
			breakpoints: {
				// when window width is >= 320px (mobile)
				320: {
					slidesPerView: 1,
					spaceBetween: 20
				},
				// when window width is >= 768px (desktop)
				768: {
					slidesPerView: 2,
					spaceBetween: 30
				}
			}
		});
	});
</script>

<div class="swiper-container w-full overflow-hidden">
	<div class="swiper-wrapper py-8">
		{#each projects as project}
			<a href="/projects/{project.id}" class="swiper-slide group block rounded-lg bg-gray-800">
				<div class="relative w-full overflow-hidden rounded-lg aspect-[3/4]">
					<img
						src={project.img}
						alt={project.title}
						class="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
					/>
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
