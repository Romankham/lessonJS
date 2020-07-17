//create two objects
var player_1 = {name: "Fred", score: 1000, rank: 1};
var player_2 = {name: "Sam", score: 100000, rank: 5};

function playerDetails() {
    //display information about each player
    console.log(this.name + " has a rank of: " + 
    this.rank + " and a score of " + this.score);
}

player_1.logDetails = playerDetails();
player_2.logDetails = playerDetails();

player_1.logDetails();
player_2.logDetails();

//Работа с DOM elements
var mainTitle = document.getElementById("btn");

console.log("This is an element of type: ", mainTitle.nodeType); //выводим тип элемента, nodeType свойство получения доступа
console.log("the Inner HTML is ", mainTitle.innerHTML); //
console.log("Child nodes: ", mainTitle.childNodes.length); //выводит кол-во дочерних узлов

var myLinks = document.getElementsByTagName("a");
console.log("Links: ", myLinks.length); //получаем все теги "а"
