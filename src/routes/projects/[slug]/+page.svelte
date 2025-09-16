<script lang="ts">
  import { page } from '$app/stores';
  import type { PageData } from './$types';
  import { getOptimizedImage } from '$lib/data/image-loader';

  const { project } = ($page.data as PageData);
</script>

<div class="container mx-auto px-4 py-12">
  <h1 class="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{project.title}</h1>
  <p class="mb-12 text-xl text-gray-600">{project.description}</p>

  <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
    {#each project.images as imageInfo}
      {@const imageUrl = getOptimizedImage(imageInfo.src)}
      <div class="flex flex-col gap-2">
        {#if imageUrl && typeof imageUrl === 'string'}
          <div class="overflow-hidden rounded-lg shadow-lg">
            <img 
              src={`${imageUrl}?w=1200&format=webp`}
              alt={imageInfo.alt}
              class="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        {/if}
        <p class="text-center text-sm text-gray-500">{imageInfo.alt}</p>
      </div>
    {/each}
  </div>
</div>
