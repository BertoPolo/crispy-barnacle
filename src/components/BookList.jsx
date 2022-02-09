import books from "../data/horror.json";
import SingleBook from "../components/SingleBook";
import { Container, Row } from "react-bootstrap";

const BookList = (props) => {
  return (
    <Container>
      <Row>
        {books.map((books) => (
          <SingleBook
            key={books.asin}
            title={books.title}
            img={books.img}
            price={books.price}
            category={books.category}
          ></SingleBook>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
