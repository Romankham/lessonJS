let box = document.getElementById('box'); //подключается в (html document) id="box" 
let btn = document.getElementsByTagName('button'); //для кнопки
let circle = document.getElementsByClassName('circle');
let heart = document.querySelectorAll('.heart'),
    wrapper = document.querySelector('.wrapper'),
    oneHeart = document.querySelector('.heart');

box.style.backgroundColor = 'blue'; //меняет цвет
btn[1].style.borderRadius = '100%'; //меняет стиль кнопки

circle[0].style.backgroundColor = 'red';

// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'blue';
// }

// heart.forEach(function(item, i, hearts){
//     item.style.backgroundColor = 'blue';
// });

let div = document.createElement('div'),
    text = document.createTextNode('тут был я');

div.classList.add('black'); //добавляет класс элементу

div.innerHTML = '<h1>Hello World!</h1>'; //можно добавлять html код
div.textContent = 'Hello World!'; //добавляет текст


document.body.appendChild(div); //добавляет элемент в конец всего кода html
wrapper.appendChild(div); //добавляет элемент в конец класса wrapper
document.body.insertBefore(div, circle[0]); //добавляет элемент перед circle
document.body.removeChild(circle[1]); //удаляет обьект
wrapper.removeChild(heart[1]); //удаляет обьект

document.body.replaceChild(btn[1], circle[1]); //заменяет элемент
