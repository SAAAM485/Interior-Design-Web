<script lang="ts">
	import Inview from '$lib/components/Inview.svelte';
	import ProjectCarousel from '$lib/components/ProjectCarousel.svelte';
</script>

<Inview>
	<div class="m-auto mt-10 mb-10 hidden w-[90vw] text-center md:block">
		<h1 class="mb-3 text-center text-2xl font-bold text-secondary">專案作品</h1>
		<hr class="border border-secondary" />
	</div>
</Inview>
<Inview>
	<ProjectCarousel />
</Inview>
