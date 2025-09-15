<script lang="ts">
	import { inview } from '$lib/actions/inview';

	let { children, animation = 'fade-in-up' } = $props();
	let visible = $state(false);
</script>

<div
	use:inview
	oninview={() => (visible = true)}
	onoutview={() => (visible = false)}
	class={visible ? `animate-${animation}` : 'opacity-0'}
>
	{@render children?.()}
</div>
