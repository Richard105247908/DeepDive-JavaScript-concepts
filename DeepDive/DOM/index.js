const p = document.createElement('p');
p.innerHTML = "hello world";
document.body.append(p);

document.body.style.background="yellow"
p.style.color="#05f"
p.style.fontSize="x-large";

p.addEventListener("click", () => console.log('clicked'))