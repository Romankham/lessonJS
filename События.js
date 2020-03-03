let btn = document.querySelectorAll('button'),  //псевдо массив
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');


// btn[0].onclick = function() {
//     alert('Вы нажали первую кнопку');
// };

// btn[0].addEventListener('click', function(event)
// {
//     // let target = event.target;
//     // target.style.display = 'none';
//     console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
// });

// wrap.addEventListener('click', function(){
//     console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
// });

link.addEventListener('click', function(event){
    event.preventDefault(); //отмена стандартных поведений браузера (пример: не переходит по ссылке)
    console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
});

btn.forEach(function(item){
    item.addEventListener('mouseleave', function(){
        console.log('Вышли!');
    });
});

// btn[0].addEventListener('mouseenter', function(){
//     alert('Вы навели на первую кнопку');
// });

//Мобильные события

// touchstart - при косании элемента
// touchmove - после прикосновения и ведения пальца
// touchend - когда палец отодвигается от экрана
//touchenter - возникает когда намерено заходит на элемент
//touchleave - когда палец покинул пределы элемента
//touchcancel - когда точка прикосновения не регистрируется внутри браузера

// window.addEventListener('DOMContentLoaded', function(){
//     let box = document.querySelector('.box');

//     // box.addEventListener('touchstart', function(e){
//     // e.preventDefault();
//     // console.log("Red box: touchstart");
//     // console.log(e.touches);
//     // console.log(e.touches[0].target); //все пальци регистр
//     // console.log(e.changedTouches); //список пальцев
//     // console.log(e.targetTouches); //регистр те пальци которые взаим с определенными элементами
//     // });

//     box.addEventListener('touchmove', function(e){
//         e.preventDefault();
//         console.log("Red box: " + e.touches[0].pageX); //получаем координату по оси Х
//         });
// });

// Регулярные выражения

// new RegExp('pattern', 'flags');
// /pattern/ 

// let ans = prompt('Введите имя');

// let reg = /n/ig;

// // // console.log(ans.search(reg)); //получаем индекс элемента
// // console.log(ans.match(reg)); //совпадение
// console.log(reg.test(ans));


// i - флаг регистра
// g - флаг глобальности
// m - флаг многострочности

//Классы
// \d - найди цифру \D - не число
// \w - буквы \W - не букву
// \s - пробелы \S - не пробел

// let ans = prompt('Введите число');

// let reg = /\d/g;


// console.log(ans.match(reg));

// let pass = prompt('Введите пароль');

// console.log(pass.replace(/./g, "*"));
// alert('12-34-56'.replace(/-/g, ':'));

let str = 'My name is R2D2';

console.log(str.match(/\w\d\w\d/i));

let str1 = 'My name is/ R2D2';

console.log(str1.match(/\//i)); //что-бы найти / $ * и т.д.