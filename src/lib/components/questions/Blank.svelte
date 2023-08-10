<script lang="ts">
  export let answers: string[];
  export let showAnswers = false;
</script>

{#if showAnswers}
  {#each answers as answer}
    <span class="blank answer">{answer}</span><span>, </span>
  {/each}
{:else}
<span class="blank">____</span>
{/if}