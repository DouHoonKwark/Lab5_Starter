// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelector = document.querySelector('select');
  const textFieldInput = document.getElementById('text-to-speak'); 
  const buttons = document.getElementsByTagName('button');   
  const faceImageInList = document.getElementsByTagName('img');   

  const speechSynth = window.speechSynthesis;


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

    function checkIfStillSpeaking(){
        if (speechSynth.speaking) {
            faceImageInList[0].src = "assets/images/smiling-open.png";
        } else {
            faceImageInList[0].src = "assets/images/smiling.png";
        }

    }
      //() => speechSynth.speaking;
      setInterval(checkIfStillSpeaking);    //default delay is 0 ms


  });


}
