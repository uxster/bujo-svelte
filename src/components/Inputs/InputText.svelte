<!-- <script>
  import { onMount } from "svelte";
  import { guid } from "../../util/helpers.js";

  export let className = null;
  export let placeholder = null;

  let rawvalue = null;
  let id = null;

  onMount(() => {
    id = guid();
  });
</script>

<div class="input-text">
  <label class="input-text__label" for="input-{id}">
    {placeholder ? placeholder : ""}
  </label>
  <input
    id="input-{id}"
    class="input-text__input {className ? className : ''}"
    bind:value={rawvalue}
    type="text"
  />
</div>

<style lang="scss">
  .input-text,
  .input-text * {
    box-sizing: border-box;
  }

  .input-text {
    position: relative;
    display: block;
    cursor: text;

    &__label {
      position: absolute;
      font-size: 1em;
      top: 25%;
      left: 0;
    }

    &__input {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      padding-top: 0.75em;
      font-size: 1em;
    }
  }

  //   .svelte-inputs-input-placeholder.focus > label {
  //     top: 0;
  //     font-size: 0.75em;
  //     bottom: auto;
  //   }

  //   .svelte-inputs-input-placeholder
  //     > .svelte-inputs-input-placeholder
  //     > input.disabled {
  //     cursor: not-allowed;
  //     background-color: #bbb;
  //   }
</style> -->
