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
  template: '<div><span>count: <button v-on:click="count++">{{ count }}</button></span></div>'
})

var app = new Vue({
  el: '#app',
})