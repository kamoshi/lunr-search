<script lang="ts">
  import { onMount } from 'svelte';
  import {prepareSearch} from "./lunr";
  import type {Index} from "lunr";
  import Results from "./components/Results.svelte";
  import Search from "./components/Search.svelte";

  let articles: Record<string, Article>;
  let index: Index;
  onMount(async () => [articles, index] = await prepareSearch());

  let result: Article[] = [];
  function search(query: CustomEvent<string>) {
    if (!query.detail) return;
    result = index.search(query.detail).map(result => articles[result.ref]);
  }
</script>

<main class="lunr-app">
  <Search on:query={search} />
  {#if result}
    <Results articles={result} />
  {:else}
    <div class="info">
      Please type search query...
    </div>
  {/if}
</main>
