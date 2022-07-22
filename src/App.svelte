<script lang="ts">
  import { onMount } from 'svelte';
  import getImages from './services/images.ts';
  import FilterSearch from './lib/FilterSearch.svelte';
  import Notification from './lib/Notification.svelte';

  let apiResponse = {
    'yeet': [],
    'happy': []
  }
  let photos = [];
  let visible: boolean = true;
  let message: string = "";

  const fetchImages = async (type, category) => {
    try {
      if (apiResponse[category].length) {
        photos = apiResponse[category];
        return photos;
      }

      visible = false;
      photos = await getImages(type, category);
      apiResponse[category] = [...photos];
      visible = true;
    } catch (e) {
      message = "Error loading data";
    }
  }

  onMount(() => fetchImages('sfw', 'yeet'));
</script>

<main>
  <h1>Anime Photos</h1>
  <Notification message={message} />
  <FilterSearch fetchImages={fetchImages} visible={visible} />
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