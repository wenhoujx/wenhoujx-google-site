import { ThemeProvider, Text, Flex, Container, Box, Button } from 'theme-ui'
import { theme } from "../../theme"
import { Timeline, TimelineEvent } from 'react-event-timeline'
import { events } from "./events"
import React from "react"


export const ChineseHistory = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container variant="main">
        <Flex p={2}>
          <Text variant="" p={2}>Chinese history</Text>
          <Box>
            <Button mr={2}>Beep</Button>
          </Box>
        </Flex>
        <Flex p={6}
          sx={{
            flexDirection: "column",
          }}>
          <Timeline>
            {events.map(event => (
              <TimelineEvent
                title={event.title}
                createdAt={event.time}
                icon={<i className="material-icons md-18" >{event.icon}</i>}
              />
            ))}
          </Timeline>
        </Flex>
      </Container>
    </ThemeProvider>

  )
}
