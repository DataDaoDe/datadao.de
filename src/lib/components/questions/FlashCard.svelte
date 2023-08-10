<script lang="ts">

  let showFront = true;

  const flip = () => {
    console.log(showFront)
    showFront = !showFront;
  }
</script>

<div class="FlashCard border px-2">
  <div class="FlashCard--front flex flex-col" class:hidden={!showFront}>
    <slot name="front" />
  </div>
  <div class="FlashCard--back" class:hidden={showFront}>
    <slot name="back" />
  </div>

  <div class="FlashCard--commands">
    <button on:click={flip} class="px-1 border border-black">Flip</button>
  </div>
</div>