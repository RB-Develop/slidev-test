<script setup lang="ts">
import { computed } from "vue";
import { handleBackground } from "../utils/layoutHelper";

const props = defineProps<{
  speakerImage?: string;
  speakerImageSize?: string;
  speakerImagePosition?: string;
  speakerImageRepeat?: string;
}>();

const style = computed(() =>
  handleBackground(props.speakerImage, {
    backgroundSize: props.speakerImageSize,
    backgroundPosition: props.speakerImagePosition,
    backgroundRepeat: props.speakerImageRepeat,
  }),
);
</script>

<template>
  <div class="intro">
    <img src="../img/shapes/speaker-blob-left.svg" class="absolute" />
    <img src="../img/shapes/default-blob-right.svg" class="absolute" />
    <div class="mt-60 ml-45 w-35 h-35 absolute speaker-mask" :style="style" />
    <div class="slidev-layout">
      <slot />
      <div class="pt-36 pl-76">
        <slot name="speaker" />
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.intro {
  .slidev-layout {
    h3 {
      @apply text-3 line-height-3;
      color: var(--slidev-theme-primary-accent);
    }
  }

  .speaker-mask {
    mask-image: url(../img/masks/speaker-background.svg);
    mask-repeat: no-repeat;
  }
}
</style>
