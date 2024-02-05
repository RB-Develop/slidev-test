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
  <div class="image-right">
    <div class="w-93 h-full right-0 absolute background-mask" :style="style" />
    <img src="../img/shapes/image-right.svg" class="absolute" />
    <div class="slidev-layout">
      <slot />
    </div>
  </div>
</template>

<style lang="postcss">
.image-right {
  .slidev-layout {
    @apply pr-120;
  }

  .background-mask {
    mask-image: url(../img/masks/image-right-background.svg);
    mask-repeat: no-repeat;
  }
}
</style>
