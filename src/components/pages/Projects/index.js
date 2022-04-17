import React from 'react'
import { Container,Card,ListGroup,ListGroupItem } from 'react-bootstrap'
import codingquiz from '../../../assets/codingquiz.png'
import diychan from '../../../assets/DIYchan.png'
import UC from '../../../assets/UC.webp'

function Project(props) {
  const { currentCategory } = props;
  return (
    <div>
      <Container className='row' fluid>
        <div className='d-flex justify-content-around p-3 m-3'>
    
          
          {/* Card 1 Row 1 */}
          <Card style={{ width: '40rem' }}>
            <Card.Img variant="top" src={codingquiz} />
            <Card.Body>
              <Card.Title>Coding Quiz</Card.Title>
              <Card.Text>
                A basic quiz on front end development concepts and tools! Made using Javascript, CSS, and HTML.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <Card.Link href='https://github.com/Father-of-Cats/code-quiz' >Github</Card.Link>
              </ListGroupItem>
              <ListGroupItem>
                <Card.Link href='https://father-of-cats.github.io/code-quiz/' >Deployed</Card.Link>
              </ListGroupItem>
            </ListGroup>
          </Card>


    {/* Card 2 Row 1 */}
    <Card style={{ width: '40rem' }}>
            <Card.Img variant="top" src={diychan} />
            <Card.Body>
              <Card.Title>DIYquiz</Card.Title>
              <Card.Text>
              DIYchan - DIYchan is the home of crafty people who love posting and conversing about their DIY hobbies and projects. Different styles and types of projects live in their respecitve subchans that you can nagivate below! Built With Javascript CSS Bootstrap 5.0 Node.JS MYSQL.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <Card.Link href='https://github.com/Father-of-Cats/DIYchan'>Github</Card.Link>
              </ListGroupItem>
              <ListGroupItem>
                <Card.Link href='https://aqueous-hamlet-39525.herokuapp.com/'>Deployed</Card.Link>
              </ListGroupItem>
            </ListGroup>
          </Card>

    </div>
    </Container>
</div>
  )
}

export default Project