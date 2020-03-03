// let arr = [1, 2, 3, 4, 5];

// arr.pop(); //удаляет элемент с конца
// arr.push("5"); //добавляет элемент в конец массива
// arr.shift(); //удаляет первый элемент 
// arr.unshift("1") //добавляет первый элемент

// arr[99] = 99;
// console.log(arr.length); //возвращает последний индекс + 1


// // for(let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]); //перебор массива
// // }

// arr.forEach(function(item, i, mass){
//     console.log(i + ': ' + item + " (massiv: " + mass + ')');
// }); //перебор массива


// console.log(arr);

// let mass = [1,3,4,6,7];

// for (let key of mass) {
//     console.log(key);
// }

// let ans = prompt("", ""),
// arr = [];
// arr = ans.split(','); //все что мы получим от пользователя через запятую, превратится в массив
// console.log(arr); 

// let arr = ["aawr", "zzz", "pp", "asd"],
//     i = arr.join(', '); //будет выводится строка с разделителем  ,
// console.log(i);


let arr = ["aawr", "zzz", "pp", "asd"],
    i = arr.sort(compareNum); //сортировка по алфавиту

function compareNum(a, b) {
    return a-b;
}   //сортирует и цифры 

console.log(arr);

//Основы ООП

let soldier = {
    health: 400,
    armor: 100
};

let john = {
    health: 100
};

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);

//Динамическая типизация
// - To String

// 1)
console.log(typeof(String(2))); //typeof просто выводит проверку 
// 2)
console.log('ww' + 4);
console.log('https://vk.com/catalog/' + 5);

// - To Number

// 1)
console.log(typeof(Number('5')));
// 2)
console.log(typeof(5 + +'5')); //унарный плюс, который превращает в число
// 3)
console.log(typeof(parseInt('15px', 10)));

let ans = prompt("Hello?", '');

let switcher = null;

if(switcher) {
    console.log("Working..");
}  //консоль ничего не выведет

switcher = 1;

if(switcher) {
    console.log("Working..");
}

//2)
console.log(typeof(Boolean('5')));
// 3)
console.log(typeof(!!'5')); //Boolean


