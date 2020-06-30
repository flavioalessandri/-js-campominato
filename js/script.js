// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


var cpuList = [1,2,9,7,5,5,8];


//Generate a 16 random numbers array . Value from 0 to 100;
// var min=0;
// var max = 100;
// var arrayDim=6;
var i =0;
//
// for (i=0; i< arrayDim; i++){
//   var randomNum= Math.floor(Math.random()*(100 - 0 + 1)+1);
//   cpuList.push(randomNum);
//   cpuList.sort();
// }
// console.log(cpuList);

var randomNum= Math.floor(Math.random()*(99 - 0 + 1)+1);
var count=0;

while(i<cpuList.length){
  var cpuListSorted = cpuList.sort();
  if(cpuListSorted[i] != cpuListSorted[i+1]){
    console.log("fine" , cpuListSorted);
    count = i;
  } else{
    cpuListSorted.splice(i);
    console.log("numero random",randomNum);
    console.log("Sbagliato");

  }i++;
}

console.log(cpuListSorted);











// function arrayRandomElementValue(arraylength , min , max){
// var random = Math.floor(Math.random()*(max - min + 1)+1);

//
// }

// function arrayDifferentElementValue(array){}
