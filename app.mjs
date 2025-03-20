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

export { answer };