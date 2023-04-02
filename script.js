'use strict';// стандарт строгости
// ниче такого обозначения переменных и присвоение им значений
// var LeftBoardWidth = 1;
// let second = 2;
// const pi = 3.14;

// console.log(second)

//2 lesson

var number = 1;
// console.log(4/0);
// console.log('string'*6)   числовые данные
var string = "Hello";
var sym = Symbol();//на практике используется редко
var boolean = true;
//филосовфские типы данных
null;// когда в коде чегото не существует, при обращении к нему выдаст ошибку
undefined;// когда в коде есть чтото но значения никакого не имеет(не присвоено)
var obj = {};

let Persone = {
    name: "Piter",
    age: 25,
    isMarried: false
};
 
// console.log(Persone["name"]);//либо обращатья можно через точку console.log(Persone.name)

// let arr = ['plum.png','orange.jpg','aplle.bmp'];

// console.log(arr[0]);

// alert("jdhsjdhjshd"); выводит чтото с нажатием кнопки ок,все процессы стопорятся
// let answer = confirm("are you ready for a good time?") дает выбрать да/ нет с присвоением тру и фолс в консоли
// console.log(answer)
// let answer = prompt("How old are you 18 years", "да");//промт дает пользователю ввести ответ с присвоением да нет
// console.log(typeof(null))
// let answer = +prompt("How math you have years?");
// console.log(typeof(answer))
// console.log("arr" + " - object");
// console.log(4 + +" - object")// + перед строкой делает тип данных из строки в числовое


// операторы

// let incr = 10,
//     decr = 10;
// // incr++; + единица префиксная форма когда перед переменной ++ или --
// // decr--; - единица постфиксная после
// console.log(incr++);
// console.log(decr--);


// console.log(5%2) остаток от деления, вернет 1

// console.log("2" == 2) получим true, знак равенства работает по значениям, тройной === знак равенства вернет 
// false так как сравнивает по типу данных

let isCheked = true,
    isClose = false;

    console.log(isCheked || isClose)
