<script lang="ts">
	import TestImage from '$lib/components/TestImage.svelte';
	import Inview from '$lib/components/Inview.svelte';
	// Correct usage according to vite-imagetools documentation for `as=picture`
	import main from '$lib/assets/images/home/main.jpg?w=800;1600&format=webp;jpg&as=picture';
	import sPortrait from '$lib/assets/images/about/portrait.jpg?w=400;600;1200&flop&format=webp;jpg&as=picture';
	import bottom from '$lib/assets/images/home/bottom.jpg?w=800;1600&format=webp;jpg&as=picture';
	import portrait1 from '$lib/assets/images/home/portrait1.jpg?w=400;800&format=webp;jpg&as=picture';
	import portrait2 from '$lib/assets/images/home/portrait2.jpg?w=400;800&format=webp;jpg&as=picture';
</script>

<TestImage />
<div class="relative w-full">
	<picture>
		{#each main.sources as source}
			<source srcset={source.srcset} type={source.type} />
		{/each}
		<img src={main.img.src} alt="A main pic" class="hidden h-auto w-full md:block" />
	</picture>
	<picture>
		{#each portrait1.sources as source}
			<source srcset={source.srcset} type={source.type} />
		{/each}
		<img src={portrait1.img.src} alt="A main pic" class="m-0 block h-auto w-full md:hidden" />
	</picture>
	<Inview>
		<div class="absolute bottom-15 left-5 md:bottom-20 md:left-25">
			<h1 class="text-sm font-bold text-secondary drop-shadow-lg md:mb-5 md:text-4xl">稻町設計</h1>
			<hr class="my-2 w-[80vw] border border-secondary md:w-[30vw] md:border-2" />
			<p class="w-[79.5vw] text-xs text-secondary drop-shadow-lg md:w-[29.5vw] md:text-lg">
				稻町設計有限公司是一家致力於空間美學與生活機能融合的專業設計團隊，成立於2023年，總部位於台北市。我們相信，空間不只是建築的延伸，更是情感與故事的載體。
			</p>
		</div>
	</Inview>
</div>
<Inview>
	<div class="relative m-0 w-full text-center md:mt-20 md:mb-20">
		<picture>
			{#each portrait2.sources as source}
				<source srcset={source.srcset} type={source.type} />
			{/each}
			<img src={portrait2.img.src} alt="A main pic" class="m-0 block h-auto w-full md:hidden" />
		</picture>
		<p
			class="absolute top-1/2 left-1/2 w-[80vw] -translate-1/2 border border-solid border-secondary p-5 text-xs text-secondary md:relative md:top-auto md:left-auto md:m-auto md:w-[60vw] md:translate-none md:border-paragraph md:p-20 md:pt-10 md:pb-10 md:text-base md:text-paragraph"
		>
			當代室內設計強調「以人為本」，不僅追求美感，更重視空間與生活的連結。我們相信，設計不只是形式上的堆疊，而是對居住者需求的理解與回應。透過材質、光線與動線的配置，空間不只是容器，更是情感與記憶的延伸。我們以簡約而不失溫度的語彙，融合機能性與美學，打造能呼吸、有故事的生活場域。
		</p>
	</div>
</Inview>
<Inview>
	<div class="hidden md:flex md:w-full md:items-center md:justify-between">
		<picture>
			{#each sPortrait.sources as source}
				<source srcset={source.srcset} type={source.type} />
			{/each}
			<img src={sPortrait.img.src} alt="A main pic" class="h-auto w-[16vw]" />
		</picture>
		<picture>
			{#each sPortrait.sources as source}
				<source srcset={source.srcset} type={source.type} />
			{/each}
			<img src={sPortrait.img.src} alt="A main pic" class="h-auto w-[16vw]" />
		</picture>
		<picture>
			{#each sPortrait.sources as source}
				<source srcset={source.srcset} type={source.type} />
			{/each}
			<img src={sPortrait.img.src} alt="A main pic" class="h-auto w-[16vw]" />
		</picture>
		<picture>
			{#each sPortrait.sources as source}
				<source srcset={source.srcset} type={source.type} />
			{/each}
			<img src={sPortrait.img.src} alt="A main pic" class="h-auto w-[16vw]" />
		</picture>
		<picture>
			{#each sPortrait.sources as source}
				<source srcset={source.srcset} type={source.type} />
			{/each}
			<img src={sPortrait.img.src} alt="A main pic" class="h-auto w-[16vw]" />
		</picture>
		<picture>
			{#each sPortrait.sources as source}
				<source srcset={source.srcset} type={source.type} />
			{/each}
			<img src={sPortrait.img.src} alt="A main pic" class="h-auto w-[16vw]" />
		</picture>
	</div>
</Inview>

<Inview>
	<div class="relative m-0 md:mt-25 md:mb-25 md:flex md:justify-between">
		<div
			class="absolute top-1/2 left-1/2 -translate-1/2 justify-center text-center md:relative md:top-auto md:left-auto md:flex md:w-[60vw] md:translate-none md:flex-col md:items-center"
		>
			<Inview>
				<button
					class="text-xs font-bold text-secondary drop-shadow-lg md:mb-5 md:border md:border-paragraph md:p-20 md:pt-5 md:pb-5 md:text-xl md:text-primary md:drop-shadow-none"
					>專案作品</button
				>
				<hr
					class="my-2 w-[80vw] border border-secondary md:mb-5 md:w-[40vw] md:border md:border-paragraph"
				/>
				<p
					class="m-auto w-[79.5vw] text-[0.5rem] text-secondary drop-shadow-lg md:mb-5 md:w-[35vw] md:text-base md:text-paragraph md:drop-shadow-none"
				>
					當空間不再只是容器，而是情感與日常的延伸，設計成了一種生活的語言。在光影與材質之間尋找平衡，讓每一個角落蘊含細膩的溫度與節奏。無論是靜謐的居所或充滿動態的商業場域，每一件作品都是對生活美學的回應。進入作品之中，感受空間如何訴說屬於你的故事。
				</p>
			</Inview>
		</div>

		<picture>
			{#each sPortrait.sources as source}
				<source srcset={source.srcset} type={source.type} />
			{/each}
			<img src={sPortrait.img.src} alt="A main pic" class="h-auto w-[100vw] md:w-[40vw]" />
		</picture>
	</div>
</Inview>
<Inview>
	<picture>
		{#each bottom.sources as source}
			<source srcset={source.srcset} type={source.type} />
		{/each}
		<img src={bottom.img.src} alt="A main pic" class="mt-10 h-auto w-[100vw] md:mt-25 md:mb-15" />
	</picture>
</Inview>
