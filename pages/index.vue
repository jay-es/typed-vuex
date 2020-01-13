<template>
  <div class="container">
    <Counter0 />
    <Counter1 />
  </div>
</template>

<script>
import Counter0 from '~/components/Counter0.vue'
import Counter1 from '~/components/Counter1.vue'

export default {
  components: {
    Counter0,
    Counter1
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
