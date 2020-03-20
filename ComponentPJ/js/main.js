// グローバル登録
// Vue.component('hello-component',{
//   template : '<p>Hello</p>'
// })
Vue.component('button-counter', {
  data: function(){
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">{{ count }}</button>'
})

var app = new Vue({
  el: '#app',
})