<script setup>
import { createApp } from 'vue'

createApp({
  data() {
    return { message: 'Hello Vue!' }
  }
}).mount('#app')

</script>

<template>
<div id="app">
  {{ message }}
</div>

</template>