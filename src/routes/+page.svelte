<script lang="ts">
	// Correct usage according to vite-imagetools documentation for `as=picture`
	import main from '$lib/assets/images/home/main.jpg?w=800;1600&format=webp;jpg&as=picture';
</script>

<div class="relative w-full">
	<picture>
		{#each main.sources as source}
			<source srcset={source.srcset} type={source.type} />
		{/each}
		<img src={main.img.src} alt="A main pic" class="h-auto w-full rounded-lg shadow-md" />
	</picture>
	<div class="absolute bottom-5 left-3 md:bottom-20 md:left-25">
		<h1 class="text-xs font-bold text-secondary drop-shadow-lg md:mb-5 md:text-4xl">稻町設計</h1>
		<hr class="my-2 w-[80vw] border border-secondary md:w-[30vw] md:border-2" />
		<p class="w-[79.5vw] text-[0.5rem] text-secondary drop-shadow-lg md:w-[29.5vw] md:text-lg">
			稻町設計有限公司是一家致力於空間美學與生活機能融合的專業設計團隊，成立於2023年，總部位於台北市。我們相信，空間不只是建築的延伸，更是情感與故事的載體。
		</p>
	</div>
</div>
<div class="w-full">
	<p
		class="m-auto mt-10 mb-10 w-[80vw] border border-solid border-primary p-5 text-xs md:w-[60vw] md:p-20 md:pt-10 md:pb-10 md:text-sm"
	>
		當代室內設計強調「以人為本」，不僅追求美感，更重視空間與生活的連結。我們相信，設計不只是形式上的堆疊，而是對居住者需求的理解與回應。透過材質、光線與動線的配置，空間不只是容器，更是情感與記憶的延伸。我們以簡約而不失溫度的語彙，融合機能性與美學，打造能呼吸、有故事的生活場域。
	</p>
</div>
