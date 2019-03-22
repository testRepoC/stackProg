//cardType array declaration
var cType = ["Diamond","Spade","Heart","Club"];
//total cards of each type array declaration
var thirteenCards = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
//array of 52 cards initialization;
var totalCards = [];

/*clear the contents of an array*/
function empty(arrayObj) {
    //empty your array
    arrayObj.length = 0;
}



/**
** This routine is to Get the stack of 52 cards
**/

function stacking(){
        //clear the array contents if anything exists due to previous runs
        empty(totalCards);
        //starting with threen cards type
      outer: for(var i =0; i<thirteenCards.length; i++){ 
            //each of the thirteen cards would have a type
            inner: for(var j=0; j<cType.length; j++){ 
              //Log.Message(cType[j]+"*"+thirteenCards[i]);
              //pushing each of the card created to the array: totalCards
                totalCards.push(cType[j]+"-"+thirteenCards[i]);
            }//ending inner loop here

      } //ending outer loop here
      
      //calculate the totalcards in the stack here
      Log.Message("Total cards in the stack: " +totalCards.length);
      //returning the array which has 52 cards; will use this array for shuffling
      return totalCards;

}


/*I took online help to see a piece of code to help me shuffle the array when the array object is passed to the
*following routine. This is using the math object and it's methods 
*1. floor();  - Returns the largest integer less than or equal to a number.
*2. random();  - generates a value between [0-1)
*
*/
function shuffleAnArray(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

 
/* Function to shuffle an array*/
function shuffle(){ 
  
var shfArray  = shuffleAnArray(stacking());
for (var i in shfArray){ 
  Log.Message(shfArray[i]);
}


}
 
/*Dealing as many cards as possible to a number of players that would be specified by the program's user
**** This routine takes an arg of 'number of players' and distributes the number of cards evenly among all the players
*/
function dealCards(numberOfPlayers){ 
 
  try{ 
    
          if(numberOfPlayers <= 0) throw "Not enought players";

          if(numberOfPlayers >52) throw "Too many players";
          
          if(isNaN(numberOfPlayers)) throw "Pass a acceptable number for the numberOfPlayers";
          
          if(typeof numberOfPlayers === undefined && numberOfPlayers === null) throw "Pass a valid value for number of players";
  
          if(numberOfPlayers > 0 && numberOfPlayers <= 52){ 
            //here's the array containing 52 card elements
            var shfArray  = shuffleAnArray(stacking());
  
            //based on the number of users, we can splice the array and then publish who got what and what's the leftover
            var arrDistributedCards = [];
            var arrFinalCardsDistributed = [];
            var p = "Player";
            var t = 0;
  

  
            var evenSplits = parseInt((shfArray.length)/ numberOfPlayers); 
            var leftovers = (shfArray.length)% numberOfPlayers;
            var totalCardsToDeal  = (shfArray.length) - leftovers;

            //print the valiable values in the logs
            Log.Message("evenSplits:" +evenSplits);
            Log.Message("leftOvers: "+leftovers);
            Log.Message("players: "+numberOfPlayers);
            Log.Message("stack size "+(shfArray.length));


          //loop to deal cards among number of players set by the user
               for(var x =1; x<evenSplits+1; x++){
                    //loop to repeat the distribution of cards from the stack after each round of distributing a single card to each player
                    for(var t= 1;t<numberOfPlayers+1; t++){
                
                        //removing the cards from the stack as the distribution occurs
                    arrDistributedCards.push(shfArray.shift());
                      //adding the distributed cards of another array for keeping track of who gets what
                      Log.Checkpoint(p+t+ " gets: "+arrDistributedCards.pop());
                      arrFinalCardsDistributed.push(arrDistributedCards.pop())
            
                    }
                    t=0;//setting counter back to 0 in order to even distribute the cards

               }

              return arrFinalCardsDistributed;

            } 

}catch(e){ 
 Log.Error("Exception occured: " +e); 
 
}   
    
 
}

