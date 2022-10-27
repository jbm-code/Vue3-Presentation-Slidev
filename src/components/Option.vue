<script>

//declarative rendering : When the state changes, the HTML updates automatically.
export default {
  //We can declare reactive state using the data component option
  data() {
    return {
      message: 'Hello World!',
      //To bind an attribute to a dynamic value, we use the v-bind directive
      styleObject: {
        color: 'red',
        fontSize: '13px'
      },
      count: '0',
    }
  },
  methods: {
    increment() {
      // update component state
      this.count++
    }
  }

}
</script>

<template>
  <button 
  v-bind:style="styleObject"
  v-on:click="increment"
  >count is: {{ count }}</button>

</template>

<style>

</style>