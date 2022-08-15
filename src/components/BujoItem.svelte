<script>
  import { faMinus } from "@fortawesome/free-solid-svg-icons";
  import { onMount } from "svelte";
  import Fa from "svelte-fa";
  import InputCheckbox from "./Inputs/InputCheckbox.svelte";

  export let content;
  export let color;
  export let shape;
</script>

<div class="bujo-item">
  {#if shape === "note"}
    <div class="bujo-item__icon bujo-item__icon--{color}">
      <Fa icon={faMinus} />
    </div>
  {:else}
    <InputCheckbox containerClass="bujo-item__checkbox" {color} {shape} />
  {/if}
  <div class="bujo-item__content">
    {content}
  </div>
</div>

<style lang="scss">
  .bujo-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    &:hover {
      .bujo-item__content {
        background: rgba(255, 255, 255, 0.2);
      }
    }

    &__checkbox {
      margin-right: 10px;
    }

    &__icon {
      color: white;
      margin-right: 16px;

      &--personal {
        color: #4a95e0;
      }

      &--work {
        color: #601787;
      }

      &--household {
        color: #177c87;
      }
    }

    &__content {
    }
  }
</style>
