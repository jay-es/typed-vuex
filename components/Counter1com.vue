<template>
  <div>
    Nuxt Typed Vuex<br />
    count: {{ count }}, negative: {{ negative }}<br />
    <button @click="dec">-1</button>
    <button @click="inc">+1</button>
  </div>
</template>

<script lang="ts">
import { createComponent, computed } from '@vue/composition-api'

export default createComponent({
  setup(_, { root }) {
    const { counter1 } = root.$accessor

    return {
      count: computed(() => counter1.count),
      negative: computed(() => counter1.negative),
      dec: counter1.DECREMENT,
      inc: counter1.INCREMENT
    }
  }
})
</script>
