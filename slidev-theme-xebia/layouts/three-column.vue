<template>
  <div class="three-column">
    <img src="../img/shapes/default-blob-left.svg" class="absolute" />
    <img src="../img/shapes/default-blob-right.svg" class="absolute" />
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
