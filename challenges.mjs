import { answer, decodePlanetarySymbols, decodePoem, decodeBookCipher, decodeAlphabetCipher, decodeCrossword } from './app.mjs';

// Challenge 1: Decode "☉☿☽♂☉"
answer(decodePlanetarySymbols('☉☿☽♂☉')); // Answers: 'Gold Quicksilver Silver Iron Gold' 

// Challenge 2: Decode poem "Still flows the Icy Lethe, Veiling all ’neath Eldritch Rime"
answer(decodePoem('Still flows the Icy Lethe, Veiling all ’neath Eldritch Rime')); // Answers: 'SILVER'

// Challenge 3: Decode book cipher from 'Chirurgische Bücher und Schrifften'
const page = `effigiesbhilippitheophrastiabhophnlippustheouxrvstusbombasthohenheimensissvevorvmexpanagyrisnobiliumarpinasconfaderatorumeremicremitaphilosophusparadoxusmysteriachaartiummagistermedicinarumprofessormufarummechanicarumtrismegistvsgermanus`;
const cipher = '17 20   20 9 17 24 4 34   24 127 127 1 8 8   17 20   17 10 1   34 1 46 17   48 24 45 12 17 ,   4 34 9 45 17   17 10 1   2 20 23 38 45 12 24   2 20 23   17 10 1   17 10 1   2 20 45 23 17 10   1 12 1 38 1 34 17 ;   127 20 38 29 4 34 1   38 1 23 127 45 23 108 ,   127 20 9 9 1 23   24 34 131   8 45 12 2 45 23   20 48 1 23   10 1 24 17 ,   24 131 131   8 24 12 17   24 34 131   270 24 17 1 23 ,   4 34 2 45 8 1   5 20 12 131   17 10 23 20 45 5 10   24 4 23 ';
console.log(decodeBookCipher(page, cipher)); // Answers: 'to  obtain  access  to  the  next  vault   inbut  the  forpula  for  the  the  fourth  elepent   copbine  percurc   cobber  ani  sulfur  over  heat   aii  salt  ani   ater   infuse  goli  through  air'
answer('☿♀🜍🜂🜔🜄☉🜁'); // Mercury Copper Sulfur Heat Salt Water Gold Air

// Challenge 4: 'Extract capital letters'
const ch4Poem = 'through Hidden experiments, the Observing Philosophers carefully recorded their findings in secret tomes. rarely did alchemists Seek answers in mundane texts, for the Universal substance eluded ordinary understanding. beyond the limits of ordinary Methods, the most Dedicated scholars turned to alchemical science, where hidden truths awaited discovery. Truly, the masters of old knew that one must strive tirelessly, purifying Lead into something greater, refining both mind and matter. ntil mastery was achieved, Knowledge alone was insufficient, and only those who understood the deeper mysteries Would glimpse Immortality. secrets, carefully veiled Behind Cryptic inscriptions, teach those with patience to decode their deeper meaning. hermetic ideals demand perseverance, a willingness to question, and an acceptance that the path to wisdom is rarely direct. long nights spent in study and contemplation lead to illumination, and oaths taken by true seekers bind them to their Noble quest. Yet the philosopher’s stone remains Elusive, and only through great sacrifice is the truth Revealed. elixirs, said to restore itality and even grant eternal youth, were concocted by those who dared to challenge nature’s limits. distillations, performed under the guidance of celestial alignments, promised insight beyond mortal comprehension. Gold, though treasured by the common man, held greater meaning to those who understood the principle of transmutation. Joining knowledge of the material and the divine, true alchemists saw wealth not in metal, but in enlightenment. notable are those who pursued the Quintessence, a substance believed to bind together the four classical elements. wielders of this hidden force were said to shape reality itself, while Xenon and other elusive Vapors symbolized the mysteries of the aether. yields of failed experiments were many, but each failure brought the dedicated scholar closer to true wisdom. Zeal alone was not enough—patience, discipline, and intellect were the true keys to unlocking the universe’s greatest secret. through the Forgotten knowledge of Ancient scholars, keepers of wisdom have safeguarded the elusive keys to transformation. only those who fully commit to the pursuit of enlightenment can grasp the final mysteries.';
console.log(decodePoem(ch4Poem)); // Answers: HOPSUMDTLKWIBCNYERGJQXVZFA
console.log(decodeAlphabetCipher('DNIS PNYYUR DNIS DNIS GLIXUR')); // GOLD COPPER GOLD GOLD SILVER
console.log(decodeAlphabetCipher('UHRJT BURPQRF PNYYUR MLRU HLR')); // EARTH MERCURY COPPER FIRE AIR
console.log(decodeAlphabetCipher('MLRU UHRJT IUHS UHRJT GLIXUR')); // FIRE EARTH LEAD EARTH SILVER
console.log(decodeAlphabetCipher('LRNC DNIS GLIXUR VHJUR DNIS')); // IRON GOLD SILVER WATER GOLD
console.log(decodeAlphabetCipher('PNYYUR MLRU DNIS LRNC IUHS')); // COPPER FIRE GOLD IRON LEAD
console.log(decodeAlphabetCipher('UHRJT PNYYUR PNYYUR JLC BURPQRF')); // EARTH COPPER COPPER TIN MERCURY

const CROSSWORD = `☉ ♀ ☉ ☉ ☽ 🜃 ☿ ♀ 🜂 🜁 🜂 🜃 ♄ 🜃 ☽ ♂ ☉ ☽ 🜄 ☉ ♀ 🜂 ☉ ♂ ♄ 🜃 ♀ ♀ ♃ ☿
🜄 🜂 ♄ 🜂 🜁 🜂 🜄 ☿ 🜁 ☽ ♂ ☽ ♄ ♃ 🜄 ♄ ♀ ♂ ☉ 🜄 ♂ ☽ ♀ ♂ ♀ ♃ ♄ 🜄 ♃
🜂 ☿ 🜄 ♂ ♀ ♃ ♃ 🜄 ☉ ♂ ♃ 🜂 ♀ 🜂 🜃 🜁 ☉ 🜂 ♀ ♃ ♄ ☽ 🜂 ♂ ♄ ♂ ☉ 🜄 ☉
🜁 🜄 🜂 ☉ ♃ 🜂 🜂 ☿ 🜁 ☿ ♂ ♀ ♂ ♂ ♃ ☽ ☉ 🜂 ☉ ☽ ☿ ♀ 🜂 🜁 ♄ ♂ 🜃 ☉ ♂
☉ 🜂 🜁 ♃ 🜂 ☽ 🜄 ♀ 🜄 🜁 ♃ 🜂 🜂 ♂ 🜂 ♃ ☽ ☽ 🜂 ☉ 🜄 ☉ 🜁 ♀ 🜄 ♃ 🜄 ♂ ☉
☽ ♄ 🜃 ♀ 🜄 ♃ 🜁 ♃ 🜃 🜂 🜂 🜂 🜂 ♄ 🜂 🜄 🜃 ♀ 🜁 🜁 🜂 🜃 ☽ 🜁 ☿ 🜂 🜂 ♂ ☽
☉ ♄ 🜁 ♄ ☿ ♄ ☉ ☉ ☽ ♄ ♀ ☉ 🜄 ♄ 🜁 ♂ ☿ ☿ 🜄 ♃ ♀ ☿ 🜃 ♂ ☿ ♀ ☽ ♀ 🜃
☉ ☿ 🜁 🜂 ♂ ♀ 🜁 🜂 🜁 ☽ 🜂 ♀ ☉ 🜃 ♄ ♃ ♀ ☽ ☽ 🜄 ☉ ♃ 🜂 🜂 🜃 🜄 ♀ ☽ 🜄
🜃 🜂 ♀ ♀ ☽ 🜃 ☿ ♃ 🜄 🜃 🜃 ☉ ♃ 🜁 ♄ 🜁 🜂 🜁 🜄 🜁 ☽ ♃ 🜂 ♀ 🜃 ☿ ☿ 🜁 🜃
☿ ♀ ♀ ☉ ♄ 🜄 ♂ ☽ ☉ ♀ ☿ 🜃 ☿ ♄ ♄ 🜂 🜁 🜃 ☽ ♃ ☿ ♃ ♃ ♂ ♄ ☉ 🜂 ☉ 🜁
🜄 🜃 ☽ 🜄 ☿ ♀ ☿ 🜃 ☿ ☿ ♀ ☿ 🜁 ♀ ♄ ♄ 🜂 ♄ 🜃 ☽ ♂ ♀ ☿ ☽ ♃ ♂ ♄ ♄ 🜄
🜃 🜂 🜁 ♄ ♂ ☽ ♀ 🜃 🜁 🜂 ♄ ☿ ☽ ☽ 🜄 🜁 🜃 ☉ ☉ ♄ ♂ ☽ ♃ 🜄 ♃ 🜃 ☿ ♃ ☿
🜄 ♂ ♀ ♂ ♀ ♂ 🜄 ♀ ♂ 🜂 🜁 🜂 ♄ ☿ ☿ ☽ ♄ ♀ 🜄 ☽ ♂ 🜁 ♃ ☉ 🜄 🜁 🜂 ☉ ♃
♄ ♀ ♄ ♀ 🜃 ♂ ♄ 🜂 ♃ 🜄 ♄ ♀ ☽ ♀ ☽ 🜂 🜃 ♂ ♃ 🜂 ♄ 🜂 ♂ ♃ 🜃 ♂ ♄ ☽ ♀
🜄 ♄ ☽ ☉ 🜃 ☽ ☽ 🜂 ☽ ♀ 🜄 ☉ ♃ ♂ ♄ ♄ ☽ ♄ ☽ ♀ ♀ ♀ 🜄 ♃ 🜃 ♃ ♀ ♀ ♃
♂ ☽ 🜃 🜄 ☉ ♀ 🜄 🜄 🜄 ☽ ♂ 🜂 ♃ ☽ 🜃 ♂ ♂ ♀ ☉ ☿ ♂ ♂ ☉ ☽ ☿ ☉ 🜃 🜁 ♀
🜃 ♄ ♂ 🜂 ☽ ☿ 🜂 🜃 ☉ 🜂 ♄ 🜂 ☿ ♄ 🜃 🜃 ☉ 🜂 ♃ ☽ ☽ ♄ 🜂 ♄ 🜄 ☽ 🜂 ♂ ☿
♃ 🜃 ♀ 🜃 🜁 ☽ ☉ ♃ 🜁 ☽ ♄ 🜄 🜄 ☽ 🜃 ♃ ☽ ☉ 🜂 ♃ ☉ 🜁 ☿ 🜃 ☉ 🜃 ☉ 🜄 ☉
🜁 ♃ 🜁 ☉ ☽ ♄ 🜂 ♀ 🜂 ♃ ☽ ☽ ♃ ☽ ☽ 🜄 🜄 ♀ ☉ ♂ 🜃 ♂ ☉ 🜁 ☿ 🜂 🜃 ♀ ☉
♂ 🜁 ☽ 🜄 ☿ ♃ 🜁 ☉ 🜂 ☽ ♂ 🜄 ♂ ♃ ♄ ♄ ☉ ♀ 🜂 ♄ ☿ ♄ ♀ 🜄 ☿ ♄ ☉ 🜄 🜄
🜂 🜃 ☽ ☉ ☿ 🜂 ♂ ♃ ☿ ☉ ☿ ♄ ☉ ☿ 🜂 🜃 ♀ ☿ ♂ ♃ ♃ ♂ ☉ ♂ ☽ 🜃 🜃 ♂ ♄
☽ 🜁 ☽ 🜁 ☉ ☿ ♄ ♂ ☉ ♂ ☉ ♂ 🜄 ♂ 🜄 ☽ 🜂 ♀ ♂ ☉ ♂ 🜃 ♀ ♃ ☉ ♀ ♃ 🜁 ☿
🜄 ☉ 🜁 ♃ 🜁 ☽ ☿ ☉ ♂ 🜃 🜁 ☽ ☉ 🜃 ♀ ♃ ☉ ♄ ♀ ☿ ♀ 🜁 ♂ ♀ ♄ 🜁 ☽ ☉ ♃
♄ ☿ ☽ 🜄 ☿ ☿ ♄ ♃ ♀ ☿ ♄ 🜂 🜄 ☿ ☿ ♃ ♂ 🜁 ♀ ☽ ☉ ☽ 🜁 🜄 🜃 🜄 ☿ ♀ ☿
☉ ♂ ☽ ♄ 🜄 ♂ ♂ ☉ 🜂 ♃ ☽ ☉ ♄ ♀ 🜁 🜃 ♄ ♃ ☽ ♀ 🜂 ♂ ♃ ♃ 🜃 ☿ ☽ 🜃 ☉
🜄 ♃ ☿ 🜁 ♃ ☿ ☿ ☿ 🜃 ♄ ♃ 🜁 🜄 ♂ ♂ ♃ 🜃 ♄ 🜁 ♀ 🜄 ♃ ☽ ♄ ♂ ♂ 🜂 ☽ ☉
🜁 ♂ 🜂 🜂 🜂 🜁 🜃 🜂 ☿ ♀ 🜃 ♀ 🜃 ♀ ☽ ♃ ♀ ☿ ♄ ☉ 🜄 🜂 🜂 ♀ ☽ 🜂 🜂 ♃ 🜂
🜄 ♃ ☉ 🜁 ♀ 🜃 ☿ ☿ ♀ ♄ 🜃 ♂ 🜂 ☿ ♃ ☉ ♀ ☉ 🜄 ☽ 🜃 ♀ ♀ ♄ ♃ ♀ 🜂 ☉ ☉
☉ ☉ 🜂 ♂ 🜁 🜁 ♄ ☿ ♂ ☿ ☿ ☉ ☽ 🜃 ♀ ♄ ♃ ♀ ♀ 🜃 ♀ ♂ 🜁 ♂ 🜂 ♄ ☿ ☿ ♀
☿ 🜄 ♄ ♃ ♄ ☽ ♃ ♀ ♃ 🜃 🜂 🜄 🜂 ☽ ☿ ☉ ☿ 🜂 ☽ 🜂 ♃ ♂ 🜄 🜃 ☿ ♄ ♄ ☽ 🜂`;

answer(decodeCrossword(CROSSWORD, '☉ ♀ ☉ ☉ ☽ 🜃 ☿ ♀ 🜂 🜁 🜂 🜃 ♄ 🜃 ☽ ♂ ☉ ☽ 🜄 ☉ ♀ 🜂 ☉ ♂ ♄ 🜃 ♀ ♀ ♃ ☿')); // Argon