var app = new Vue({
    el: '#app',
    data: {
      playerHealth: 100,
      monsterHealth: 100,
      gameIsRunning: false
    },
    methods: {
      startGame: function() {
        this.gameIsRunning = true;
        // ゲーム開始時にヘルスゲージを初期化する
        this.playerHealth = 100;
        this.monsterHealth = 100;
      },
      attack: function (){
        let damage = this.calculateDamage(3, 10);
        this.monsterHealth -= this.calculateDamage(3, 10);
        if(this.checkWin()){
          return;
        }

        this.playerHealth -= this.calculateDamage(2, 12);
        if(this.checkWin()){
          return;
        }
      },
      specialAttack: function(){

      },
      heal: function(){

      },
      giveUp: function(){

      },
      calculateDamage: function(min, max){
      return  Math.max(Math.floor(Math.random() * max) + 1, min);
      },
      checkWin(){
        if(this.monsterHealth <= 0){
          if(confirm('you won! new game?')){
            this.startGame();
          } else {
            this.gameIsRunning = false;
          }
          return true;
          } else if(this.playerHealth <= 0){
          if(confirm('you lose! new game?')){
            this.startGame();
          } else {
            this.gameIsRunning = false;
          }
          return true;
        }
      }
    }
})