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
  <div class="cover-dark">
    <div class="logo w-24 h-9 top-12 left-12 absolute" />
    <div
      class="w-165.5 h-full right-0 absolute background-mask"
      :style="style"
    />
    <img src="../img/shapes/cover-dark-blob.svg" class="absolute" />
    <div class="slidev-layout">
      <slot />
    </div>
  </div>
</template>

<style lang="postcss">
.cover-dark {
  background-color: var(--slidev-theme-primary);

  .slidev-layout {
    @apply pt-92;
    color: var(--slidev-theme-white);

    h1 {
      @apply max-w-sm;
      color: var(--slidev-theme-white);
    }

    h1 + p {
      @apply text-4.5 max-w-md;
      color: var(--slidev-theme-white-accent);
    }
  }

  .logo {
    background: var(--slidev-theme-white);
    mask-image: url(../img/shapes/xebia-logo.svg);
    mask-repeat: no-repeat;
  }

  .background-mask {
    mask-image: url(../img/masks/cover-background.svg);
    mask-repeat: no-repeat;
  }
}
</style>
