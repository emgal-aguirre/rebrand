import React from 'react';
import { Card, CardDeck, Button, CardGroup } from 'react-bootstrap';
import '../App.css';
import Stockify from '../Assets/Stockify.png';
import Listly from '../Assets/Listly.png';
import Recipie from '../Assets/Recipie.png';
import Agency from '../Assets/MockAgency.png';
import Team from '../Assets/TMD.png';
import Weather from '../Assets/Weather.png';

function Skills() {
  return (
    <div>
      <p className="Title-text mb-0 mt-5">MY WORK IN ACTION</p>
      <h1 className="Title">Project Card</h1>
      <p className="Title-text mb-3">
        Hello, I’m Emily, a Front-end Developer and designer based in Austin,
        Texas. I enjoy developing beautiful and functional websites.
      </p>

      <p></p>
      <CardDeck className="ml-3 mr-3">
        <Card className="md-4 project-card">
          <Card.Body>
            <img
              className="Stockify"
              src={Stockify}
              style={{ maxWidth: 400 }}
            ></img>
          </Card.Body>

          {/* <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer> */}
        </Card>
        <Card className="project-card">
          <Card.Body>
            <img
              className="Listly"
              src={Listly}
              style={{ maxWidth: 400 }}
            ></img>
          </Card.Body>
          {/* <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer> */}
        </Card>
        <Card className="project-card">
          <Card.Body>
            <img
              className="Recipie"
              src={Recipie}
              style={{ maxWidth: 400 }}
            ></img>
          </Card.Body>
          {/* <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer> */}
        </Card>
      </CardDeck>
      {/* Second Row */}
      <CardDeck className="ml-3 mr-3">
        <Card className="md-4 project-card">
          <Card.Body>
            <img className="Team" src={Team} style={{ maxWidth: 400 }}></img>
          </Card.Body>

          {/* <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer> */}
        </Card>
        <Card className="project-card">
          <Card.Body>
            <img
              className="Weather"
              src={Weather}
              style={{ maxWidth: 400 }}
            ></img>
          </Card.Body>
          {/* <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer> */}
        </Card>
        <Card className="project-card">
          <Card.Body>
            <img
              className="Agency"
              src={Agency}
              style={{ maxWidth: 400 }}
            ></img>
          </Card.Body>
          {/* <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer> */}
        </Card>
      </CardDeck>
    </div>
  );
}

export default Skills;
