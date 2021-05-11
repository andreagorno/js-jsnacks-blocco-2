// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.


var myArray = [{
    "nome": "gisella",
    "peso": 30
  }, 
  {
    "nome": "lucia",
    "peso": 35
  }, 
  {
    "nome": "wilma",
    "peso": 22
  }, 
  {
    "nome": "teresa",
    "peso": 17
  },
  {
    "nome": "giusy",
    "peso": 24
  }
],


min = Math.min.apply(null, myArray.map(function(bici) {
    return bici.peso;
}))

console.log('min', min);

for (var i = 0; i < myArray.length; i++) {
    if (myArray[i].peso == min) {
        console.log(myArray[i]);
        document.getElementById("title").innerHTML = "la bici più leggera è " + myArray[i].nome + " con " + myArray[i].peso + " chili";
    }
}