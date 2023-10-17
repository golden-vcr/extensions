<script lang="ts">
  import { onMount } from "svelte"
  import { state, initApplicationState } from "./store"

  import LowerThird from "./lib/LowerThird.svelte"

  onMount(async () => {
    await initApplicationState()
  })
</script>

<main>
  <div class="frame">
    <LowerThird />
  </div>
</main>

<style>
  main {
    width: 100%;
    height: 100%;
  }
  .frame {
    width: 100vw;
    height: 56.25vw;
    max-height: 100vh;
    max-width: 177.78vh;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .test-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
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
