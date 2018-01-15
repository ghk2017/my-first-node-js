'use strict';
function factorial(n){
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result + "でした。";
}
const assert = require('assert');
assert.equal(factorial(1), `1でした。`, `実際は${factorial(1)}でした`);
assert.equal(factorial(2), `2でした。`, `実際は${factorial(2)}でした`);
assert.equal(factorial(3), `6でした。`, `実際は${factorial(3)}でした`);
assert.equal(factorial(10), `3628800でした。`, `実際は${factorial(10)}でした`);
console.log(`すべてのテストが完了しました`);
