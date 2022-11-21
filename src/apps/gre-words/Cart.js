import { Card, Stack, ListGroup } from "react-bootstrap";

export function Cart({ title, words, bgColor }) {
    return (
        <Stack>
            <Card style={{
                backgroundColor: bgColor
            }}>
                <Card.Body>
                    <Card.Title>{title}: {words.length}</Card.Title>
                    <Card.Text>
                        <ListGroup variant="flush">
                            {words.map(({ word, meaning }) => (
                                <ListGroup.Item key={word}>
                                    <p>
                                        {word}: {meaning}
                                    </p>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Stack>)
}
