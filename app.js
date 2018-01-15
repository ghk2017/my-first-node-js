'use strice';
let number1 = process.argv[2] || 0;
let number2 = process.argv[3] || 0;
//if(number1 < number2){
//  number1 = number2;
//}
number1 > number2 ? number1 = number1 : number1 = number2;

let sum = 0;
for(let i = 1; i <= number1; i++){
  sum = sum + i;
}
console.log(sum);