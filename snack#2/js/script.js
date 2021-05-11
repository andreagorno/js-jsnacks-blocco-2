// Snack 2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate inizialmente a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
// Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console

var squadre = [
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Atalanta",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Napoli",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Lazio",
        puntiFatti: 0,
        falliSubiti: 0,
    },
];


// for (i = 0; i < squadre.length; i++) {
//     squadre[i].nome = prompt("Inserisci qui il nome della squadra di calcio");
// }

for (var i = 0; i < squadre.length; i++) {
    squadre[i].puntiFatti = createRandomNumber(1, 100);
    squadre[i].falliSubiti = createRandomNumber(1, 100);
}

console.log(squadre);

var nuovoArray = [
    {
        nome: "",
        falliSubiti: 0,
    },
    {
        nome: "",
        falliSubiti: 0,
    },
    {
        nome: "",
        falliSubiti: 0,
    },
    {
        nome: "",
        falliSubiti: 0,
    },
    {
        nome: "",
        falliSubiti: 0,
    },
    {
        nome: "",
        falliSubiti: 0,
    },
    {
        nome: "",
        falliSubiti: 0,
    }
];

for (var i = 0; i < nuovoArray.length; i++) {
    nuovoArray[i].nome = squadre[i].nome;
    nuovoArray[i].falliSubiti = squadre[i].falliSubiti;
}
console.log(nuovoArray);



// -----------------FUNCTIONS-----------------
// funzione per generare un numero
function createRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};