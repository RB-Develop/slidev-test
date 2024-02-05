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
  <div class="chapter-dark">
    <img src="../img/shapes/chapter-dark.svg" class="absolute" />
    <div
      class="w-96 h-96 mt-24 ml-15 absolute background-mask"
      :style="style"
    />
    <div class="slidev-layout">
      <slot />
    </div>
  </div>
</template>

<style lang="postcss">
.chapter-dark {
  background-color: var(--slidev-theme-primary);

  .slidev-layout {
    @apply pt-60 pl-120;
    color: var(--slidev-theme-white);

    h1 {
      @apply max-w-sm;
      color: var(--slidev-theme-white);
    }
  }

  .background-mask {
    mask-image: url(../img/masks/chapter-background.svg);
    mask-repeat: no-repeat;
  }
}
</style>
