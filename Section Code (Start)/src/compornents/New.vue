<template>
    <div>
      <h3>New Quota</h3>
      <button @click="counters++">Increase!</button>
      <p>{{counters}}</p>
    </div>

</template>

<script>
    export default {
      data: function() {
          return {
            counters: 0
          };
      },
      destroyed(){
        console.log('Destroyed!')
      },
      deactivated() {
        console.log('Deactivated!')
      },
      activated() {
        console.log('Activated!')
      }
    }
</script>

<style>

</style>