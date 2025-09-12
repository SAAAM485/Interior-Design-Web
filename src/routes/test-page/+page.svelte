<script lang="ts">
  console.log('--- TEST PAGE SCRIPT IS RUNNING ---');
  const message = "This is a test page.";
</script>

<div class="p-8 container mx-auto">
  <h1 class="text-3xl font-bold text-green-600">Test Page Loaded Successfully</h1>
  <p class="mt-4 text-lg">{message}</p>
  <p class="mt-2 text-sm text-gray-500">If you can see this, the SvelteKit server is working correctly.</p>
</div>
