<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <p :class="$style.line">TEST LINE</p>
  <p :class="$theme.red">测试css module</p>
</template>

<script>
import theme from '../style/theme.module.css'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  },
  computed: {
    $theme() {
      return theme
    }
  }
}
</script>

<style module lang="scss">
.line {
  color: #f40;
  font-weight: 900;
}
</style>
