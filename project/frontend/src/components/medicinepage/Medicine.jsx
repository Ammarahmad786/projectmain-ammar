import React from "react";

import {
  Button,
  Card,
  Container,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import Rating from "../Rating";
import { Link } from "react-router-dom";
const medicine = ({ medicine }) => {
  return (
    <>
      <div className="card-link">
        <Link to={`/medicine/${medicine._id}`}>
          <Container fluid>
            <Card className="mt-5 mr-2 mb-4">
              <Card.Img
                variant="top"
                src={medicine.image}
                className="medicine-img"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text className="card-text">
                  {medicine.description}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Rs:{medicine.price}/pkr</ListGroupItem>

                <ListGroupItem>
                  <Rating
                    text={`from${medicine.numReviews}users`}
                    rating={medicine.rating}
                  />
                </ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Button>Show More</Button>
              </Card.Body>
            </Card>
          </Container>
        </Link>
      </div>
    </>
  );
};

export default medicine;
