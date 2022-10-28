// explore.js

window.addEventListener('DOMContentLoaded', init);



function init() {
  
  const voiceSelector = document.querySelector('select');
  const buttons = document.getElementsByTagName('button');   

  const speechSynth = window.speechSynthesis;
  /*
  const inputForm = document.querySelector('form');
  const inputTxt = document.querySelector('.txt');
  const pitch = document.querySelector('#pitch');
  const pitchValue = document.querySelector('.pitch-value');
  const rate = document.querySelector('#rate');
  const rateValue = document.querySelector('.rate-value'); */
  
  let voicesList = [];
  
  function populateVoiceList() {                                            //populating selection list with voices
    voicesList = speechSynth.getVoices();
  
    for (let i = 0; i < voicesList.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voicesList[i].name} (${voicesList[i].lang})`;
  
      if (voicesList[i].default) {
        option.textContent += ' — DEFAULT';
      }
  
      option.setAttribute('data-lang', voicesList[i].lang);
      option.setAttribute('data-name', voicesList[i].name);
      voiceSelector.appendChild(option);

    }
  }
  
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  buttons[0].addEventListener('click', (event) => {                                     //button clicked
    event.preventDefault();

    const selectedOption = voiceSelector.selectedOptions[0].getAttribute('data-name');
    const utterance = new SpeechSynthesisUtterance('Hello There, General Kenobi');      //hardcoded output using all different speech patterns

    for (let i = 0; i < voicesList.length ; i++) {
      if (voicesList[i].name === selectedOption) {
        utterance.voice = voicesList[i];
      }
    }

    speechSynth.speak(utterance);



  });



}
