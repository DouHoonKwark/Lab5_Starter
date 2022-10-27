// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
 
  const soundChoice = document.getElementById('horn-select'); 
  const soundChosen = document.querySelector("[class='hidden']");   //get audio element

  const buttons = document.getElementsByTagName('button')     //get button
  const jsConfetti = new JSConfetti()                       //confetti object


  soundChoice.addEventListener('change', (event) => {
        
      const displayImage = document.getElementsByTagName('img');   //img ref
      switch(soundChoice.value){
        case 'air-horn':
          displayImage[0].src = 'assets/images/air-horn.svg';
          soundChosen.src = 'assets/audio/air-horn.mp3';
          break;
        case 'car-horn':
          displayImage[0].src = 'assets/images/car-horn.svg'; 
          soundChosen.src = 'assets/audio/car-horn.mp3';
          break;
        case 'party-horn':
          displayImage[0].src = 'assets/images/party-horn.svg';
          soundChosen.src = 'assets/audio/party-horn.mp3';
          break;
      }

  });

  buttons[0].addEventListener('click', (event) => {           //button gets clicked event, receiving correctly, need to play
    if(soundChoice.value == 'party-horn'){
      jsConfetti.addConfetti();
    }
    soundChosen.play(); //play sound 
  });










}