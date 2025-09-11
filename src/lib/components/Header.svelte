<script lang="ts">
	let isMenuOpen = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<header class="flex h-16 items-center justify-between bg-background p-4 text-primary">
	<a href="/" class="text-lg font-bold">稻町設計</a>

	<!-- Desktop Navigation -->
	<nav class="hidden md:flex">
		<a href="/about" class="px-4">關於我們</a>
		<a href="/projects" class="px-4">專案作品</a>
		<a href="/process" class="px-4">服務流程</a>
		<a href="/contact" class="px-4">聯絡我們</a>
	</nav>

	<!-- Mobile Menu Button -->
	<button class="md:hidden" onclick={toggleMenu} aria-label="Open menu">
		<span class="icon-[mdi--menu] h-6 w-6"></span>
	</button>

	<!-- Mobile Menu -->
	{#if isMenuOpen}
		<div
			class="absolute top-16 right-0 flex w-full flex-col items-center bg-background p-4 md:hidden"
		>
			<a href="/about" class="py-2">關於我們</a>
			<a href="/projects" class="py-2">專案作品</a>
			<a href="/process" class="py-2">服務流程</a>
			<a href="/contact" class="py-2">聯絡我們</a>
		</div>
	{/if}
</header>
