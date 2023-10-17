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
</style>
