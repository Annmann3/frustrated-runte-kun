<template>
  <p>{{score}}点でした終わり</p>
  <div class="buruburu">
    怒りのランテくん 
  </div>
  <div class="buruburu">
    <img src="../../public/img/rantekunn_crack.png">
    <RandomFalls
        :speed="500"
        :max="40" 
        :interval="100"
        class="text-6xl opacity-50" 
        ><img src="../../public/img/party_parrot.gif"></RandomFalls>
  </div>
  <router-link to="/">TOPページへ</router-link>

  
</template>
<script>
import RandomFalls from './RandomFalls.vue'

export default {
  name: 'TheResult',
  components: {
    RandomFalls
  },
  data () {
    return {
    score: 0
    }
  }
}

//警告のコンソールを表示させる処理

</script>
<style>
.buruburu {
    display: inline-block;
    animation: hurueru .1s  infinite;
}

@keyframes hurueru {
    0% {transform: translate(0px, 0px) rotateZ(0deg)}
    25% {transform: translate(2px, 2px) rotateZ(1deg)}
    50% {transform: translate(0px, 2px) rotateZ(0deg)}
    75% {transform: translate(2px, 0px) rotateZ(-1deg)}
    100% {transform: translate(0px, 0px) rotateZ(0deg)}
}

</style>
