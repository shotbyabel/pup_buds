var stark_vassals = [
  {
    house: "Bolton",
    lord:  "Roose",
    seat:  "The Dreadfort",
    vassals: [
      {house: "Whitehill"},
      {house: "Ironsmith"}
    ],
    men_at_arms: 2800
  },
  {
    house: "Cassel", isPetty: true,
    lord:  "Jory",
    seat:  "Winterfell",
    men_at_arms: 50
  },
  {
    house: "Cerwyn",
    lord:  "Medger",
    seat:  "Castle Cerwyn",
    vassals: [{house: "Condon"}],
    men_at_arms: 2200
  },
  {
    house: "Dustin",
    lord:  "Barbrey", isFemale: true,
    seat:  "Barrowton",
    vassals: [{house: "Stout", seat: "Goldgrass"}],
    men_at_arms: 1700
  },
  {
    house: "Flint", isBranch: true,
    lord:  "Robin",
    seat:  "Flint's Finger",
    men_at_arms: 800
  },
  {
    house: "Flint",  isBranch: true,
    lord:  "Lyessa", isFemale: true,
    seat:  "Widow's Watch",
    men_at_arms: 1400
  },
  {
    house:   "Glover",
    seat:    "Deepwood Motte",
    lord:    "Galbart",
    vassals: [
      {house: "Bole"},
      {house: "Branch"},
      {house: "Forrester"},
      {house: "Woods"}
    ],
    men_at_arms: 2100
  },
  {
    house: "Hornwood",
    lord:  "Halys",
    seat:  "Hornwood",
    men_at_arms: 2000
  },
  {
    house: "Karstark",
    lord:  "Rickard",
    seat:  "Karhold",
    men_at_arms: 2300
  },
  {
    house: "Locke",
    lord:  "Ondrew",
    seat:  "Oldcastle",
    men_at_arms: 500
  },
  {
    house: "Manderly",
    lord:  "Wyman",
    seat:  "White Harbor",
    vassals: [
      {house: "Ashwood"},
      {house: "Holt"},
      {house: "Long"},
      {house: "Slate"},
      {house: "Woolfield"}
    ],
    men_at_arms: 4500
  },
  {
    house: "Mollen", isPetty: true,
    lord:  "Hallis",
    seat:  "Winterfell",
    men_at_arms: 25
  },
  {
    house: "Mormont",
    lord:  "Maege", isFemale: true,
    seat:  "Bear Island",
    men_at_arms: 1100
  },
  {
    house: "Poole", isPetty: true,
    lord:  "Vayon",
    seat:  "Winterfell",
    men_at_arms: 35
  },
  {
    house:   "Reed",
    seat:    "Greywater Watch",
    lord:    "Howland",
    vassals: [
      {house: "Blackmyre"},
      {house: "Boggs"},
      {house: "Cray"},
      {house: "Fenn"},
      {house: "Greengood"},
      {house: "Marsh"},
      {house: "Peat"},
      {house: "Quagg"},
    ],
    men_at_arms: 2000
  },
  {
    house: "Ryswell",
    lord:  "Rodrik",
    seat:  "The Rills",
    men_at_arms: 800
  },
  {
    house: "Tallhart",
    lord:  "Helman",
    seat:  "Torrhen's Square",
    men_at_arms: 700
  },
  {
    house: "Umber",
    lord:  "Greatjon",
    seat:  "Last Hearth",
    vassals: [{house: "Lake"}],
    men_at_arms: 1800
  },
  {
    clan: "Burley",
    lord: "Bill",
    men_at_arms: 350
  },
  {
    clan: "Flint", isBranch: true,
    lord: "Torghen",
    men_at_arms: 500
  },
  {
    clan: "Harclay",
    lord: "Ronnel",
    men_at_arms: 100
  },
  {
    clan: "Knott",
    lord: "Anon",
    men_at_arms: 200
  },
  {
    clan: "Liddle",
    lord: "Torren",
    men_at_arms: 150
  },
  {
    clan: "Norrey",
    lord: "Brandon",
    men_at_arms: 400
  },
  {
    clan: "Wull",
    lord: "Hugo",
    men_at_arms: 450
  },
];

/*Answer the following questions using all the programming tools at your
    disposal. Provide the code to find the answer, and print it to the
    terminal.*/

// a. How many vassals do the Starks have?

 console.log(starkVassls.length);

//  b. Who is the lord of Deepwood Motte?

console.log(stark_vassals.length);
console.log(stark_vassals[6].lord);
console.log(stark_vasslas[10].vassals.length);

var clans = stark_vassals.filter(function(vassals) {
  return vassal.clans;
});

console.log(clans.length);

