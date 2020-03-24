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
      }
    }
})