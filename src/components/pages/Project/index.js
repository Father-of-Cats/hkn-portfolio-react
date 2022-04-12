import React from 'react'
import { Container,Card,ListGroup,ListGroupItem } from 'react-bootstrap'
import codingquiz from '../../../assets/codingquiz.png'
import diychan from '../../../assets/DIYchan.png'
import UC from '../../../assets/UC.webp'

function Project() {
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
    
<Container className='row' fluid>
<div className='d-flex justify-content-around p-3 m-3'>

{/* Row 2 Card 1 */}

<Card style={{ width: '40rem' }}>
            <Card.Img variant="top" src={UC} />
            <Card.Body>
              <Card.Title>Coaching For Climbing</Card.Title>
              <Card.Text>
                Single page app made for the Coaching For Climbing brand. C4C coaches can receive lesson plans and videos for their clients. Made with React.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <Card.Link href='https://github.com/Father-of-Cats/coaching-for-climbing'>Github</Card.Link>
              </ListGroupItem>
              <ListGroupItem>
                <Card.Link href='#'>Deployed</Card.Link>
              </ListGroupItem>
            </ListGroup>
          </Card>


{/* Row 2 Card 2 */}
<Card style={{ width: '40rem' }}>
            <Card.Img variant="top" src={codingquiz} />
            <Card.Body>
              <Card.Title>README.MD Generator</Card.Title>
              <Card.Text>
                a command line app that alows you to quickly create a quality README.md file. Built using Node.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <Card.Link>Github</Card.Link>
              </ListGroupItem>
              <ListGroupItem>
                <Card.Link>Deployed</Card.Link>
              </ListGroupItem>
            </ListGroup>
          </Card>

</div>
</Container>

<Container className='row' fluid>
<div className='d-flex justify-content-around p-3 m-3'>

{/* Row 3 Card 1 */}
<Card style={{ width: '40rem' }}>
            <Card.Img variant="top" src={codingquiz} />
            <Card.Body>
              <Card.Title>Coding Quiz</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <Card.Link>Github</Card.Link>
              </ListGroupItem>
              <ListGroupItem>
                <Card.Link>Deployed</Card.Link>
              </ListGroupItem>
            </ListGroup>
          </Card>

{/* Row 3 Card 2 */}
<Card style={{ width: '40rem' }}>
            <Card.Img variant="top" src={codingquiz} />
            <Card.Body>
              <Card.Title>Coding Quiz</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <Card.Link>Github</Card.Link>
              </ListGroupItem>
              <ListGroupItem>
                <Card.Link>Deployed</Card.Link>
              </ListGroupItem>
            </ListGroup>
          </Card>

  </div>
  </Container>

</div>
  )
}

export default Project