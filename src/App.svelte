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

<section class="lunr">
  <Search on:query={search} />
  {#if result}
    <Results articles={result} />
  {/if}
</section>

<style lang="scss">
  .lunr {
    width: 50em;
    margin: 0 auto;
  }
</style>
