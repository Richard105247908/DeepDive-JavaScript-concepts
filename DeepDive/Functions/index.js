// Challenge: Write a function splitBill() that lets you know how much 
// you need to pay to split any bill between you and your friends. 
// It should return a message with a number. 

// Write your code below:
function splitBill(amount,people){
    return `Each person need to pay ${amount/people}`;
    
}

// Testing your solution
console.log(splitBill(10, 2))
console.log(splitBill(16, 4))
console.log(splitBill(350, 9))



// Start
function countdown(minus=10) {
  let value=100;
  // write your code here
  return function decrease(){
    value -= minus
    return value
  }
}

const countingDown = countdown(8);

console.log(countingDown());
console.log(countingDown());
console.log(countingDown());
