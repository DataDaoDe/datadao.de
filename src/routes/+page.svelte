<script lang="ts">
  import startWorking from '$lib/assets/start-working-pencils.png';
	import Quote from '$lib/components/theme/Quote.svelte';
</script>


<div class="mx-auto max-w-3xl">
  <img alt="Start sketching" src={startWorking} data-testid="mainImage" />

  <Quote index={0}/>
</div>