Vue.filter('readMore', function(text, length,suffix){
  return text.substring(0, length) + suffix
}),
Vue.filter('toUSD', function(jpy){
  return jpy / 100
})
Vue.filter('numberFormat', function(value){
  return value.toLocaleString()
})

var app = new Vue({
  el: '#app',
  data:{
    basePrice: 100,
    url: 'https://www.google.co.jp',
    newItem: '',
    message: 'hello vue.js!',
    number: 100,
    ok: true,
    price: 29800,
    jpyPrice: 2980000000000,
    todos: [],
    text:'    Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst.',
  },
  computed:  {
    computedNumber: function(){
      console.log('computedNumber');
      return Math.random()
    },
    taxIncludedPrice: {
      get: function() {
        return parseInt(this.basePrice * 1.08)
      },
      set: function (taxIncludedPrice){
        this.basePrice = taxIncludedPrice
      }
    },
    reversedMessage: function(){
       return this.message.split('').reverse().join('');
    }
  },
  methods:{
    methodsNumber: function(){
      console.log('methodsNumber');
      return Math.random()
    },
    addItem: function(event){
      // 入力フォーム、空欄時にタスクを追加しない
      if(this.newItem == '') return;
      var todo = {
        item: this.newItem,
        isDone: false
      };
      this.todos.push(todo);
      this.newItem = '';
    },
    deleteItem: function(index) {
      // 配列の要素を切り取る
      this.todos.splice(index, 1);
    }
  },
})