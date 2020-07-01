// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il finalScore, cioè il numero di volte che l’utente ha inserito un numero consentito.

var start = document.getElementById("start");

start.addEventListener("click", function(){

document.getElementById("result").innerHTML = "";
document.getElementById("finalScore").innerHTML = "";


var difficultyLevel = document.getElementById("difficultyLevel").value;
  if(difficultyLevel === "easy" ) {
    var max = 100;
  } else if (difficultyLevel === "notSoEasy" ) {
    var max = 80;
  } else if (difficultyLevel === "veryLucky" ) {
    var max = 50;
  }

console.log("Difficulty Level: ",difficultyLevel);
console.log("Max range value: ", max); //Max Range value


  var howManyNum = document.getElementById("howMany").value;
    if(howManyNum === "four" ) {
      var howMany = 4;
    } else if (howManyNum === "ten" ) {
      var howMany = 10;
    } else if (howManyNum === "sixteen" ) {
      var howMany = 16;
    }

console.log("How many numbers ", howMany); //how many times User can choose numbers
var arrayLength = 16; //Array length
var userNum =0; // User number via prompt
var min=1; // Min Range value
var i = 0; //counter for cycle
var userList =[]; // the User list to fill with User numbers after every cycle
console.log(userList);

var finded = false; // support variable to enter or exit e cycle
var finalScore = 0; // support variable to enter or exit e cycle

var repeatedNum=0; // variable that changes every time User types the same number

// Generate a 16 random numbers array . Value from 0 to 100;
var cpuList = arrayNotEqualRndNum(arrayLength ,min,max);//Function to define CPU random numbers list
console.log(cpuList);


while(i < howMany && finded == false) {
  var userNum = parseInt(prompt("Please Type a number between 1 and 100:"));
  if(isInRange(min,max,userNum) == true ) { // (1) First control - typed number has to be a number between 1-100
    //if is not in Range go to (5)

    if(isInArray(userList,userNum)==true) { // (2) if User types a number that's already inside userList
      howMany++;                    //increment the attempts
      repeatedNum++;                //count how many times User insert same number
      alert("You have typed the same number! Please, Try an other one:");
      console.log("Same Number! Attempts left ", howMany, ", Same Number Repeated ", userNum);

    } else {                        // (3) if the typed number is not already inside UserList
        userList.push(userNum);     //add User Number inside User List
        console.log("userList: ", userList); //add User Number inside User List

          if (isInArray(cpuList,userNum)) { // (3a) control if the User number is already inside the Cpu number list
            finded = true;   // EXIT WHILE CYCLE! support variable . if UserNum is inside Cpu List  IsInArray = true and the User loose
          } else {                          // (3b) User Number is not inside CpuList
            finalScore++;                             // add point to the score and CONTINUE the WHILE CYCLE
            console.log(" Temporary Score: ", finalScore);
          }           // and of (3)
      }               // and of (2)

  } else {            // 5) if the typed number is not between min and max or isNaN
    alert("End of the Game!");
      finded = true;
  }i++;
}
 //------------------------------------END OF WHILE CYCLE

if(finalScore==(howMany-repeatedNum)){
  console.log("You WIN! ", " Final Score: ", finalScore, "Attempts: " , howMany-repeatedNum);
  document.getElementById("result").innerHTML = "You WIN!";
  document.getElementById("finalScore").innerHTML = " Final Score: " + finalScore + "! " + " Attempts: " + (howMany-repeatedNum);
} else{
  console.log("Unfortunately You Loose!",  "Final Score: ", finalScore);
  document.getElementById("result").innerHTML = "Unfortunately you Loose!";
  document.getElementById("finalScore").innerHTML = " Final Score: " + finalScore + "! ";
}

}) //end of button Start

// .....My Functions............................................

function arrayNotEqualRndNum(arrayLength,min,max){
  var list=[];
  while(list.length < arrayLength){
    var randomNum = Math.floor(Math.random() * (max - min + 1)+min);
    if(list.indexOf(randomNum) === -1) {
      list.push(randomNum);
    }
  } return list;
}

function isInArray(array,item){ //verify is the item is inside an array.
  var i = 0;
  var finded = false;
  while (i< array.length && finded ==false){
    if (array[i] == item){
      finded = true;
    }
    i++;
  }
  return finded;
}


function isInRange (min,max,num){
  if(num>max || num<min || isNaN(num) ){
  return false;
}
return true;
}
