import fetch from "node-fetch";

//#region api urls
const API_URL = 'https://alchemy-kd0l.onrender.com/';
const PLAYER_NAME = 'mariuha@uia.no';
const CLUE_URL = `${API_URL}clue?player=${PLAYER_NAME}`;
const startURL = `${API_URL}start?player=${PLAYER_NAME}`;
const ANSWER_URL = `${API_URL}answer`;
//endregion

//#region fetch api
const start = await fetch(startURL, { method: 'GET' });
const startResponse = await start.json();
console.log(startResponse);

// get clue from API
// const clue = await fetch(CLUE_URL, { method: 'GET' });
// const clueResponse = await clue.text();
// console.log(clueResponse);

async function answer(solution) {

    const request = await fetch(ANSWER_URL, {
        method: 'POST',
        body: JSON.stringify({ player: PLAYER_NAME, answer: solution}),
        headers: {
            'Content-Type': 'application/json'
        },
    });

    const response = await request.json();
    console.log(`answer: ${solution}`);
    console.log(response);

}
//endregion

//#region helper functions

// Translate planetary symbols to elements
function decodePlanetarySymbols(input) {
    const SYMBOLS = {
        '☽':'Silver',
        '☿':'Quicksilver',
        '♀':'Copper',
        '☉':'Gold',
        '♂':'Iron',
        '♃':'Tin',
        '♄':'Lead',
        '🜍':'Sulfur',
        '🜔':'Salt',
        '🜁':'Air',
        '🜃':'Earth',
        '🜂':'Fire',
        '🜄':'Water',
    };

    // Split the input into array of symbols, print the associated element in new string
    return input.split('').map(symbol => SYMBOLS[symbol]).join(' ');
}

// Extract capital letters from input
function decodePoem(input) {
    let decodedWord = '';
    // Check each letter
    for (let letter of input) {
        if (/[A-Z]/.test(letter)) { // Nothing but capital letters
            decodedWord += letter;
        }
    }
    return decodedWord;
}

// Extract word at indexes on page
function decodeBookCipher(pageContent, cipher) {
    let decodedPage = '';
    
    // Separate each number in cipher into array, map each number to corresponding letter on page
    cipher.split(' ').map((letter) => {
        letter = pageContent[letter - 1];
        decodedPage += letter ? letter : ' '; // Add space if there's no number in cipher
    }).join(' ');
   
    return decodedPage;
}

// Shift alphabet letter with key
function decodeAlphabetCipher(input) {
    const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ '; // Alphabet
    const KEY = 'HOPSUMDTLKWIBCNYERGJQXVZFA '; // Key
    let decodedWord = '';

    // Check each letter
    for (let letter of input) { 
        decodedWord += ALPHABET[KEY.indexOf(letter)]; // Add letter from alphabet with index of the key
    }
    return decodedWord;
}

// Find both instances of the sequence in a crossword
function decodeCrossword(crossword, sequence) {
    const rows = crossword.split('\n'); // Split rows into array
    const columns = [];
    const solution = {row: null, col: null}; // Function needs to return two values, so I'm using an object
    
    for (let col = 0; col < rows.length; col++) {
        let column = [];
        for (let row = 0; row < rows.length; row++) {
            column.push(rows[row].split(' ')[col]); // Important formatting
        }
        columns.push(column.join(' '));
    }

    // Find the sequence in the rows and columns arrays
    rows.map((row, index) => {
        if (row == sequence) {
            solution.row = index + 1;
        }
    });
    columns.map((col, index) => {
        if (col == sequence) {
            solution.col = index + 1;
        }
    });

    return { row: solution.row, col: solution.col }; 
}

//endregion

export { answer, decodePlanetarySymbols, decodePoem, decodeBookCipher, decodeAlphabetCipher, decodeCrossword };