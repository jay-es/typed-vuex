<template>
  <div>
    vuex-module-decorators<br />
    count: {{ count }}, negative: {{ negative }}<br />
    <button @click="dec">-1</button>
    <button @click="inc">+1</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getModule } from 'vuex-module-decorators'
import Counter2 from '~/store/counter2'

export default Vue.extend({
  computed: {
    counter2() {
      return getModule(Counter2, this.$store)
    },
    count() {
      // return this.$store.state.counter2.count
      return this.counter2.count
    },
    negative() {
      // return this.$store.getters['counter2/negative']
      return this.counter2.negative
    }
  },
  methods: {
    dec() {
      // this.$store.commit('counter2/DECREMENT')
      this.counter2.DECREMENT()
    },
    inc() {
      // this.$store.commit('counter2/INCREMENT')
      this.counter2.INCREMENT()
    }
  }
})
</script>
