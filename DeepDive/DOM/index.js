const p = document.createElement('p');
p.innerHTML = "hello world";
document.body.append(p);

document.body.style.background="yellow"
p.style.color="#05f"
p.style.fontSize="x-large";

p.addEventListener("click", () => console.log('clicked'))


const title = document.querySelector('h1');
title.innerHTML = "Creating and modifying HTML elements";

const tagline = document.createElement('h2');
tagline.className = 'tagline';
tagline.innerHTML = 'I can create HTML elements!';

title.append(tagline);

// Challenge: 
// 1. Select h1 and add a click event listener. 
// Log the text from the element to the console.

// If you're not sure how to get text, feel free to check out hint.js

// 2. Add the same functionality to all the elements displayed
// in Scrimba web browser. Finally, try to trigger the event when you
// hover the mouse over the elements, instead of when clicking on them
  
  const title = document.querySelector('h1');
  title.addEventListener('click', event => {
    console.log(event.target.textContent);
  });
  
  document.body.addEventListener('click', event => {
    console.log(event.target.textContent);
  });

   document.body.addEventListener('mouseover', event => {
    console.log(event.target.textContent);
  });