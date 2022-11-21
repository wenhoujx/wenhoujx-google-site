import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { recipes } from './recipes'
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container'

export function Cookings() {
  return (
    <Container>
      {recipes.map(({ title, image, steps, ingredients }) => (
        <Row key={title}>
          <Col xs lg='3'>
            <img alt="" src={image} style={{ width: "200px", height: "200px", objectFit: "cover" }} />
          </Col>
          <Col  className='w-80'>
            <div className="bg-light" >
              <strong className='font-weight-bold'>Ingredients</strong>
              <ListGroup horizontal>
                {ingredients.map(ing => (
                  <ListGroup.Item key={ing}>{ing}</ListGroup.Item>
                ))}
              </ListGroup>
              <strong className='font-weight-bold'>Steps</strong>
              <ListGroup numbered='true' variant="flush">
                {steps.map(step => (
                  <ListGroup.Item key={step}>{step}</ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  )
}
