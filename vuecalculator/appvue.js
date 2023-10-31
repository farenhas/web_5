
const app = Vue.createApp({
  data() {
    return {
      var1: 0,
      var2: 0,
      result: 0
    };
  },
  methods: {
    add() {
      this.result = parseFloat(this.var1) + parseFloat(this.var2);
    },
    subtract() {
      this.result = parseFloat(this.var1) - parseFloat(this.var2);
    },
    multiply() {
      this.result = parseFloat(this.var1) * parseFloat(this.var2);
    },
    divide() {
      const num2 = parseFloat(this.var2);
      if (num2 === 0) {
        this.result = 'Error: Division by zero';
      } else {
        this.result = parseFloat(this.var1) / num2;
      }
    }
  }
});

app.mount('#app');
