// explore.js

window.addEventListener('DOMContentLoaded', init);



function init() {
  
  const voiceSelector = document.querySelector('select');
  const textFieldInput = document.getElementById('text-to-speak'); 
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
    const utterance = new SpeechSynthesisUtterance('');      

    for (let i = 0; i < voicesList.length ; i++) {
      if (voicesList[i].name === selectedOption) {    //set voice to be spoken to be selected voice
        utterance.voice = voicesList[i];
      }
    }

    utterance.text = textFieldInput.value;      //set text to be spoken to be text in field
    speechSynth.speak(utterance);             //speak it

  });



}
