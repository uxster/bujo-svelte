<script>
  import { onMount } from "svelte";
  import { guid } from "../../util/helpers.js";

  export let className;
  export let containerClass;
  export let color;
  export let shape;

  let checked = false;
  let id = null;

  onMount(() => {
    id = guid();
  });
</script>

<div class="input-checkbox {containerClass ? containerClass : ''}">
  <input
    class="input-checkbox__input {className ? className : ''}"
    type="checkbox"
    bind:checked
    {id}
  />
  <label
    for="input-checkbox-{id}"
    on:click={() => (checked = !checked)}
    class="input-checkbox__label input-checkbox__label--{color} input-checkbox__label--{shape} {checked
      ? 'input-checkbox__label--checked'
      : ''}"
  />
</div>

<style lang="scss">
  .input-checkbox {
    color: white;

    input[type="checkbox"] {
      display: none;
    }

    &__label {
      &:before {
        content: "";
        -webkit-appearance: none;
        background-color: transparent;
        border: 1.5px solid white;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
          inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
        padding: 6px;
        display: inline-block;
        position: relative;
        vertical-align: middle;
        cursor: pointer;
        margin-right: 5px;
      }

      &--personal {
        &:before {
          border-color: #4a95e0;
        }
      }

      &--work {
        &:before {
          border-color: #601787;
        }
      }

      &--household {
        &:before {
          border-color: #177c87;
        }
      }

      &--activity {
        &:before {
          border-radius: 50%;
        }
      }

      &--appointment {
        &:before {
          transform: rotate(45deg);
        }
      }

      &--note {
        &:before {
          border-bottom: transparent;
          border-left: transparent;
          border-right: transparent;
          padding-top: 5px;
        }
      }

      &--checked {
        &:after {
          content: "";
          display: block;
          position: absolute;
          top: 2px;
          left: 9px;
          width: 6px;
          height: 14px;
          border: solid #0079bf;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }
      }
    }
  }
</style>
