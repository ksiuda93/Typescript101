// Typ tekstowy
let first_name : string = "Kacper";
let last_name : string = "Kowalski";
let longText : string = ` to jest dlugi tekst
ale o co tu chodzi ${first_name} ${last_name}`

// Typy logiczne
let male : boolean = true;
let female : boolean = false;

// Typy liczbowe
let age : number = 28;
let weight : number = 110.5;

// Array
let array : number[] = [];

//Tuples
const tuple : [string, number] = ["Paweł", 32] 
tuple.push("Kacper");

// Any
let any : any = "Paweł";
any = "String"; // to jest złe!
let anyNumber : number = any;

// Funkcje
function sum(a: number, b: number) : number {
    return a + b;
}

// Arrow function 
let suma = (a: number, b: number) => a + b;

console.log(suma(10,20));

// Union types
let ux : number | string;
ux = 10;
ux = "Kacper";
ux.toString();

// Zbiory wartości
let diece : 1 | 2 | 3 | 4 | 5 | 6 ;

// Sprawdzanie typów
{
    let logical: boolean = true;
    let age : number = 28;
    let name: string = "Kacper";

    if (typeof age === "number" || typeof name === "string" || typeof logical === "boolean") {
        console.log(`${name} ma ${age} lat`);
    }
}

// void/undefined

function printText(text: string): void {
    console.log(text);
}


// Unknown
// Pozwala przypisać wartoś do unknown przy deklaracji ale nie pozwala na 