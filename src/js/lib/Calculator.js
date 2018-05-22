module.exports = class Calculator {
    constructor(one, two, three) {
        this.one = one
    }
    add(x,y) {
        return x + y;
    }
    subtract(x,y) {
        return x - y;
    }
    multiply(x,y) {
        return x * y;
    }
    divide(x,y){
        return x / y;
    }
  }

//   const Calculator = {
//     add: (x,y) => {
//         return x + y;
//     },
//     subtract: (x,y) => {
//         return x - y;
//     },
//     multiply: (x,y) => {
//         return x * y;
//     },
//     divide: (x,y) => {
//         return x / y;
//     } 
//   }

//   function Calculator(one, two, three) {
//     this.one = one;

//     this.add = (x,y) => {
//         return x + y;
//     }
//     this.subtract = (x,y) => {
//         return x - y;
//     }
//     this.multiply = (x,y) => {
//         return x * y;
//     }
//     this.divide = (x,y) => {
//         return x / y;
//     }
//   }