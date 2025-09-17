<script lang="ts">
	import logo from '$lib/assets/images/logo.png';
	import { theme } from '$lib/theme.ts';
	let isMenuOpen = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<header
	class="fixed top-0 left-0 z-2 flex h-16 w-full items-center justify-between bg-background p-3 pr-5 pl-5 text-primary md:p-10 md:pr-20 md:pl-20 dark:bg-dark-background dark:text-dark-primary"
>
	<div class="flex items-center gap-5">
		<img src={logo} alt="Logo" class="h-10 w-10" />
		<a href="/" class="text-xl font-bold md:text-3xl">稻町設計</a>
	</div>

	<!-- Desktop Navigation -->
	<nav class="hidden items-center md:flex">
		<a href="/about" class="px-4">關於我們</a>
		<a href="/projects" class="px-4">專案作品</a>
		<a href="/process" class="px-4">服務流程</a>
		<a href="/contact" class="px-4">聯絡我們</a>
		<button onclick={theme.toggle} class="ml-4" aria-label="Toggle dark mode">
			{#if $theme === 'dark'}
				<span class="icon-[mdi--white-balance-sunny] h-6 w-6"></span>
			{:else}
				<span class="icon-[mdi--weather-night] h-6 w-6"></span>
			{/if}
		</button>
	</nav>

	<!-- Mobile Menu Button -->
	<button class="md:hidden" onclick={toggleMenu} aria-label="Open menu">
		<span class="icon-[mdi--menu] h-6 w-6"></span>
	</button>

	<!-- Mobile Menu -->
	{#if isMenuOpen}
		<div
			class="absolute top-15 right-0 z-1 flex w-full flex-col items-center bg-background p-4 text-primary md:hidden dark:bg-dark-background dark:text-dark-primary"
		>
			<a href="/about" onclick={toggleMenu} class="py-2">關於我們</a>
			<a href="/projects" onclick={toggleMenu} class="py-2">專案作品</a>
			<a href="/process" onclick={toggleMenu} class="py-2">服務流程</a>
			<a href="/contact" onclick={toggleMenu} class="py-2">聯絡我們</a>
			<button
				onclick={() => {
					theme.toggle();
					toggleMenu();
				}}
				class="mt-4"
				aria-label="Toggle dark mode"
			>
				{#if $theme === 'dark'}
					<span class="icon-[mdi--white-balance-sunny] h-6 w-6"></span>
				{:else}
					<span class="icon-[mdi--weather-night] h-6 w-6"></span>
				{/if}
			</button>
		</div>
	{/if}
</header>
