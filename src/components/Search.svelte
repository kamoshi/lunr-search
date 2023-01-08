<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher<{ query: string }>();

  let query = '';
  function onSearch() {
    if (query) dispatch('query', query);
  }

  function onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') onSearch()
  }
</script>

<div class="lunr-search">
  <input type="text" bind:value={query} on:keydown={onKeydown}>
  <button class="lunr-search__button" on:click={onSearch}>Search</button>
</div>

<style lang="scss">
  .lunr-search {
    display: flex;
    justify-content: center;

    &__button {
      margin-left: 1em;
    }
  }
</style>
