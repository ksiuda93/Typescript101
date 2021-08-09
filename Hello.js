"use strict";
// Typ tekstowy
var first_name = "Kacper";
var last_name = "Kowalski";
var longText = " to jest dlugi tekst\nale o co tu chodzi " + first_name + " " + last_name;
// Typy logiczne
var male = true;
var female = false;
// Typy liczbowe
var age = 28;
var weight = 110.5;
// Array
var array = [];
//Tuples
var tuple = ["Paweł", 32];
tuple.push("Kacper");
// Any
var any = "Paweł";
any = "String"; // to jest złe!
var anyNumber = any;
// Funkcje
// function sum(a: number, b: number) : number {
//     return a + b;
// }
// Arrow function 
var suma = function (a, b) { return a + b; };
console.log(suma(10, 20));
// Union types
var ux;
ux = 10;
ux = "Kacper";
ux.toString();
// Zbiory wartości
var diece;
// Sprawdzanie typów
{
    var logical = true;
    var age_1 = 28;
    var name_1 = "Kacper";
    if (typeof age_1 === "number" || typeof name_1 === "string" || typeof logical === "boolean") {
        console.log(name_1 + " ma " + age_1 + " lat");
    }
}
// void/undefined
function printText(text) {
    console.log(text);
}
// Unknown
// Pozwala przypisać wartoś do unknown przy deklaracji ale nie pozwala na 
