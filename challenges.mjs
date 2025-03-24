import { answer, decodePlanetarySymbols, decodePoem, decodeBookCipher } from './app.mjs';

// Challenge 1: Decode "☉☿☽♂☉"
answer(decodePlanetarySymbols('☉☿☽♂☉')); // Answers: 'Gold Quicksilver Silver Iron Gold' 

// Challenge 2: Decode poem "Still flows the Icy Lethe, Veiling all ’neath Eldritch Rime"
answer(decodePoem('Still flows the Icy Lethe, Veiling all ’neath Eldritch Rime')); // Answers: 'SILVER'

// Challenge 3: Decode book cipher from 'Chirurgische Bücher und Schrifften'
const page = `effigiesbhilippitheophrastiabhophnlippustheouxrvstusbombasthohenheimensissvevorvmexpanagyrisnobiliumarpinasconfaderatorumeremicremitaphilosophusparadoxusmysteriachaartiummagistermedicinarumprofessormufarummechanicarumtrismegistvsgermanus`;
const cipher = '17 20   20 9 17 24 4 34   24 127 127 1 8 8   17 20   17 10 1   34 1 46 17   48 24 45 12 17 ,   4 34 9 45 17   17 10 1   2 20 23 38 45 12 24   2 20 23   17 10 1   17 10 1   2 20 45 23 17 10   1 12 1 38 1 34 17 ;   127 20 38 29 4 34 1   38 1 23 127 45 23 108 ,   127 20 9 9 1 23   24 34 131   8 45 12 2 45 23   20 48 1 23   10 1 24 17 ,   24 131 131   8 24 12 17   24 34 131   270 24 17 1 23 ,   4 34 2 45 8 1   5 20 12 131   17 10 23 20 45 5 10   24 4 23 ';
console.log(decodeBookCipher(page, cipher)); // Answers: 'to  obtain  access  to  the  next  vault   inbut  the  forpula  for  the  the  fourth  elepent   copbine  percurc   cobber  ani  sulfur  over  heat   aii  salt  ani   ater   infuse  goli  through  air'
answer('☿♀🜍🜂🜔🜄☉🜁'); // Mercury Copper Sulfur Heat Salt Water Gold Air
