import React from 'react'
import { Box, Flex, Text } from '@theme-ui/components'
import { Cooking } from './Cooking'
import seabassImage from "./images/steamed-seabass.jpg"
import steakImage from "./images/steak.jpeg"

const recipes = [
  {
    title: "Steak",
    image: steakImage,
    ingredients: ["steak, ribeye", "thermapen"],
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
    title: "Steam Seabass",
    image: seabassImage,
    ingredients: ["seabass", "scallion for deco", "thermapen"],
    steps: ["light season seabass with salt and peper",
      "boil water",
      "medium heat to steam seabass",
      "until internal temp reaches 60C or 140F",
      "boil a little fish soysauce (or soysauce with brown sugar) and pour it on top of the fish"],
  },
]
export const Cookings = () => {
  return (<Box>
    {recipes.map(recipe => {
      return (<Cooking {...recipe} />)
    })}
  </Box>)
}