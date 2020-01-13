<template>
  <div>
    Nuxt Typed Vuex<br />
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
      return this.$accessor.counter1.count
    },
    negative() {
      return this.$accessor.counter1.negative
    }
  },
  methods: {
    dec() {
      this.$accessor.counter1.DECREMENT()
    },
    inc() {
      this.$accessor.counter1.INCREMENT()
    }
  }
})
</script>
