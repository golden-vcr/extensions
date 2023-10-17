<script lang="ts">
  import { onMount } from "svelte"
  import { state, initApplicationState } from "./store";

  onMount(async () => {
    await initApplicationState()
  })
</script>

<main>
  <img src="https://golden-vcr-images.nyc3.digitaloceanspaces.com/0058_a.jpg" alt="tape" />
  <div class="third">
    <h1>Pressure Washers (DeVilbiss Air Power Company)</h1>
    <p>{JSON.stringify($state)}</p>
  </div>
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
