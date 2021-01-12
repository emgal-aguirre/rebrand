import React from 'react';
import { Card, CardDeck, Button } from 'react-bootstrap';
import '../App.css';

function Going() {
  return (
    <div className="w-100 p-3 going-container">
      <CardDeck className="m-0">
        <Card className="going-card">
          <Card.Text className="Title-text mb-0 mt-5">
            WHAT I AM LEARNING
          </Card.Text>
          <Card.Title className="Title">Where I am going</Card.Title>
          <Card.Text className="Title-text mb-5">
            Hello, I’m Emily, a Front-end Developer and designer based in
            Austin, Texas. I enjoy developing beautiful and functional websites.
          </Card.Text>
        </Card>
        <Card className="going-card-right">
          <Card.Body>
            <Card.Text className="Title-text mt-4">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
}

export default Going;
