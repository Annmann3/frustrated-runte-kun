<template>
  <h2>{{score}}点</h2>
  <div class="buruburu" v-if="!isCrack">
    <strong>
      さむいよ
    </strong>
    <img src="../../public/img/rantekun-angry.png">
  </div>
  <div class="buruburu" v-if="isCrack">
    <img src="../../public/img/rantekunn_crack.png">
    <RandomFalls
        :speed="500"
        :max="100" 
        :interval="100"
        class="text-6xl opacity-50" 
        ><img src="../../public/img/party_parrot.gif"></RandomFalls>
  </div>
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
      score: 0,
      angrySec: 10,
      isCrack: false,
      time: ""
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.start();
    })
  },
  methods: {
    count: function() {
      if (this.angrySec <= 0) {
        this.alert();
      } else if (this.angrySec <= 5) {
        this.complete();
        this.angrySec --;
      }
      else {
        this.angrySec --;
      }
    },
    start: function() {
      let self = this;
      this.time = setInterval(function() {self.count()}, 1000)
    },
    complete: function() {
      this.isCrack = true;
    },
    alert: function() {
      clearInterval(this.time);
      window.alert("らんてくんから攻撃を受けました。強制終了します。");
      this.$router.push("/");
    }
  }
}

//警告のコンソールを表示させる処理

</script>
<style scoped>
img {
  z-index: 1;
}
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
