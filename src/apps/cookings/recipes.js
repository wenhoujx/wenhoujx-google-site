import seabass from "./images/steamed-seabass.jpg"
import steak from "./images/steak.jpeg"
import simpleShrimp from "./images/simple-shrimp.jpeg"
import saltDuck from "./images/salt-duck.jpeg"

export const recipes = [
  {
    title: "Steak (牛排)",
    image: steak,
    ingredients: ["steak", "thermapen"],
    steps: [
      "light season steak with salt and peper",
      "Oven pre-heat 400F",
      "high heat cast iron pan until smoking",
      "sear each side 1 minute",
      "add rosemary and butter and heat another 30seconds",
      "move to oven",
      "until internal temp reaches 65C or 130F (for medium rare)",
      "take out of oven (with a mint!) and rest for 10 minutes",
      "slice and sprinkle salt",
    ]
  },
  {
    title: "Steam Seabass (清蒸鳕鱼)",
    image: seabass,
    ingredients: ["seabass", "scallion for deco", "thermapen"],
    steps: ["light season seabass with salt and peper",
      "boil water",
      "medium heat to steam seabass",
      "until internal temp reaches 60C or 140F",
      "boil a little fish soysauce (or soysauce with brown sugar) and pour it on top of the fish"],
  },
  {
    title: "Shrimp (白灼虾)",
    image: simpleShrimp,
    ingredients: ["shrimp", "cooking wine", "salt", "ginger, garlic"],
    steps: [
      "high heat frying pan",
      "add a little oil",
      "add garlic, ginger",
      "add shrimp, add a spoon of cooking wine, cover the lid",
      "turn to low-medium heat",
      "turn off heat after 3 minutes",
      "wait another minute to open the lid",
      "done"
    ]
  },
  {
    title: "Salt Duck (盐水鸭)",
    image: saltDuck,
    ingredients: ["duck legs", "szechuan pepper", "lots of salt", "ginger, garlic", "cooking wine"],
    steps: [
      "low heat stir fry salt til brown",
      "add szechuan pepper and stir for another minute",
      "turn off heat, wait for cool down",
      "dry whole duck legs",
      "massage the salt and pepper mix onto the duck evenly",
      "seal in plastic bag and fridge for 2 days",
      "2 days later...",
      "boil water",
      "put in the duck, simmer for 30 minutes on very low heat",
      "turn off heat, fridge the pot with the duck until cool down",
      "chop duck and enjoy",
    ]
  },
]
