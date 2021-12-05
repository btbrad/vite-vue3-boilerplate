<template>
  <div>
    <p v-if="!users.length">loading...</p>
    <div v-else>
      <p v-for="(user, index) in users" :key="index">
        {{ user.name }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

interface User {
  id: number;
  name: string;
}

export default defineComponent({
  setup () {
    const users = ref<User[]>([])

    setTimeout(() => {
      users.value.push({ id: 1, name: "Brad" });
    }, 1000);

    return {
      users
    }
  }
})
</script>

<style>

</style>