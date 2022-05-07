<template>
  <div id="app">
    <div class="stage" @click="moveRuntekun">
      <RuntekunMove ref="runtekun" />
    </div>
    <!--
    <h3><a id="demo-css-4"></a>応用：複雑な人物のキャラクター</h3>
    <div class="stage" @click.self="tiltChara" @dblclick="jumpChara">
      <div class="note">ステージ内クリックで首を傾げて、ダブルクリックでジャンプします</div>
      <MyChara ref="chara" class="chara" />
    </div>
    -->
  </div>
</template>

<script>
import RuntekunMove from './components/RuntekunMove.vue'
//import MyChara from './components/MyChara.vue'

export default {
  name: 'App',
  components: {
    RuntekunMove
  },
  methods: {
    moveRuntekun (ev) {
      this.$refs.runtekun.moveTo(ev.offsetX, ev.offsetY)
    },
    /*
    tiltChara (ev) {
      const x = (ev.offsetX / ev.target.offsetWidth - 0.5)
      this.$refs.chara.tilt(x)
    },
    jumpChara (ev) {
      this.$refs.chara.jump(60)
      console.log(ev)
    }
    */
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.stage {
  position: relative;
  width: 100%;
  height: 400px;
  border: 1px solid #aaa;
  overflow: hidden;
}
</style>
