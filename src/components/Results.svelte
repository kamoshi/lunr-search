<script lang="ts">
  export let articles: Article[];
</script>

<ul class="lunr-results">
  {#each articles as article}
    <li class="lunr-results__article">
      <a href={article.url}>
        <span class="lunr-results__title">
          {article.title}
        </span>
          <span class="lunr-results__url">
          {article.url}
        </span>
      </a>
    </li>
  {/each}
</ul>

<style lang="scss">
  .lunr-results {
    margin-top: 2em;

    &__article {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
