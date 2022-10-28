// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
 
  const soundChoice = document.getElementById('horn-select'); 
  const soundChosen = document.querySelector("[class='hidden']");   //get audio element

  const buttons = document.getElementsByTagName('button');     //get button
  const jsConfetti = new JSConfetti();                       //confetti object

  const volumeChoice = document.querySelector('input');

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

  volumeChoice.addEventListener('input', (event) => {

    const volumeImage = document.getElementsByTagName('img')[1];
    if(event.target.value == 0){
      volumeImage.src = 'assets/icons/volume-level-0.svg'
    }
    else if(event.target.value >= 1 && event.target.value < 33){
      volumeImage.src = 'assets/icons/volume-level-1.svg'
    }
    else if(event.target.value >= 33 && event.target.value < 67){
      volumeImage.src = 'assets/icons/volume-level-2.svg'
    }
    else if(event.target.value >= 67){
      volumeImage.src = 'assets/icons/volume-level-3.svg'
    }
    
    soundChosen.volume = event.target.value/100; 
  });

  buttons[0].addEventListener('click', (event) => {           //button gets clicked event, receiving correctly, need to play
    if(soundChoice.value == 'party-horn'){
      jsConfetti.addConfetti({
        emojis: ['💥', '✨'],
        confettiNumber: 150
     });
    }
    soundChosen.play(); //play sound 
  });










}