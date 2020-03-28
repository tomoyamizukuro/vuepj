<template>
    <div>
      <h3>New Author</h3>
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