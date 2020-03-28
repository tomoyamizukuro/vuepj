<template>
  <div class="row">
    <form>
      <div class="col-sn-8 col-sn-offset-2 col-xs-12 col-nd-6 col-nd-offset-3 form-group">
        <label>Quote</label>
        <textarea class ="form-control" row="3" v-model="quote"></textarea>
      </div>
      <div class="col-sn-8 col-sn-offset-2 col-xs-12 col-nd-6 col-nd-offset-3 form-group">
        <button class ="btn btn-primary" @click.prevent="createNew">Add Quote</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data: function() {
    return{
      quote:  ''
    }
  },
  methods: {
    createNew() {
      this.$emit('quoteAdded',this.quote);
      this.quote = ''
    },
  }
}
</script>

<style></style>
