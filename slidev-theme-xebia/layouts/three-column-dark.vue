<template>
  <div class="three-column-dark">
    <img src="../img/shapes/three-column-dark.svg" class="absolute" />
    <div class="slidev-layout">
      <slot />
      <div class="grid grid-cols-3 gap-20">
        <div>
          <slot name="one" />
        </div>
        <div>
          <slot name="two" />
        </div>
        <div>
          <slot name="three" />
        </div>
      </div>
      <slot name="footer" />
    </div>
  </div>
</template>

<style lang="postcss">
.three-column-dark {
  .slidev-layout {
    color: var(--slidev-theme-white);

    h1,
    h2,
    h3 {
      color: var(--slidev-theme-white);
    }
  }
}
</style>
