<script lang="ts">
  import Blank from "./Blank.svelte";

  export let question: string;
  export let answers: string[][];

  const parts = question.split("____").filter((x) => x.length > 0)
  let showAnswer = false;

  console.log(parts);

  const toggleAnswer = () => {
    showAnswer = !showAnswer;
  }
</script>

<div class="FillTheBlank border px-2">
  <div class="FillTheBlank--sentence flex flex-col">
    <p>
    {#each parts as part, i}
      {part}<Blank answers={answers[i]} showAnswers={showAnswer} />
    {/each}
  </p>
  </div>

  <div class="FillTheBlank--commands">
    <button on:click={toggleAnswer} class="px-1 border border-black">Answer</button>
  </div>
</div>