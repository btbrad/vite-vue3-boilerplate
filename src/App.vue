<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <CompTS />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CompTS from './components/CompTS.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    CompTS
  }
}
</script>
