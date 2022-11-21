import { v4 as uuidv4 } from 'uuid'
import { chefHatIcon, conwayIcon, gomokuIcon, greIcon, meIcon, cameraIcon } from "../icons"
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FrontPageCard } from '../components/FrontPageCard';


export default function Home() {
    const items = [
        {
            id: uuidv4(),
            linkTo: '/cookings',
            icon: chefHatIcon,
            description: 'My Cooking Recipes'
        },
        {
            id: uuidv4(),
            linkTo: '/gomoku',
            icon: gomokuIcon,
            description: 'Gomoku(connect-five) Game'
        },
        {
            id: uuidv4(),
            linkTo: '/game-of-life',
            icon: conwayIcon,
            description: 'Conways Game of Life'
        },
        {
            id: uuidv4(),
            linkTo: '/gre-words',
            icon: greIcon,
            description: 'GRE Vocabulary Flashcard'
        },

        {
            id: uuidv4(),
            linkTo: '/photo-art',
            icon: cameraIcon,
            description: 'Photo Art'
        }, {
            id: uuidv4(),
            linkTo: '/me',
            icon: meIcon,
            description: 'About Me'
        },

    ]
    return (
        <Stack gap={3}>
            <h2 className='bg-dark text-white p-5'>
                Wenhoujx homepage
            </h2>
            <Container>
                <Row md={3} xs={1} lg={4} className='g-3 bg-light'>
                    {items.map(item => (
                        <Col key={item.id}>
                            <FrontPageCard {...item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Stack >
    )
}
