<style global lang="scss">
  svg.svelte {
    display: inline;
  }

  p {
    color: white;
    font-size: 18px;
  }

  h1 {
    color: white;
    font-size: 70px;
    margin: 0;
  }

  h2 {
    color: white;
    font-size: 60px;
    margin: 0;
  }

  h3 {
    color: white;
    font-size: 50px;
    margin: 0;
  }

  h4 {
    color: white;
    font-size: 40px;
    margin: 0;
  }

  h5 {
    font-size: 30px;
    margin: 0;
  }

  h6 {
    color: white;
    font-size: 20px;
    margin: 0;
  }

  @mixin heading-modifiers {
    &--purple {
      color: purple;
    }

    &--blue {
      color: blue;
    }

    &--magenta {
      color: magenta;
    }

    &--turquoise {
      color: turquoise;
    }

    &--thin {
      font-weight: 300;
    }

    &--bold {
      font-weight: 700;
    }

    &--capitalize {
      text-transform: capitalize;
    }

    &--uppercase {
      text-transform: uppercase;
    }

    &--script {
      font-family: "Dancing Script", cursive;
    }

    &--center {
      text-align: center;
    }
  }

  .heading-1 {
    @extend h1;
    @include heading-modifiers;
  }

  .heading-2 {
    @extend h2;
    @include heading-modifiers;
  }

  .heading-3 {
    @extend h3;
    @include heading-modifiers;
  }

  .heading-4 {
    @extend h4;
    @include heading-modifiers;
  }

  .heading-5 {
    @extend h5;
    @include heading-modifiers;
  }

  .heading-6 {
    @extend h6;
    @include heading-modifiers;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .icon {
    color: white;
  }
</style>
