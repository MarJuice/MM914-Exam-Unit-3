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

    return input.split('').map(symbol => SYMBOLS[symbol]).join(' ');
}

function decodePoem(input) {
    let decodedWord = '';
    for (let letter of input) {
        if (/[A-Z]/.test(letter)) {
            decodedWord += letter;
        }
    }
    return decodedWord;
}

function decodeBookCipher(pageContent, cipher) {
    let decodedPage = '';
    cipher.split(' ').map((letter) => {
        letter = pageContent[letter - 1];
        decodedPage += letter ? letter : ' ';
    }).join(' ');
   
    return decodedPage;
}

//endregion

export { answer, decodePlanetarySymbols, decodePoem, decodeBookCipher };