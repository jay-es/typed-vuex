<template>
  <div class="container">
    <Counter0 />
    <Counter1 />
    <Counter1com />
    <Counter2 />
    <Counter3 />
  </div>
</template>

<script>
import Counter0 from '~/components/Counter0.vue'
import Counter1 from '~/components/Counter1.vue'
import Counter1com from '~/components/Counter1com.vue'
import Counter2 from '~/components/Counter2.vue'
import Counter3 from '~/components/Counter3.vue'

export default {
  components: {
    Counter0,
    Counter1,
    Counter1com,
    Counter2,
    Counter3
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.container > div {
  margin: 1em;
}
</style>
