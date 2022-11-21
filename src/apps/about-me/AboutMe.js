import React from 'react'
import Card from 'react-bootstrap/Card'
import { Col, Row } from 'react-bootstrap'

export function AboutMe() {
    const skills = ['Java', 'JVM', "YourKit", 'undertow', 'jersey',
        'Kubernete', 'AWS', 'EKS', 'clojure', 
        'Python', 'Flask', 'Dagster', 'Airflow', 'Meltano', 'JupyterLab',
        'Elasticsearch', 'Dynamo', 'SQL', 'snowflake', 'dbt',
        'datomic', 'git', '(and more...)'
    ]
    return (
        <Card className='w-80'>
            <Card.Body>
                <Card.Title>I am Wenshuai Hou</Card.Title>
                <Card.Text>
                    I am a backend dev touched a lot of things:
                    <Row md={5} >
                        {skills.map(skill => (
                            <Col>
                                <div className="bg-light">{skill}</div>
                            </Col>
                        ))}
                    </Row>
                </Card.Text>
                <Card.Text>
                    This personal website is my personal journey to explore the frontend and react.
                </Card.Text>
                <Card.Link href="mailto:wenhoujx@gmail.com" subject='From wenhoujx.com'>Contact Me via Email: wenhoujx@gmail.com</Card.Link>
                <Card.Link href='/'>Go Back to Home</Card.Link>
            </Card.Body>
        </Card>
    )
}
