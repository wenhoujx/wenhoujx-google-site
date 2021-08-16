import React from 'react'
import { Box, Flex, Card, Image, Text, Grid } from '@theme-ui/components'
import { recipes } from './recipes'

export const Cookings = () => {
  return (<Box>
    <Grid gap={1} columns={[2, '1fr 3fr']}>
      {recipes.map(({ title, image, steps, ingredients }) => {
        return (
          <>
            <Box
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
          </>
        )
      })}

    </Grid>

  </Box>)
}
