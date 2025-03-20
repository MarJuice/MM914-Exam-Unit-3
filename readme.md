## 1 - Initial Setup
I started by creating the files skeletonKey.txt, the app.mjs file and this readme file. I then imported the node-fetch library in order to access the API.

## 2 - The First Challenge
I then repurposed the code from the 'Escape the Earth' assignment to be used with the new API. After loading, it returned the following challenge:

challenge: 'Friend, we are close, I can taste success on the wind, we finally located Paracelsus lab, we will become rich beyond belief, we will rule. All that is needed is cracking the access code, I have been looking at this for days and beyond the inkling that it is an alchemical formula I have no idea. Can you give it a shoot and get us one step closer to the future that we deserve? This is the code “☉☿☽♂☉”, but what it encodes into is a mysteri. Pleace crack it.'

To get the solution I need to figure out an alchemical formula from the code “☉☿☽♂☉”.

I started by just googling the string, and it immediately led to the Wikipedia page for Planetary Symbols (https://en.wikipedia.org/wiki/Planetary_symbols)

The symbols in the string correspond to 'Sun, Mercury, Moon, Mars, Sun'. Since the challenge mentions alchemy, I assume they want me to provide the formula for the most commonly associated metals for each planet: 'Gold, Quicksilver, Silver, Iron, Gold'. I tried many things, 'AuHgAgFeAu' for the chemical elements of the different metals, '7980472679' for the atomic numbers associated with each metal, I tried the sum of the atomic numbers (311) and more. In end it turned out my first guess was correct but the API was bugged... 