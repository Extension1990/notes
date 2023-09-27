import React from 'react';
import './LandingPage.css';
import { Button, Container, Row } from 'react-bootstrap';

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
            <div className="intro-text pt-5 mt-5 text-dark">
                <h1 className="title">Welcome to Note Manager</h1>
                <p className="subtitle">Your goto place for your notes.</p>
            </div>
            <div className="buttonContainer">
                <a href="/login">
                    <Button size="lg" className="login-btn">Login</Button>
                </a>
                <a href="/register">
                    <Button size="lg" className="login-btn" variant="outline-primary">Register</Button>
                </a>
            </div>
        </Row>
      </Container>
    </div>
  )
}

export default LandingPage
