<template>
  <div class="toc-two-column">
    <img
      src="../img/shapes/table-of-contents-two-column-blob.svg"
      class="absolute"
    />
    <img src="../img/shapes/default-blob-right.svg" class="absolute" />
    <div class="slidev-layout pr-40">
      <slot />
      <div class="grid grid-cols-2 gap-20">
        <div>
          <slot name="left" />
        </div>
        <div>
          <slot name="right" />
        </div>
      </div>
      <slot name="footer" />
    </div>
  </div>
</template>

<style lang="postcss">
.toc-two-column {
  background-color: var(--slidev-theme-white-accent);
}
</style>
