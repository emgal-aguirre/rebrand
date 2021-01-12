import React from 'react';
import Project from '../pages/Project';
import { Card, CardDeck, Button, CardGroup } from 'react-bootstrap';
import '../App.css';
import headshot from '../Assets/Headshot_EGA.png';
import Skills from '../components/Skills';
import ProjectCard from '../components/ProjectCard';
import Resume from '../components/Resume';
import Going from '../components/Going';

function Index() {
  return (
    <div>
      <CardDeck className="about about-deck m-5">
        <Card className="about-left-card">
          <Card.Body>
            <Card.Title className="about-name mt-3">Emily</Card.Title>
            <Card.Title className="about-name">Aguirre</Card.Title>
            <Card.Text className="about-title">FRONT END DEVELOPER</Card.Text>
            <Card.Text className="about-bio">
              Hello, I’m Emily, a Front-end Developer and designer based in
              Austin, Texas. <br></br>
              <br></br>I enjoy developing beautiful and functional websites.
            </Card.Text>
            <Button variant="light" className="btn-project">
              Projects
            </Button>
          </Card.Body>
        </Card>
        <Card className="about-right-card">
          <Card.Body>
            <img
              className="headshot center mt-3"
              src={headshot}
              style={{ borderRadius: 200, maxWidth: 250 }}
            ></img>
            <hr className="bar"></hr>
            <Card.Text>
              <Button variant=" ">
                <i className="icon fa fa-linkedin-square fa-2x  mb-3"></i>
              </Button>
              <Button variant="">
                <i className="icon fa fa-github fa-2x mb-3" />
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
      <br></br>
      <br></br>
      <Skills />
      <ProjectCard />
      <Resume />
      <Going />
    </div>
  );
}

export default Index;
