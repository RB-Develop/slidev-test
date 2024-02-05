<script setup lang="ts">
import { computed } from "vue";
import { handleBackground } from "../utils/layoutHelper";

const props = defineProps<{
  background?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  backgroundRepeat?: string;
}>();

const style = computed(() =>
  handleBackground(props.background, {
    ...props,
  }),
);
</script>

<template>
  <div class="image-left-dark">
    <div class="w-93 h-full absolute background-mask" :style="style" />
    <img src="../img/shapes/image-left-dark.svg" class="absolute" />
    <div class="slidev-layout">
      <slot />
    </div>
  </div>
</template>

<style lang="postcss">
.image-left-dark {
  background-color: var(--slidev-theme-primary);

  .slidev-layout {
    @apply pl-120;
    color: var(--slidev-theme-white);

    h1,
    h2,
    h3 {
      color: var(--slidev-theme-white);
    }
  }

  .background-mask {
    mask-image: url(../img/masks/image-left-background.svg);
    mask-repeat: no-repeat;
  }
}
</style>
