

const characters = ['aragorn', 'radagast', 'sauron', 'melkor', 'olorin'];
// let selectedChars =[];
const selectedWord = characters[Math.floor(Math.random() * characters.length)];
console.log(selectedWord)
const selectedWordArray = selectedWord.split('');
let blanks = 0;
let wrongLetter = [];
const wrongGuess = [];
let wins = 0
let guessesLeft = 9;

// array full of underscores
var underscoreArray = [...Array(selectedWord.length).keys()].fill('_ ');

var underscoreString = underscoreArray.join('');
document.getElementById('currentword').innerHTML = underscoreString;

document.addEventListener('keyup', function (event) {
    var key = event.key
   
    for (let i = 0; i < selectedWordArray.length; i++) {
        if (selectedWordArray[i] === key) {
            underscoreArray[i] = key
        }
        else {
            
            guessesLeft--;
        }
    }

    //win conditions
  if (underscoreArray.toString() == selectedWordArray.toString()){
      wins++;
      document.getElementById('wins').innerHTML =wins;
      
  }
    
    
    console.log(underscoreArray)
    underscoreString = underscoreArray.join('');
    document.getElementById('currentword').innerHTML = underscoreString;
    underscoreString = wrongLetter.join('');
    
    document.getElementById('guessesleft').innerHTML = guessesLeft;

});
console.log(wrongLetter)







console.log(underscoreArray)




