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
  <div class="cover">
    <div class="logo w-24 h-9 top-12 left-12 absolute" />
    <div
      class="w-165.5 h-full right-0 absolute background-mask"
      :style="style"
    />
    <img src="../img/shapes/cover-blob.svg" class="absolute" />
    <div class="slidev-layout">
      <slot />
    </div>
  </div>
</template>

<style lang="postcss">
.cover {
  .slidev-layout {
    @apply pt-92;

    h1 {
      @apply max-w-sm;
    }

    h1 + p {
      @apply text-4.5 max-w-md;
      color: var(--slidev-theme-grey4);
    }
  }

  .logo {
    background: url(../img/shapes/xebia-logo.svg);
    @apply bg-no-repeat;
  }

  .background-mask {
    mask-image: url(../img/masks/cover-background.svg);
    mask-repeat: no-repeat;
  }
}
</style>
