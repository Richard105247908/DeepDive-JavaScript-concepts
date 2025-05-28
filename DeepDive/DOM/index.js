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

