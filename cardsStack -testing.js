///////////////////////////////////////////////////////////////////////////////////////////////////////

/* Tests**
** Following tests are to test all the code written above
1. Verify each shuffle brings up a new card on the top of a stack
2. Verify that stack doesn't get multliplied with each call of function stacking()
3. Check the cards distribution for odd number of players
4. Check the cards disribution for even number of players
5. passing undefined number of players to deal cards
6. pass 0 players to deal cards
7. pass 53 players to deal cards

*/



function testStackRoutines(){ 
  
/**Each shuffle should bring up a new card on the top of a stack
 Test -1 
**/

var shfArray  = shuffleAnArray(stacking());

var topCrdFirstShuffleOne  = shfArray[0];

var shfArraySecond  = shuffleAnArray(stacking());

var topCrdFirstShuffleTwo = shfArray[0];


//check 2 top cards after each shuffle
if(topCrdFirstShuffleTwo == topCrdFirstShuffleOne){ 
  Log.Error("Shuffle didn't work");
}else{ 
  Log.Message("PASS: Shuffle works");
}

//Test-2 : check that stack doesn't get multliplied with each call of function stacking()
  // The stack has already been called twice in Test-1

if(shfArray.length >52){ 
  Log.Message("ERROR: Stack size is increasing with each call to the stack");
}else{ 
  Log.Message("PASS: Stack size remains the same with each call");
}



//Test-3 Check the total count distributed cards when odd number of players are playing
var oddPlayersCardsArr = dealCards(7);
var oddSize = oddPlayersCardsArr.length;

Log.Message("odd size: "+ oddSize);

if(oddSize%7 == 0 && oddSize/7 == 7){ 
  Log.Message("PASS: Right number of cards are distributed among odd number of players");
}else{ 
  Log.Message("ERROR: Cards are not distributed evenly among the odd number of players");
}

//Test-4 Check the total count distributed cards when even number of players are playing
var evemPlayersCardsArr = dealCards(4);
var evenSize = evemPlayersCardsArr.length;
Log.Message("even size: "+ evenSize);
if(evenSize%4 == 0 && evenSize/4 ==13){ 
  Log.Message("PASS: Right number of cards are distributed among even number of players");
}else{ 
  Log.Message("ERROR: Cards are not distributed evenly among the even number of players");
}


//Test -5 passing a undefined param as numberOfPlayers - This is going to throw an exception in the logs
var a;
Log.Message("For undefined numberOfPlayers: "+ dealCards(a));

//Test-6 passing 0 players to dealCards - This is going to throw an exception in the logs
Log.Message("For 0  numberOfPlayers: "+ dealCards(0));
//Test-7 setting 53 players - This is going to throw an exception in the logs
Log.Message("For 53 numberOfPlayers: "+ dealCards(53));

}
