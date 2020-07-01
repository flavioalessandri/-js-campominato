// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.





// Generate a 16 random numbers array . Value from 0 to 100;
var tentativi = 4;
var min=1;
var max = 100;
var lunghezzaArray = 8;
var cpuList = myRandomArray(lunghezzaArray ,min,max);
console.log(cpuList);
var i = 0;
var userList =[];
console.log(userList);
var userNum =0;
var contatore = 0;
var trovato = false;
var punteggio = 0;




while(i < tentativi && trovato == false) {
  var userNum = parseInt(prompt("Digita un numero tra 1 e 100:"));
  if(isInRange(min,max,userNum) == true ) {
    console.log(userList);

    if(isInArray(userList,userNum)) {
      userNum = parseInt(prompt("Rifai:"));
      tentativi++;
      console.log("rifai", tentativi);
    } else {
        userList.push(userNum);
        console.log(userList);
          if (isInArray(cpuList,userNum)) {
            console.log("Hai perso");
            trovato = true;
          } else{
            punteggio++;
            console.log("ultimo else PUNTEGGIO", punteggio);
          }
      }
  } else {
    alert("fuori dal gioco");
      trovato = true;
  }i++;
}


console.log("punteggio",punteggio);

if(punteggio==tentativi){
  console.log("SEI UN CAMPIONE", "punteggio", punteggio, "tentativi" , tentativi);
} else{
  console.log("Quasi! punteggio", punteggio, "tentativi", tentativi);
}




var trovato = false;
var userListX =[];
var i = 0;




function isDuplicate (list, num){
  var i =0;
  var trovato = false;
    while(i<list.length && trovato == false ){
      if(list[i] == num) {
        trovato = true;
        return true;
    } i++;
  }
  return false;
}



function myRandomArray(arrayLength,min,max){
  var list=[];
  while(list.length < arrayLength){
    var randomNum = Math.floor(Math.random() * (max - min + 1)+min);
      if(list.indexOf(randomNum) === -1) {
        list.push(randomNum);
      }
  } return list;
}

function isInArray(array,elemento){
  var i = 0;
  var trovato = false;
  while (i< array.length && trovato ==false){
    if (array[i] == elemento){
      trovato = true;
    }
    i++;
  }
  return trovato;
}



function isInRange (min,max,num){
  if(num>max || num<min || isNaN(num) ){
  return false;
}
return true;
}
