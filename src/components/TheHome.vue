<template>
  <div>
    <h3>服をなくしてしまったランテくんを操作して、服を手に入れてあげましょう</h3>
    <h4>遊び方</h4>
    <p>タップした場所にランテくんがうごくよ</p>
    <button @click="toGame" class="btn">START</button>
  </div>
  <img src="../../public/img/rantekunn-mozaiku-lgtm.svg" class="rantekunn">
</template>
<script>
import playSound from '../assets/playSound'

export default {
  name: 'TheHome',
  methods: {
    toGame: function() {
      playSound('btn');
      this.$router.push('/game');
    }
  }
}
</script>
<style>
.btn {
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.5;
  position: relative;
  display: inline-block;
  padding: 1rem 4rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  letter-spacing: 0.1em;
  color: #212529;
  border-radius: 0.5rem;
}
.rantekunn {
  max-width: 100%;
  height: auto;
}
</style>
