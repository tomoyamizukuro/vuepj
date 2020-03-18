var app = new Vue({
  el: '#app',
  data:{
    newItem: '',
    todos: []
  },
  methods:{
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
  }
})