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


// Challenge: Write a countdown function with a hard-coded starting number inside closure
// Stretch goal: Write a countdown function that can count from a provided number,
// with a provided step

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


// Challenge: Rewrite your first function from a previous challnge to be an arrow function. 
// Stretch goal: Rewrite counting down closure in arrow function form. 


// Challenge start 
function splitBill(amount, numPeople) {
    return `Each person needs to pay ${amount / numPeople}`
}
//Arrow function
const splitBill = (amount, numPeople) =>
    `Each person needs to pay ${amount / numPeople}`;

function countdown(startingNumber, step) {
  let countFromNum = startingNumber + step;
  return function decrease() {
    countFromNum -= step;
    return countFromNum;
  }
}

const countdown=(startingNumber,step)=>{
    let countFromNum=startingNumber + step;
    return decrease=>{
        countFromNum -= step;
        return countFromNum;
    }
}