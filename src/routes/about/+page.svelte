<script lang="ts">
	import Inview from '$lib/components/Inview.svelte';
	import { getOptimizedImage } from '$lib/data/image-loader';
	import signature from '$lib/assets/images/about/signature.png';

	// 移除直接的圖片導入，改為從 image-loader 獲取
	const portrait = getOptimizedImage('/src/lib/assets/images/about/portrait.jpg');
</script>

<Inview>
	<div class="m-auto mt-10 mb-10 hidden w-[90vw] text-center md:block">
		<h1 class="mb-3 text-center text-2xl font-bold text-primary">關於我們</h1>
		<hr class="border border-primary" />
	</div>
</Inview>
<div class="relative m-0 block w-full md:flex md:items-center md:justify-around md:p-20">
	{#if portrait && portrait.sources && portrait.img}
		<picture>
			{#if portrait.sources.avif}
				<source srcset={portrait.sources.avif} type="image/avif" />
			{/if}
			{#if portrait.sources.webp}
				<source srcset={portrait.sources.webp} type="image/webp" />
			{/if}
			<img src={portrait.img.src} alt="A portrait" class="block h-auto w-full md:w-[40vw]" />
		</picture>
	{/if}

	<div
		class="absolute top-1/2 left-1/2 m-auto w-[75vw] -translate-1/2 p-0 md:relative md:top-auto md:left-auto md:flex md:h-[60vh] md:w-[40vw] md:translate-none md:items-center md:justify-center md:rounded-2xl md:bg-background"
	>
		<Inview>
			<p class="text-sm text-secondary md:p-20 md:text-base md:text-paragraph">
				稻町設計是道丁與橘子攜手創立的室內設計工作室，始於對空間美學的共同熱愛。道丁擅長利用光影與建築語彙，將結構優勢無痕融入日常場景；橘子憑藉細膩的生活洞察與色彩律動，為每個角落注入詩意與溫度。兩人以人為本，從動線規劃到材質選用，注重每一處細節與使用體驗。他們相信設計是情感的載體，透過嚴謹的專案流程與真摯的客戶溝通，將理念具象化，最終呈現獨一無二的空間體驗。每一次施作，都像是在空白畫布上留下一段專屬生活故事，讓居住者在光影與質感中，重新與空間對話。
			</p>
			<img
				src={signature}
				alt="Signature"
				class="m-auto mt-10 h-auto w-40 border p-10 pt-0 pb-0 hue-rotate-180 invert saturate-200 sepia filter md:absolute md:right-10 md:bottom-0 md:m-0 md:w-60 md:translate-y-55 md:transform md:border-none md:p-0 md:filter-none"
			/>
		</Inview>
	</div>
</div>
