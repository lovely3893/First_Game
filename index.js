function diceScore() {
    var randomNumber1;
    randomNumber1=Math.floor((Math.random()*6))+1;
    return randomNumber1;
}
var player1=diceScore();
var player2=diceScore();
document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice" + player1 + ".png");
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice" + player2 + ".png");
if(player1===player2){
    document.getElementsByClassName("heading")[0].innerHTML="Draw!";
}else if(player1 > player2){
    document.getElementsByClassName("heading")[0].innerHTML="Player 1 wins!!";
}else{
    document.getElementsByClassName("heading")[0].innerHTML="Player 2 wins!!";
}
