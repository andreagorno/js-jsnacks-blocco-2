// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
// La funzione restituirà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

function createArray (a, b, array) {
    for (var i = a; i >= a && i <= b; i++) {
        
        array.push(i);

    }
    return array;
}

var newArray = [];
var numero1 = parseInt(prompt("inserisci un numero"));
var numero2 = parseInt(prompt("inserisci un numero"));

while (numero1 >= numero2) {
    alert("Attenzione il numero1 deve essere minore del numero2")
    numero1 = parseInt(prompt("inserisci un numero"));
    numero2 = parseInt(prompt("inserisci un numero"));
}

var result = createArray(numero1, numero2, newArray);
console.log(result);

