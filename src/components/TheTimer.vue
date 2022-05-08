<template>
  <div id="timer">
    <div class="timer">
      <div class="time">
        {{ formatTime }}
      </div>
      <button @click="start" v-if="!timerOn">Start</button>
      <button @click="stop" v-if="timerOn">Stop</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TheTimer',
  data() {
    return {
      sec: 20,
      timerOn: false,
      timerObj: null,
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.start();
  })
  },
  methods: {
    count: function() {
      if (this.sec <= 0) {
        this.complete();
      } else {
        this.sec --;
      }
    },
    start: function() {
      let self = this;
      this.timerObj = setInterval(function() {self.count()}, 1000)
      this.timerOn = true;
    },

    stop: function() {
      clearInterval(this.timerObj);
      this.timerOn = false;
    },

    complete: function() {
      clearInterval(this.timerObj)
      this.$router.push('result');
    }
  },
  computed: {
    formatTime: function() {
      let timeStrings = [
        this.sec.toString()
      ].map(function(str) {
        if (str.length < 2) {
          return "0" + str
        } else {
          return str
        }
      })
      return timeStrings[0] + '秒'
    }
  }
}
</script>

<style scoped>
#timer {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
