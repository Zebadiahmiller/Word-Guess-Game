

const characters = ['aragorn', 'radagast', 'sauron', 'melkor', 'olorin'];
// let selectedChars =[];
const selectedWord = characters[Math.floor(Math.random() * characters.length)];
console.log(selectedWord)
const selectedWordArray = selectedWord.split('');
let blanks = 0;
const rightWrong = [];
const wrongGuess = [];

// array full of underscores
var underscoreArray = [...Array(selectedWord.length).keys()].fill('_ ');

var underscoreString = underscoreArray.join('');
document.getElementById('currentword').innerHTML = underscoreString;

document.addEventListener('keyup', function (event) {
    var key = event.key
   
    for (i = 0; i < selectedWordArray.length; i++) {
        if (selectedWordArray[i] === key) {
            underscoreArray[i] = key
        };
        if (selectedWordArray[i] !== key){
            document.getElementById('guesses').innerHTML = underscoreString;

        };
    }
    console.log(underscoreArray)
    underscoreString = underscoreArray.join('');
    document.getElementById('currentword').innerHTML = underscoreString;

});







console.log(underscoreArray)




