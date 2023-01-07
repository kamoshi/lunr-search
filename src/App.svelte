<script lang="ts">
  import {createIndex} from "./lunr";

  let data = 'dwadw';

  const test: Article[] = [
    {
      title: 'Test',
      content: 'aa',
      url: 'http://localhost:8080',
    },
    {
      title: 'Test',
      content: 'Content',
      url: 'http://localhost:8081',
    }
  ]

  function onSearch() {
    const index = createIndex(test);
    const result = index.search('Test');
    console.log(result);
  }
</script>

<main>
  <h1>Hello {data}!</h1>
  <input type="text" bind:value={data}>
  <button on:click={onSearch}>Search</button>
</main>

<style>

</style>