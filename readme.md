## 1 - Initial Setup
I started by creating the files skeletonKey.txt, the app.mjs file and this readme file. I then imported the node-fetch library in order to access the API.

## 2 - The First Challenge
I then repurposed the code from the 'Escape the Earth' assignment to be used with the new API. After loading, it returned the following challenge:

challenge: 'Friend, we are close, I can taste success on the wind, we finally located Paracelsus lab, we will become rich beyond belief, we will rule. All that is needed is cracking the access code, I have been looking at this for days and beyond the inkling that it is an alchemical formula I have no idea. Can you give it a shoot and get us one step closer to the future that we deserve? This is the code “☉☿☽♂☉”, but what it encodes into is a mysteri. Pleace crack it.'

To get the solution I need to figure out an alchemical formula from the code “☉☿☽♂☉”.

I started by just googling the string, and it immediately led to the Wikipedia page for Planetary Symbols (https://en.wikipedia.org/wiki/Planetary_symbols)

The symbols in the string correspond to 'Sun, Mercury, Moon, Mars, Sun'. Since the challenge mentions alchemy, I assume they want me to provide the formula for the most commonly associated metals for each planet: 'Gold, Quicksilver, Silver, Iron, Gold'. I tried many things, 'AuHgAgFeAu' for the chemical elements of the different metals, '7980472679' for the atomic numbers associated with each metal, I tried the sum of the atomic numbers (311) and more. In end it turned out my first guess was correct but the API was bugged... 

I first needed to know what the solution was before I could get the program to do it on a larger scale. I proceeded to create the function decodePlanetarySymbols with a simple parameter for the input. The function contains a dictionary with key-value pairs of the symbol string and the corresponding metal as a string. The function should then return a new string with the decoded message. It first separates the string into an array with the .split() method, and then maps over each item of the array with the .map() method. It checks each symbol of the string if it's part of the SYMBOLS dictionary. If it is, it replaces it with the metal string. At the end, it uses the .join() method to add all the items of the array into a string, separated with a blank space between each item (' ').

## 3 - The Second Challenge
After submitting the previous answer, it responded with a poem: 'Still flows the Icy Lethe, Veiling all ’neath Eldritch Rime'. It sounds like gibberish, but I immediately noticed that some words were capitalized. Combining the initial letters of these words makes up the word 'Silver'. Low and behold, it was correct. Now I needed to make a function to extract the capitalized letters of a string.

My first iteration of the function would map each letter and run a test of whether or not the letter had the exact value if it were capitalized by using the .toUpperCase() method. In the end, it became way too much code for something so simple, so I decided to use Regex instead. Even though we've been taught that we should stay away from Regex, for this exact task it was way simpler to just check the string with /[A-Z]/. This was especially the case when spaces and special symbols got included since they don't have cases like letters.

The decodePoem function initializes an empty string, and appends each capital letter. There's a for loop that checks each letter of the input, and adds the letter to the decoded word if it's within the range of A-Z.