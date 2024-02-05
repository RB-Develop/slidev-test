<script setup lang="ts">
import { computed } from "vue";
import { handleBackground } from "../utils/layoutHelper";

const props = defineProps<{
  speakerLeftImage?: string;
  speakerLeftImageSize?: string;
  speakerLeftImagePosition?: string;
  speakerLeftImageRepeat?: string;
  speakerRightImage?: string;
  speakerRightImageSize?: string;
  speakerRightImagePosition?: string;
  speakerRightImageRepeat?: string;
}>();

const leftStyle = computed(() =>
  handleBackground(props.speakerLeftImage, {
    backgroundSize: props.speakerLeftImageSize,
    backgroundPosition: props.speakerLeftImagePosition,
    backgroundRepeat: props.speakerLeftImageRepeat,
  }),
);
const rightStyle = computed(() =>
  handleBackground(props.speakerRightImage, {
    backgroundSize: props.speakerRightImageSize,
    backgroundPosition: props.speakerRightImagePosition,
    backgroundRepeat: props.speakerRightImageRepeat,
  }),
);
</script>

<template>
  <div class="intro">
    <img src="../img/shapes/speaker-blob-left.svg" class="absolute" />
    <img src="../img/shapes/default-blob-right.svg" class="absolute" />
    <div class="slidev-layout">
      <slot />
      <div class="pt-16 flex">
        <div class="px-16 flex-1 flex flex-col flex-items-center">
          <div class="w-35 h-35 speaker-mask mb-4" :style="leftStyle" />
          <slot name="speaker-left" />
        </div>
        <div class="px-16 flex-1 flex flex-col flex-items-center">
          <div class="w-35 h-35 speaker-mask mb-4" :style="rightStyle" />
          <slot name="speaker-right" />
        </div>
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
