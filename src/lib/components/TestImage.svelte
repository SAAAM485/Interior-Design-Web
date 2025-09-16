<script lang="ts">
  import testImage from '$lib/assets/images/home/main.jpg?w=100&format=webp&as=url';
</script>

<div>
  <h2>Test Image Component</h2>
  <p>This image should be 100px wide and WebP.</p>
  <img src={testImage} alt="Test Image" width="100" />
  <p>Raw import object: {JSON.stringify(testImage)}</p>
</div>
