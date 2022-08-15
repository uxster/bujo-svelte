<script>
  import Card from "../components/Card.svelte";
  import Modal from "../components/Modal.svelte";
  import { lists, modalOpen } from "../store/store.js";

  let name = "Hester";
</script>

{#if $modalOpen}
  <Modal>hi</Modal>
{/if}

<div class="page-title">
  <h3 class="heading-3 heading-3--center">{name}'s Bullet Journal</h3>
</div>

<div class="list-container">
  {#each $lists as item}
    <Card
      title={item.title}
      color={item.color}
      listitems={item.items}
      highlights={item.highlights}
    />
  {/each}
</div>

<style lang="scss">
  $gutter: 20px;

  .page-title {
    margin-bottom: 70px;
  }

  .list-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: $gutter * 3 $gutter;
  }
</style>
