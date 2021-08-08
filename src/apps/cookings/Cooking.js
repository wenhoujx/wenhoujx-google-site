import { Flex, Box, Text, Card, Image } from "@theme-ui/components"

export const Cooking = ({ title, image, ingredients, steps }) => {
  return (
    <Flex p={2} mb={2}
      sx={{
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        border: "solid 1px",
        background: "LightGray",
      }}>
      <Card
        sx={{
          maxWidth: 256,
        }}>
        <Image src={image} />
      </Card>
      <Text>{title}</Text>
      <div></div>
      <Box p={2}
        sx={{
          width: "100%",
          background: "silver"
        }}>
        <Text color="blue">Ingredients</Text>
        <ul>
          {ingredients.map(ingredient => (<li>{ingredient}</li>))}
        </ul>
      </Box>
      <Box p={2}
        sx={{
          width: "100%",
          background: "grey"

        }}>
        <Text color="blue">Steps</Text>
        <ol>
          {steps.map(step => (<li>{step}</li>))}
        </ol>

      </Box>

    </Flex>)
}