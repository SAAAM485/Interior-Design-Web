<script lang="ts">
  let { page } = $props();
  const { slug } = page.params;
</script>

<div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold">Project Details: {slug}</h1>
</div>
