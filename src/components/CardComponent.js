import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from "react"
import { context } from '../App'


const CardComponent = () => {
  const setView = useContext(context);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src='https://andscape.com/wp-content/uploads/2019/12/edit-good-kid-Art-Print-POSTER-Kendrick-Lamar-good-kid-m-A-A-d-city-Hip-Hop-Album-Cover.jpg' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant='primary' onClick={() => {setView('detail')}}>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
