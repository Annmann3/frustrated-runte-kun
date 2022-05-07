<template>
  <div :class="$style.text">
    <slot></slot>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const height = 400;

let props = defineProps({
  speed: Number,
  x: Number,
  y: Number,
  rotate: Number,
  scale: Number
});
const initRotate = -(Math.round(Math.random() * 360));
const animationDuration = computed(() => `${height / props.speed}s`);
const pixel = computed(() => ({
    x: `${props.x}px`,
    y: `${props.y}px`
}));
const transform = computed(() => ({
    begin: `translateY(${props.y}px) scaleX(-1) rotate(${initRotate}deg)`,
    end: `translateY(${Math.abs(props.y) + height + 30}px) scaleX(-1) rotate(${props.rotate}deg)`
}));
</script>

<style module>
.text {
  position: absolute;
  overflow: none;
  top: v-bind("pixel.y");
  left: v-bind("pixel.x");
  animation: fall linear;
  animation-duration: v-bind(animationDuration);
}

@keyframes fall {
  0% {
    transform: v-bind("transform.begin");
  }
  100% {
    transform: v-bind("transform.end");
  }
}
</style>
