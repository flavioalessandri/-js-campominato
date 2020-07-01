// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


//Generate a 16 random numbers array . Value from 0 to 100;

var cpuList = myRandomArray(8,0,100);
console.log(cpuList);
var i = 0;
var userList =[];
var userNum =0;
var contatore = 0;



while(i < 4 && contatore == 0){
  console.log(contatore);
  var userNum = parseInt(prompt("Digita un numero tra 0 e 100:"));
    if((userNum<=100) && (!isNaN(userNum) && contatore == 0)) {
      var result = compareTwoArrays(cpuList, userList,userNum);
      console.log("result",result);
      console.log("cpulist",cpuList);
      console.log("userList",userList);

      //   if(cpuList.indexOf(i) !== -1) {
      //     console.log(cpuList.indexOf(i));
      //     alert("Hai vinto");
      //   }
      //     else{
      //       alert("Hai perso");
      //     }


  } else {
    alert("fuori dal gioco");
      contatore = i+1;
  }i++;
}

function compareTwoArrays(listA,listB,num){
  var enter = false;
  for (var i = 0; i < listA.length; i++) {
    if( (listA.indexOf(i) !== -1) && (listB.indexOf(i) !== -1)){
      listA.push(num);
      listB.push(num);
      return listA;
    }
    enter = true;
    return false;
  }
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
