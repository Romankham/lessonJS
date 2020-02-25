let persone = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(persone["name"]);
let arr =['plum.png','orange.jpg','apple.bmp'];

// console.log(arr[1]);

let num = 50;

if (num < 49) {
    console.log('False!')
} else if (num > 100) {
    console.log('Mnogo!')
} else {
    console.log('True!')
}

(num == 50) ? console.log('True!') : console.log('False!');

switch (num) {
    case num < 49:
            console.log('False!')
            break;
    case num > 100:
            console.log('Mnogo!')
            break;
    case num > 80: 
             console.log('Mnogo!')
             break;
    case 50:
            console.log('True!')
            break;
    default: 
         console.log('Chto-to poshlo ne tak')
         break;            
}

let numb = 50;

// while (numb < 55) {
//     console.log(numb);
//     numb++;
// }

// do {
//     console.log(numb);
//     numb++;
// }
// while (numb < 55);

for (let i = 1; i < 8; i++) {
    if(i == 6) {
        break;
    }
    console.log(i);
}