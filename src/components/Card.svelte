<script>
  import BujoItem from "./BujoItem.svelte";
  import Fa from "svelte-fa";
  import { faPlus } from "@fortawesome/free-solid-svg-icons";
  import { modalOpen } from "../store/store.js";

  export let title;
  export let color;
  export let listitems;
  export let highlights;
</script>

<div class="card">
  <div class="card__header">
    <div class="card__title">
      <h4 class="heading-4 heading-4--{color} heading-4--script">{title}</h4>
    </div>
    <div class="card__actions" on:click={() => ($modalOpen = !$modalOpen)}>
      <Fa icon={faPlus} class="icon icon--plus" />
    </div>
  </div>

  <div class="card__content">
    <ul class="card__list-items">
      {#each listitems as li, i}
        <li class="card__item">
          <BujoItem content={li.content} shape={li.type} color={li.kind} />
        </li>
      {/each}
    </ul>

    {#if highlights.length}
      <ul class="card__highlights">
        {#each highlights as highlight}
          <li>{highlight.toUpperCase()}</li>
        {/each}
      </ul>
    {/if}
  </div>
</div>

<style lang="scss">
  .card {
    display: flex;
    flex-direction: column;
    border: 1px solid white;
    border-radius: 10px;
    padding: 0 20px;

    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__title {
      margin-top: -37px;
      padding: 9px 9px 29px 9px;
      background: black;
    }

    &__actions {
      margin-top: -48px;
      padding: 4px 6px;
      background: black;
      border: 1px solid white;
      border-radius: 3px;

      &:hover {
        background: white;

        :global(.icon) {
          color: black;
        }
      }
    }

    &__content {
      border-top: 1px solid black;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      color: white;
    }

    &__list-items {
      list-style: none;
      margin: 0;
      padding: 0;
      flex: 1;
    }

    &__item {
    }

    &__highlights {
      padding: 20px 20px;
      border-top: 1px solid white;
      margin: 40px -20px 0 -20px;
      display: flex;
      flex-direction: column;
    }
  }
</style>
