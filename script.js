var ContainerElement = document.getElementById('container');

const bgc = document.getElementsByClassName("bgc")[0];
bgc.style.backgroundColor = "grey";
let active = false;


var buttonElement1 = document.createElement('button');
buttonElement1.innerText = "Button 1"
buttonElement1.id = "Button-1"

var buttonElement2 = document.createElement('button');
buttonElement2.innerText = "Button 2"
buttonElement2.id = "Button-2"

var buttonElement3 = document.createElement('button');
buttonElement3.innerText = "Button 3"
buttonElement3.id = "Button-3"

buttonElement1.addEventListener('click', () => {
    bgc.style.backgroundColor = "green";
});

buttonElement2.addEventListener('click', () => {
    bgc.style.backgroundColor = "red";
});

buttonElement3.addEventListener('click', () => {
    bgc.style.backgroundColor = "blue";
});

ContainerElement.appendChild(buttonElement1);
ContainerElement.appendChild(buttonElement2);
ContainerElement.appendChild(buttonElement3);