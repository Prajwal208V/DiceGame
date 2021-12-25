
// Selecting elements
var player0El = document.querySelector('.player--0');
var player1El = document.querySelector('.player--1');

var score0El = document.getElementById('score--0');
var score1El = document.getElementById('score--1');

var current0El = document.getElementById('current--0');
var current1El = document.getElementById('current--1');

var diceEl = document.querySelector('#dice');
var btnNew = document.querySelector('.btn--new');
var btnRoll = document.querySelector('.btn--roll');
var btnHold = document.querySelector('.btn--hold');

var scores, currentScore, activePlayer, playing;
// Starting conditions
var init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

var switchPlayer = function () {
  // document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

function winner(){
      playing = false;
      diceEl.classList.add('hidden');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
}
// function play_0_curr(a,b){
//   current0El.textContent=(a+b);         
//   console.log('plyaer0');
// }
// function play_1_curr(a,b){
//   current1El.textContent=(a+b);
//   console.log('plyaer1');
// }
$('.btn--roll').click(function (){
      // 1. Generating a random dice roll
      var dice = Math.trunc(Math.random() * 6) + 1;
          diceEl.src=`dice1${dice}.png`;
          
      if(playing){
          if(dice!=1){
            console.log(dice);
            document.querySelector(`#current--${activePlayer}`).innerHTML=(dice+currentScore);
            console.log(document.querySelector(`#current--${activePlayer}`));
            // if(activePlayer===0){               //----------1
            //   play_0_curr(dice,currentScore);
            // }
            // else{
            //   play_1_curr(dice,currentScore);
            // }
            // document.querySelector(`#current--${activePlayer}`).textContent=dice+currentScore; 
            // console.log(dice,currentScore);
            scores[activePlayer]+=dice+currentScore;
            document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
            if((Math.max(scores[0],scores[1])>=20)){
              winner();
            }
            // console.log(scores[0],scores[1]);
            switchPlayer();
          }
          else {
            btnHold.classList.remove('hidden');
            setInterval(()=>{
            btnHold.classList.add('hidden');
            },2000);
            currentScore+= dice;
            document.querySelector(`#current--${activePlayer}`).textContent=dice; 
            console.log(dice);
          }
      }
});
btnNew.addEventListener('click', init);




