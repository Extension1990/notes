import React from 'react';
import MainScreen from '../../components/MainScreen/MainScreen';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

const MyNotes = () => {
  return (
    <MainScreen title="Welcome back John Bower...">
    <Link to="/create-note" style={{ textDecoration: 'none' }}>
        <Button size="lg" className="createButton">Create New Note</Button>
    </Link>
    <Card className='mt-3'>
      <Card.Header className='d-flex'>
        Quote
        <div>
          <Button variant='primary'>Edit</Button>
          <Button variant='danger'>Delete</Button>
        </div>
      </Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.{' '}
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    </MainScreen>
  )
}

export default MyNotes;
