<script>
import { ref } from 'vue'




export default {
setup(){
  const message = ref('Hello World!')

console.log(message.value) // "Hello World!"
message.value = 'Changed'

return {message}

}
}
</script>

<template>
  <h1>{{message}}</h1>
</template>