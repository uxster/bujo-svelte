<script>
  import Globals from "./components/Globals.svelte";
  import Typography from "./components/Typography.svelte";
  import HomePage from "./pages/HomePage.svelte";
</script>

<Globals />
<Typography />

<main>
  <HomePage />
</main>

<style lang="scss">
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
