/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/




// dice = Math.floor(Math.random()*6)+1; // to calculate a random number between 1 and 6
// document.querySelector("#current-"+active_player).textContent = dice;
//text content - to change the content
//to add html in our page
// document.querySelector("#current-"+active_player).innerHTML = '<em>'+ dice+ '</em>';
// to store an element from the page
// var x = document.querySelector("#score-0").textContent;
// console.log(x);

//changing the css of elements
//to hide the css

var score,active_player,roundscore,gameplay,win_score;
init();

//function triggers
document.querySelector('.btn-roll').addEventListener("click",function() {
    if(gameplay){
       //logic
    // random number
    var dice = Math.floor(Math.random()*6)+1; // to calculate a random number between 1 and 6
    
    var dice1 = Math.floor(Math.random()*6)+1; // to calculate a random number between 1 and 6
    // display the dice image
    
    var dicedom = document.querySelector('.dice');
    document.querySelector('.dice').style.display = 'block';
    document.querySelector('.dice').src = "static/dice-"+dice+".png";

    var dicedom = document.querySelector('.dice1');
    document.querySelector('.dice1').style.display = 'block';
    document.querySelector('.dice1').src = "static/dice-"+dice1+".png";
    //update the round result only if the value is not 1
    if(dice === 6 && dice1 === 6){
        score[active_player] = 0;
        roundscore = 0 ;
        document.querySelector("#score-"+active_player).textContent = score[active_player];
        dry();
    }
    if(dice === 1 || dice1 === 1){
        //add score
        dry();
    }else{
        //change the player status
        document.querySelector("#current-"+active_player).textContent = String(roundscore+dice+dice1);
        roundscore += dice + dice1;
    }

        // if(active_player === 1 ){
        //     document.querySelector('.player-0-panel').classList.remove("active");
        //     document.querySelector('.plyer-1-panel').classList.add("active");
        // }else{
        //     document.querySelector('.player-0-panel').classList.add("active");
        //     document.querySelector('.plyer-1-panel').classList.remove("active");
        // }
      
    
    }
});

document.querySelector(".btn-cancel").addEventListener("click",function(){
    var form = new FormData(document.getElementById("popup-Form-1"));
    document.getElementById('name-0').textContent = form.get("player0");
    document.getElementById('name-1').textContent = form.get("player1");
    win_score = Number(form.get("win-score"));
    document.getElementById("popup-Form").style.display="none";
    console.log("test-1");

    
});

document.querySelector(".btn-hold").addEventListener("click",function(){
    //add current score to the global score
    if(gameplay){
            score[active_player] += roundscore;
            document.querySelector("#score-"+active_player).textContent = score[active_player];
        if(score[active_player] >= win_score){
            document.querySelector("#name-"+active_player).textContent = "WINNER"
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice1').style.display = 'none';
            document.querySelector('.player-'+active_player+'-panel').classList.add('winner');
            document.querySelector('.player-'+active_player+'-panel').classList.remove('active');
            gameplay = false;
        }else{
            dry();
        }   
    }    
});

function dry(){
    prev = 0;
    active_player === 0 ? active_player = 1 : active_player = 0;
    roundscore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');
}

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    document.getElementById("popup-Form").style.display="block";
    score = [0,0];
    roundscore = 0;
    active_player = 0;
    gameplay = true;
    prev = 0;
    win_score = 0;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice1').style.display = 'none';
    document.querySelector("#score-0").textContent = '0';
    document.querySelector("#current-1").textContent = '0';
    document.querySelector("#score-1").textContent = '0';
    document.querySelector("#current-0").textContent = '0';
    // document.getElementById('name-0').textContent = prompt("player 1 name");
    // document.getElementById('name-1').textContent = prompt("player 2 name");
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    

}