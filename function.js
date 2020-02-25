// let num = 20; //global peremennaya
// function showFirstMessage(text) {
//     alert(text);
//     num = 10;
// }

// showFirstMessage("Hello World!");
// console.log(num);

// function calc(a,b) {
//     return (a + b);
// }

let calc = (a, b) => a+b; //стрелочные события

console.log(calc(3, 4));

function retVar() {
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);

let str = "Test";
console.log(str.length); //длинна строки

console.log(str.toUpperCase()); //все заглавными
console.log(str.toLowerCase()); //все с маленькой


let twelve = "12.2px";

//console.log(Math.round(twelve)); //преобразует строку в число
console.log(parseInt(twelve)); //округляет до целого числа
console.log(parseFloat(twelve)); //возвращает десятичное число

//callback-функции

function learnJS(lang, callback) {
    console.log("Я учу " + lang);
    callback();
}

// learnJS("JavaScript", function(){
//     console.log("Я прошел третий урок!");
// })

function done() {
    console.log("Я прошел третий урок!");
}

learnJS("JavaScript", done);

//Обьекты

let options = {
   width: 1024,
   height: 1024,
   name: "test"
};

 console.log(options.name);
options.bool = false;
options.colors = {
    border: "black",
    bg: "red"
}; //добавляет

delete options.bool; //удаляет обьект

console.log(options);

for(let key in options) {
    console.log('Свойство ' + key + ' имеет значение ' + options[key]);
} //Перебирает свойства

console.log(Object.keys(options).length); //Кол-во свойств
