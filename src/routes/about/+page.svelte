<script lang="ts">
  import abstractPainting from "$lib/assets/abstract-painting.jpeg"
	import Quote from "$lib/components/theme/Quote.svelte";
</script>

<svelte:head>
  <title>About me</title>
</svelte:head>

<div class="flex flex-col">

  <img src={abstractPainting} alt="Abstract painting" />

  <article class="prose prose-xl prose-slate">

    <h2 class="mt-5">Just an Explorer</h2>

    <hr class="my-4" />
    
    <p>
    My name is John and I'm a software engineer and artist; also just another ape wandering around this planet so don't take me too seriously. In my free time, I enjoy applying quantitative methods to help improve and make sense of the world around me. I'm also passionate about education and learning and spend a lot of my free time exploring how modern technology can combine with human psychology and biology to create optimal learning and educational experiences. Of course, I fail a lot in my endeavours and make tons of mistakes, but I guess that's to be expected and it does spawn a nice feeling when something works and the world really has been improved or your understanding has increased in some significant way.
    </p>

    <p>
    I guess I'm somewhat of a nerd. I love books, films and games but mainly just great storytelling and engaging pieces of art. At one time in my life I wanted to be an concept artist and had a lot of fun as a would-be designer.
    </p>

    <p>
    I like detailed discussions and getting others exited about scientific discovery and quantitative fields as well - especially if it has something to do with applied mathematics, artificial intelligence or statistics.
    </p>

    <p>
    If you'd like to talk to me about anything just hit me up on one of my social media accounts - I'll prolly be munching on banana somewhere :)
    </p>

  </article>

  <Quote index={1} />
</div>