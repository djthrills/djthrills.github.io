//Lists to be randomized//
const myDreams = ['I loved', 'I want', 'I have', 'I wish', 'On my bucket list is']
const myQuote = ['to play golf at', 'to caddy round', 'to watch golf at', 'to have a round at', 'to win a major at']
const myVenue = ['St Andrews', 'Augusta', 'Pebble Beach', 'Sawgrass', 'The Belfry']
const myAlts = ['if i cant i would', 'if not i would', 'or i would choose to', 'the other option would be to']
const myLocation = ['visit Las Vegas', 'visit Disneyland', 'travel the world', 'visit the pyramids']


//Messages to be looped//
let dreams = myDreams[Math.floor(Math.random() * myDreams.length)];
let quote = myQuote[Math.floor(Math.random() * myQuote.length)];
let venue = myVenue[Math.floor(Math.random() * myVenue.length)];
let alts = myAlts[Math.floor(Math.random() * myAlts.length)];
let location = myLocation[Math.floor(Math.random() * myLocation.length)];


//The messages added together to make a sentance//
let fullString = `${dreams} ${quote} ${venue} ${alts} ${location}`;
console.log(fullString)

/*console.log(messages);
console.log(quote);
console.log(venue);*/
