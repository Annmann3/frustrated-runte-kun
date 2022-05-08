<template>
    <div class="stage" @click="moveRuntekun">
      <RuntekunMove ref="runtekun" />
    </div>
</template>

<script>
import RuntekunMove from './RuntekunMove.vue'

export default {
  name: 'App',
  components: {
    RuntekunMove
  },
  methods: {
    moveRuntekun (ev) {
      this.$refs.runtekun.moveTo(ev.offsetX, ev.offsetY)
    }
  }
}
</script>

<style>
.stage {
  position: relative;
  width: 100%;
  height: 400px;
  border: 1px solid #aaa;
  overflow: hidden;
}
</style>
