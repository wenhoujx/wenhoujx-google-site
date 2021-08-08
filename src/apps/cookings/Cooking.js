import { Grid, Flex, Box, Text, Card, Image } from "@theme-ui/components"

export const Cooking = ({ title, image, ingredients, steps }) => {
  return (
    <Flex p={2} mb={2}
      sx={{
        width: "100%",
        background: "#AFEEEE",
        flexWrap: "wrap"
      }}>
      <Box p={2}
        sx={{
          flexGrow: 1,
        }}>
        <Card
          sx={{
            maxWidth: 256,
          }}>
          <Image src={image} />
        </Card>
        <Text>{title}</Text>
      </Box>

      <Flex
        sx={{
          flexDirection: "column",
          flexGrow: 3,
        }}>
        <Box p={2}
          sx={{
            width: "100%",
            background: "#87CEEB"
          }}>
          <Text color="blue">Ingredients</Text>
          <ul>
            {ingredients.map(ingredient => (<li>{ingredient}</li>))}
          </ul>
        </Box>
        <Box p={2}
          sx={{
            width: "100%",
            background: "#90EE90"

          }}>
          <Text color="blue">Steps</Text>
          <ol>
            {steps.map(step => (<li>{step}</li>))}
          </ol>
        </Box>
      </Flex>
    </Flex>)
}