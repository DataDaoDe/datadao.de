<script lang="ts">
  
  const quotes = [
    '"The only true wisdom is knowing you know nothing." - Socrates',
    '"The journey of a thousand miles begins with a single step." - Lao Tzu',
    '"When I let go of what I am, I become what I might be." - Lao Tzu',
    '"True love is born from understanding." - The Buddha'
  ]

  export let index = Math.floor(Math.random() * quotes.length)

  let quote = quotes[index];
</script>

<div class="Quote prose prose-xl prose-slate text-center my-4">
  <p>{quote}</p>
</div>