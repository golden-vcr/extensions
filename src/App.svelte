<script lang="ts">
  import { onMount } from "svelte"
  import { state, initApplicationState } from "./store";

  onMount(async () => {
    await initApplicationState()
  })
</script>

<main>
{#if $state.mode === 'screening'}
  <img src={$state.tape.images[0].url} alt="tape" />
  <div class="third">
    <h1>{$state.tape.title}</h1>
  </div>
{/if}
</main>

<style>
  main {
    width: 100%;
    height: 100%;
    padding: 5vh;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: left;
  }
  .third {
    position: absolute;
    left: 10vw;
    right: 0;
    bottom: 0;
    height: 30vh;
    display: flex;
    flex-direction: column;
  }
  h1 {
    width: fit-content;
    padding: 1rem 2rem;
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>
