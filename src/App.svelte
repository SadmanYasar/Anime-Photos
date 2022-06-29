<script lang="ts">
  import { onMount } from 'svelte';
  import getImages from './services/images.ts';
  import FilterSearch from './lib/FilterSearch.svelte';

  let apiResponse = {
    'yeet': [],
    'happy': []
  }
  let photos = [];

  const fetchImages = async (type, category) => {
    if(apiResponse[category].length) {
      photos = apiResponse[category];
      return photos;
    }

    photos = await getImages(type, category);
    apiResponse[category] = [...photos];
  }

  onMount(() => fetchImages('sfw', 'yeet'));
</script>

<main>
  <h1>Anime Photos</h1>
  <FilterSearch fetchImages={fetchImages}/>
  {#each photos as photo(photo)}
    <div>
      <img src={photo} width="100%" height="50%" alt="anime-image">
    </div>
  {:else}
    <p>...loading</p>
  {/each}
</main>

<style>
</style>