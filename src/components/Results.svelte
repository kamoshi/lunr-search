<script lang="ts">
  export let articles: Article[];
</script>

<div class="lunr-results">
  {#each articles as article}
    <a href={article.url}>
      <span class="title">
        {article.title}
      </span>
      <span class="url">
        {article.url}
      </span>
    </a>
  {/each}
</div>
