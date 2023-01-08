<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher<{ query: string }>();

  let query = '';
  function onSearch() {
    if (query) dispatch('query', query);
  }
</script>

<div class="lunr-search">
  <input type="text" bind:value={query}>
  <button on:click={onSearch}>Search</button>
</div>
