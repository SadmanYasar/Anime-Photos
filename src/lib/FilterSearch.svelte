<script lang="ts">
  let type, category;
  export let fetchImages, visible;

  const handleSubmit = () => {
    fetchImages(type, category);
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div id="selections">
  <select bind:value={type}>
    <option selected value='sfw'>SFW</option>
    <option value='nsfw'>NSFW</option>
  </select>
  {#if type === 'sfw'}
    <select bind:value={category}>
      <option selected value='yeet'>YEET</option>
      <option value='happy'>HAPPY</option>
    </select>
  {:else}
    <p id='blush-emoji'>😳</p>
  {/if}
  </div>
  <button
    style="display: {(type === 'nsfw' || visible === false) ? 'none' : ''}"
    disabled={type === 'nsfw' || visible === false}  
    type=submit >
    Search
  </button>
</form>

{#if type}
  <p>Selected {type.toUpperCase()}</p>
{/if}

<style> 
  button {
    background-color: red;
  }

  #blush-emoji {
    font-size: 5rem;
  }

  #selections {
    padding: 2rem;
  }
</style>
