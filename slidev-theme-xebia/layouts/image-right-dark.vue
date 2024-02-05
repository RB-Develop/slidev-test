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
  <div class="image-right-dark">
    <div class="w-93 h-full right-0 absolute background-mask" :style="style" />
    <img src="../img/shapes/image-right-dark.svg" class="absolute" />
    <div class="slidev-layout">
      <slot />
    </div>
  </div>
</template>

<style lang="postcss">
.image-right-dark {
  background-color: var(--slidev-theme-primary);

  .slidev-layout {
    @apply pr-120;
    color: var(--slidev-theme-white);

    h1,
    h2,
    h3 {
      color: var(--slidev-theme-white);
    }
  }

  .background-mask {
    mask-image: url(../img/masks/image-right-background.svg);
    mask-repeat: no-repeat;
  }
}
</style>
