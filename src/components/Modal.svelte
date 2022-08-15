<script>
  import { fly, fade } from "svelte/transition";
  import { modalOpen } from "../store/store.js";
</script>

<div
  id="background"
  transition:fade={{ duration: 250 }}
  on:click={() => ($modalOpen = !$modalOpen)}
/>

<div id="modal" transition:fly={{ duration: 250, y: 50 }}>
  <slot />
</div>

<style>
  #background {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
  }

  #modal {
    position: fixed;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    filter: drop-shadow(0 0 20px #333);
    padding: 10px;
  }
</style>
