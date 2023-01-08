<script lang="ts">
  export let articles: Article[];
</script>

<div class="lunr-results">
  {#each articles as article}
    <a class="lunr-results__article" href={article.url}>
      <span class="lunr-results__title">
        {article.title}
      </span>
      <span class="lunr-results__url">
        {article.url}
      </span>
    </a>
  {/each}
</div>

<style lang="scss">
  .lunr-results {
    margin-top: 2em;

    &__article {
      display: grid;
      grid-template-columns: 5em 1fr;
    }
    &__title {

    }
    &__url {

    }
  }
</style>
