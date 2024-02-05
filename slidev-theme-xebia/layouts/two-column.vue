<template>
  <div class="two-column">
    <img src="../img/shapes/default-blob-left.svg" class="absolute" />
    <img src="../img/shapes/default-blob-right.svg" class="absolute" />
    <div class="slidev-layout">
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
