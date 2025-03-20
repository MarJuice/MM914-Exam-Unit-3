import { answer, decodePlanetarySymbols, decodePoem } from './app.mjs';

// Challenge 1: Decode "☉☿☽♂☉"
answer(decodePlanetarySymbols('☉☿☽♂☉')); // Answers: 'Gold Quicksilver Silver Iron Gold' 

// Challenge 2: Decode poem "Still flows the Icy Lethe, Veiling all ’neath Eldritch Rime"
answer(decodePoem('Still flows the Icy Lethe, Veiling all ’neath Eldritch Rime')); // Answers: 'SILVER'