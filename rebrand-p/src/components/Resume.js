import React from 'react';
import { Card, CardDeck, Button } from 'react-bootstrap';
import '../App.css';

function Resume() {
  return (
    <div className="w-100 p-3 resume-container">
      <div className="row">
        <div className="col-md-6 mt-5 mb-5">
          <p className="Title-text mb-0 mt-1">MY WORK EXPERIENCE</p>
          <h1 className="Title">My Resume</h1>
          <p className="Title-text mb-3">
            Hello, I’m Emily, a Front-end Developer and designer based in
            Austin, Texas. I enjoy developing beautiful and functional websites.
          </p>
        </div>
        <div className="col-md-6 mt-5 mb-5">
          <Button variant="light" className="btn-resume">
            Download CV
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Resume;
