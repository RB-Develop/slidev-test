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
  <div class="table-of-contents">
    <img src="../img/shapes/default-blob-right.svg" class="absolute" />
    <img src="../img/shapes/table-of-contents-blob.svg" class="absolute" />
    <div
      class="w-93 h-96 mt-22 ml-128 absolute background-mask"
      :style="style"
    />
    <div class="slidev-layout">
      <slot />
    </div>
  </div>
</template>

<style lang="postcss">
.table-of-contents {
  background-color: var(--slidev-theme-white-accent);

  .slidev-layout {
    h1 {
      @apply max-w-sm;
    }

    h1 + p {
      @apply text-xl max-w-md;
    }
  }

  .background-mask {
    mask-image: url(../img/masks/table-of-contents-background.svg);
    mask-repeat: no-repeat;
  }
}
</style>
