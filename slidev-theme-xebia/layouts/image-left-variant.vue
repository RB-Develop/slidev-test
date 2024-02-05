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
  <div class="image-left-variant">
    <img src="../img/shapes/default-blob-left.svg" class="absolute" />
    <img src="../img/shapes/default-blob-right.svg" class="absolute" />
    <img src="../img/shapes/image-left-variant-blob.svg" class="absolute" />
    <div
      class="w-85 h-87 mt-40 ml-20 absolute background-mask"
      :style="style"
    />
    <div class="slidev-layout">
      <slot />
      <div class="pl-108">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.image-left-variant {
  .background-mask {
    mask-image: url(../img/masks/image-variant-background.svg);
    mask-repeat: no-repeat;
  }
}
</style>
