import React from 'react';
import './LandingPage.css';
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
            <div className="intro-text pt-5 mt-5 text-white">
                <h1 className="title">Welcome to Note Manager</h1>
                <p className="subtitle">The safest place for your notes.</p>
            </div>
            <div className="buttonContainer">
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <Button size="lg" className="landingButton">Login</Button>
                </Link>
                <Link to="/register" style={{ textDecoration: 'none' }}>
                    <Button size="lg" className="landingButton" variant="outline-primary">Register</Button>
                </Link>
            </div>
        </Row>
      </Container>
    </div>
  )
}

export default LandingPage;
