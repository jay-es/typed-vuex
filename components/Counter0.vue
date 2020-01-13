<template>
  <div>
    Vanilla Vuex<br />
    count: {{ count }}, negative: {{ negative }}<br />
    <button @click="dec">-1</button>
    <button @click="inc">+1</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    count() {
      return this.$store.state.counter0.count
    },
    negative() {
      return this.$store.getters['counter0/negative']
    }
  },
  methods: {
    dec() {
      this.$store.commit('counter0/DECREMENT')
    },
    inc() {
      this.$store.commit('counter0/INCREMENT')
    }
  }
})
</script>
