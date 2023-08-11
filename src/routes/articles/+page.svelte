<script lang="ts">
  import typewriterOnWoodImage from "$lib/assets/typewriter-on-wood.jpeg"
	import type { PageData } from "./$types";

  export let data: PageData;

  let searchValue: string;

  $: filteredArticles = data.articles.filter((v) => {
    if (!searchValue || searchValue.length == 0) {
      return true;
    }
    let sv = searchValue.trim()
    if (v.title.includes(sv)) {
      return true;
    }
    if (v.tags.some((v) => v.includes(sv))) {
      return true;
    }
  })
</script>

<svelte:head>
  <title>Articles</title>
  <meta name="description" content="search and list all articles" />
</svelte:head>

<div class="flex flex-col">

  <img src={typewriterOnWoodImage} alt="Typewriter on wood" />

  <section class="prose prose-xl prose-slate">

    <h2 class="mt-5">Articles</h2>

    <hr class="my-4" />

    <input
      type="text" bind:value={searchValue}
      placeholder="filter..."
      class="border px-2 w-full"/>

    <ul class="list-disc">
      {#each filteredArticles as article}
        <li>
          <a href={article.url}>
            <span>{article.title}</span>
          </a>
        </li>
      {/each}
    </ul>
  </section>
</div>