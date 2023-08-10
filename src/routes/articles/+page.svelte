<script lang="ts">
  import typewriterOnWoodImage from "$lib/assets/typewriter-on-wood.jpeg"
</script>

<svelte:head>
  <title>Articles</title>
</svelte:head>

<div class="flex flex-col">

  <img src={typewriterOnWoodImage} alt="Typewriter on wood" />

  <article class="prose prose-xl prose-slate">
    <h2 class="mt-5">Articles</h2>

    <hr class="my-4" />

    <ul class="list-disc">
      <li>
        <a href="/articles/all/2023/openness-in-design">Openness in design</a>
      </li>
    </ul>
  </article>
</div>