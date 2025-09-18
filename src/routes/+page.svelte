<script lang="ts">
	import Inview from '$lib/components/Inview.svelte';
	import { getOptimizedImage } from '$lib/data/image-loader';

	// 移除直接的圖片導入，改為從 image-loader 獲取
	const main = getOptimizedImage('/src/lib/assets/images/home/main.jpg');
	const sPortrait = getOptimizedImage('/src/lib/assets/images/about/portrait.jpg');
	const bottom = getOptimizedImage('/src/lib/assets/images/home/bottom.jpg');
	const portrait1 = getOptimizedImage('/src/lib/assets/images/home/portrait1.jpg');
	const portrait2 = getOptimizedImage('/src/lib/assets/images/home/portrait2.jpg');
</script>

<div class="relative w-full">
	{#if main && main.sources && main.img}
		<picture>
			{#if main.sources.avif}
				<source srcset={main.sources.avif} type="image/avif" />
			{/if}
			{#if main.sources.webp}
				<source srcset={main.sources.webp} type="image/webp" />
			{/if}
			<img src={main.img.src} alt="A main pic" class="hidden h-auto w-full md:block" />
		</picture>
	{/if}
	{#if portrait1 && portrait1.sources && portrait1.img}
		<picture>
			{#if portrait1.sources.avif}
				<source srcset={portrait1.sources.avif} type="image/avif" />
			{/if}
			{#if portrait1.sources.webp}
				<source srcset={portrait1.sources.webp} type="image/webp" />
			{/if}
			<img src={portrait1.img.src} alt="A main pic" class="m-0 block h-auto w-full md:hidden" />
		</picture>
	{/if}

	<div class="absolute bottom-15 left-5 md:bottom-20 md:left-25">
		<h1 class="text-base font-bold text-mb drop-shadow-lg md:mb-5 md:text-4xl">稻町設計</h1>
		<hr class="my-2 w-[80vw] border border-mb md:w-[30vw] md:border-2" />
		<p class="w-[79.5vw] text-sm text-mb drop-shadow-lg md:w-[29.5vw] md:text-lg">
			稻町設計有限公司是一家致力於空間美學與生活機能融合的專業設計團隊，成立於2023年，總部位於台北市。我們相信，空間不只是建築的延伸，更是情感與故事的載體。
		</p>
	</div>
</div>
<Inview>
	<div class="relative m-0 w-full text-center md:mt-20 md:mb-20">
		{#if portrait2 && portrait2.sources && portrait2.img}
			<picture>
				{#if portrait2.sources.avif}
					<source srcset={portrait2.sources.avif} type="image/avif" />
				{/if}
				{#if portrait2.sources.webp}
					<source srcset={portrait2.sources.webp} type="image/webp" />
				{/if}
				<img src={portrait2.img.src} alt="A main pic" class="m-0 block h-auto w-full md:hidden" />
			</picture>
		{/if}
		<p
			class="absolute top-1/2 left-1/2 w-[80vw] -translate-1/2 border border-solid border-mb p-5 text-sm text-mb md:relative md:top-auto md:left-auto md:m-auto md:w-[60vw] md:translate-none md:border-paragraph md:p-20 md:pt-10 md:pb-10 md:text-base md:text-paragraph md:dark:border-dark-paragraph md:dark:text-dark-paragraph"
		>
			當代室內設計強調「以人為本」，不僅追求美感，更重視空間與生活的連結。我們相信，設計不只是形式上的堆疊，而是對居住者需求的理解與回應。透過材質、光線與動線的配置，空間不只是容器，更是情感與記憶的延伸。我們以簡約而不失溫度的語彙，融合機能性與美學，打造能呼吸、有故事的生活場域。
		</p>
	</div>
</Inview>
<Inview>
	<div class="hidden md:flex md:w-full md:items-center md:justify-between">
		{#if sPortrait && sPortrait.sources && sPortrait.img}
			<picture>
				{#if sPortrait.sources.avif}
					<source srcset={sPortrait.sources.avif} type="image/avif" />
				{/if}
				{#if sPortrait.sources.webp}
					<source srcset={sPortrait.sources.webp} type="image/webp" />
				{/if}
				<img src={sPortrait.img.src} alt="A main pic" class="h-auto w-[16vw]" />
			</picture>
			<picture>
				{#if sPortrait.sources.avif}
					<source srcset={sPortrait.sources.avif} type="image/avif" />
				{/if}
				{#if sPortrait.sources.webp}
					<source srcset={sPortrait.sources.webp} type="image/webp" />
				{/if}
				<img src={sPortrait.img.src} alt="A main pic" class="h-auto w-[16vw]" />
			</picture>
			<picture>
				{#if sPortrait.sources.avif}
					<source srcset={sPortrait.sources.avif} type="image/avif" />
				{/if}
				{#if sPortrait.sources.webp}
					<source srcset={sPortrait.sources.webp} type="image/webp" />
				{/if}
				<img src={sPortrait.img.src} alt="A main pic" class="h-auto w-[16vw]" />
			</picture>
			<picture>
				{#if sPortrait.sources.avif}
					<source srcset={sPortrait.sources.avif} type="image/avif" />
				{/if}
				{#if sPortrait.sources.webp}
					<source srcset={sPortrait.sources.webp} type="image/webp" />
				{/if}
				<img src={sPortrait.img.src} alt="A main pic" class="h-auto w-[16vw]" />
			</picture>
			<picture>
				{#if sPortrait.sources.avif}
					<source srcset={sPortrait.sources.avif} type="image/avif" />
				{/if}
				{#if sPortrait.sources.webp}
					<source srcset={sPortrait.sources.webp} type="image/webp" />
				{/if}
				<img src={sPortrait.img.src} alt="A main pic" class="h-auto w-[16vw]" />
			</picture>
			<picture>
				{#if sPortrait.sources.avif}
					<source srcset={sPortrait.sources.avif} type="image/avif" />
				{/if}
				{#if sPortrait.sources.webp}
					<source srcset={sPortrait.sources.webp} type="image/webp" />
				{/if}
				<img src={sPortrait.img.src} alt="A main pic" class="h-auto w-[16vw]" />
			</picture>
		{/if}
	</div>
</Inview>

<Inview>
	<div class="relative m-0 md:mt-25 md:mb-25 md:flex md:justify-between">
		<div
			class="absolute top-1/2 left-1/2 -translate-1/2 justify-center text-center md:relative md:top-auto md:left-auto md:flex md:w-[60vw] md:translate-none md:flex-col md:items-center"
		>
			<Inview>
				<button
					class="text-base font-bold text-mb drop-shadow-lg md:mb-5 md:border md:border-paragraph md:p-20 md:pt-5 md:pb-5 md:text-xl md:text-paragraph md:drop-shadow-none md:dark:border-dark-paragraph md:dark:text-dark-paragraph"
					>專案作品</button
				>
				<hr
					class="my-2 w-[80vw] border border-mb md:mb-5 md:w-[40vw] md:border md:border-paragraph md:dark:border-dark-paragraph"
				/>
				<p
					class="m-auto w-[79.5vw] text-sm text-mb drop-shadow-lg md:mb-5 md:w-[35vw] md:text-base md:text-paragraph md:drop-shadow-none md:dark:text-dark-paragraph"
				>
					當空間不再只是容器，而是情感與日常的延伸，設計成了一種生活的語言。在光影與材質之間尋找平衡，讓每一個角落蘊含細膩的溫度與節奏。無論是靜謐的居所或充滿動態的商業場域，每一件作品都是對生活美學的回應。進入作品之中，感受空間如何訴說屬於你的故事。
				</p>
			</Inview>
		</div>

		{#if sPortrait && sPortrait.sources && sPortrait.img}
			<picture>
				{#if sPortrait.sources.avif}
					<source srcset={sPortrait.sources.avif} type="image/avif" />
				{/if}
				{#if sPortrait.sources.webp}
					<source srcset={sPortrait.sources.webp} type="image/webp" />
				{/if}
				<img src={sPortrait.img.src} alt="A main pic" class="h-auto w-[100vw] md:w-[40vw]" />
			</picture>
		{/if}
	</div>
</Inview>
<Inview>
	{#if bottom && bottom.sources && bottom.img}
		<picture>
			{#if bottom.sources.avif}
				<source srcset={bottom.sources.avif} type="image/avif" />
			{/if}
			{#if bottom.sources.webp}
				<source srcset={bottom.sources.webp} type="image/webp" />
			{/if}
			<img src={bottom.img.src} alt="A main pic" class="mt-10 h-auto w-[100vw]" />
		</picture>
	{/if}
</Inview>
