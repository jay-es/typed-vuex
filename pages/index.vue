<template>
  <div class="container">
    <Counter0 />
  </div>
</template>

<script>
import Counter0 from '~/components/Counter0.vue'

export default {
  components: {
    Counter0
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
</style>
