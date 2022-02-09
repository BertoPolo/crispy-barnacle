import { Card, Button } from "react-bootstrap"
import books from "../data/horror.json"

const SingleBook = (props) => {
  console.log(books[0].img)
  console.log(books[0].title)
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={books[0].img} alt="test" />
      <Card.Body>
        <Card.Title>{books[0].title}</Card.Title>
        <Card.Text>€{books[0].price}</Card.Text>
        <Card.Text>{books[0].category}</Card.Text>
        <Button variant="secondary">Buy</Button>
      </Card.Body>
    </Card>
  )
}

export default SingleBook
