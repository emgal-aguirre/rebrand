import React from 'react';
import { Card, CardDeck, Button } from 'react-bootstrap';
import '../App.css';

function Skills() {
  return (
    <div className="w-100 p-3 skills-container">
      <CardDeck className="m-5">
        <Card className="skill-card">
          <Card.Text className="Title-text mb-0 mt-5">
            MORE THAN A DEVELOPER
          </Card.Text>
          <Card.Title className="Title">My Skills</Card.Title>
          <Card.Text className="Title-text mb-5">
            Hello, I’m Emily, a Front-end Developer and designer based in
            Austin, Texas. I enjoy developing beautiful and functional websites.
            <Button variant="light" className="btn-skill">
              Light
            </Button>
          </Card.Text>
        </Card>
        <Card className="skill-card-float">
          <Card.Body>
            <Card.Text className="Title-text mt-4">
              Full-Stack Development
            </Card.Text>
            <Card.Text className="Title-text mt-4">Web Developement</Card.Text>
            <Card.Text className="Title-text mt-4">Web Design</Card.Text>
            <Card.Text className="Title-text mt-4">
              Digital Marketing & Branding
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
}

export default Skills;
