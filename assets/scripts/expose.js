// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
 
  const soundChoice = document.getElementById('horn-select'); 


  soundChoice.addEventListener('change', (event) => {
        
      const displayImage = document.getElementsByTagName('img');   //img ref
      switch(soundChoice.value){
        case 'air-horn':
          displayImage[0].src = 'assets/images/air-horn.svg';
          break;
        case 'car-horn':
          displayImage[0].src = 'assets/images/car-horn.svg';
          break;
        case 'party-horn':
          displayImage[0].src = 'assets/images/party-horn.svg';
          break;
      }
  });


}