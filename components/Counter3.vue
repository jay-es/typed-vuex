<template>
  <div>
    Vuex Class Component<br />
    count: {{ count }}, negative: {{ negative }}<br />
    <button @click="dec">-1</button>
    <button @click="inc">+1</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { createProxy } from 'vuex-class-component'
import { Counter3 } from '~/store/counter3'

export default Vue.extend({
  data() {
    return {
      counter3: createProxy(this.$store, Counter3)
    }
  },
  computed: {
    count() {
      // return this.$store.state.counter3.count
      return this.counter3.count
    },
    negative() {
      // return this.$store.getters['counter3/negative']
      return this.counter3.negative
    }
  },
  methods: {
    dec() {
      // this.$store.commit('counter3/DECREMENT')
      this.counter3.count--
    },
    inc() {
      // this.$store.commit('counter3/INCREMENT')
      this.counter3.count++
    }
  }
})
</script>
