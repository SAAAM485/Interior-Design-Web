<script lang="ts">
  let { page } = $props();
  const { slug } = page.params;
</script>

<h1 class="text-2xl font-bold">Project Details: {slug}</h1>
