let alphabet = ["A", "B", "C", "D", "E", "F", "H",
     "L", "M", "N", "P", "E", "S", "T", "U", "V"];


function generateNumbers() {
    let numberToRandom = ((Math.random() * 9999) + 100);
    let randomNumber = Math.floor(numberToRandom); 
    return randomNumber;
};

function generateLetters() {
    let randomAlphabetNumber = Math.floor(((Math.random() * (alphabet.length -1)) + 1));
    let randomLetter = alphabet[randomAlphabetNumber];
    return randomLetter; 
};

function generatePiNumber() {
    let number = generateLetters()+generateNumbers();
    return number;
}; 

console.log(generatePiNumber());

const piNumberContainer = document.getElementById('piNumberContainer');

let piNumberToAdd = document.createElement("p");
piNumberToAdd.innerHTML = generatePiNumber();
piNumberContainer.appendChild(piNumberToAdd);

function removePiNumber() {
    piNumberContainer.removeChild(piNumberToAdd);
  
};

function showPiNumber() {
    removePiNumber();
    let numbersToAddAgain = generateNumbers();
    let letterToAddAgain = generateLetters();
    let piNumberToAddAgain = numbersToAddAgain + letterToAddAgain;
    piNumberToAdd = document.createElement("p");
    piNumberToAdd.innerHTML = piNumberToAddAgain;
    piNumberContainer.appendChild(piNumberToAdd);
};



