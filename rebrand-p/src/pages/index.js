import React from 'react';
import Project from '../pages/Project';
import { Card, CardDeck, Button, CardGroup } from 'react-bootstrap';
import '../App.css';
import headshot from '../Assets/Headshot_EGA.png';
import Skills from '../components/Skills';
import ProjectCard from '../components/ProjectCard';

function Index() {
  return (
    <div>
      <CardDeck className="about card-deck">
        <Card className="about-left-card">
          <Card.Body>
            <Card.Title className="about-name">Emily</Card.Title>
            <Card.Title className="about-name">Aguirre</Card.Title>
            <Card.Text className="about-title">FRONT END DEVELOPER</Card.Text>
            <Card.Text className="about-bio">
              Hello, I’m Emily, a Front-end Developer and designer based in
              Austin, Texas. <br></br>
              <br></br>I enjoy developing beautiful and functional websites.
            </Card.Text>
            <Button variant="light" className="btn-project">
              Light
            </Button>
          </Card.Body>
        </Card>
        <Card className="about-right-card">
          <Card.Body>
            <img
              className="headshot center"
              src={headshot}
              style={{ borderRadius: 200, maxWidth: 250 }}
            ></img>

            <Card.Text>
              <Button variant=" m-2">
                <i class="fa fa-linkedin-square fa-2x m-2 mb-3"></i>
              </Button>
              <Button variant="">
                <i class="fa fa-github fa-2x m-2 mb-3" />
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
      <br></br>
      <br></br>
      <Skills />
      <ProjectCard />
    </div>
  );
}

export default Index;
