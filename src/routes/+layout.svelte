<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/theme.ts'; // Import to initialize theme

	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col bg-body dark:bg-dark-body">
	<Header />

	<main class="mt-20 flex-grow content-center">
		{@render children?.()}
	</main>

	<Footer />
</div>
