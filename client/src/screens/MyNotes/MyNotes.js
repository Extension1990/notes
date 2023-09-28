import React, { useEffect, useState } from 'react';
import MainScreen from '../../components/MainScreen/MainScreen';
import { Link } from 'react-router-dom';
import { Badge, Button, Card, Accordion } from 'react-bootstrap';
import axios from 'axios';

const MyNotes = () => {
  const [notes, setNotes] = useState([]);

  const deleteHandler = (id) => {
    if(window.confirm("Are you sure")) {

    }
  };

  const fetchNotes = async () => {
    const { data } = await axios.get('/api/notes');
    setNotes(data);
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <MainScreen title="Welcome back John Bower...">
    <Link to="/create-note" style={{ textDecoration: 'none' }}>
        <Button size="lg" className="createButton">Create New Note</Button>
    </Link>
    {notes.map(note => {
      return (
        <Accordion className='mt-3' key={note._id}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
                  <span
                    style={{
                      textDecoration: "none",
                      flex: 1,
                      cursor: "pointer",
                      alignSelf: "center",
                      fontSize: 18
                    }}
                  >
                    { note.title }
                  </span>
            </Accordion.Header>
            <Accordion.Body>
              <Card style={{ marginTop: 15, marginBottom: 15 }}>
                <Card.Header style={{ display: "flex" }} className='bg-white'>
                  <span
                    style={{
                      color: "black",
                      textDecoration: "none",
                      flex: 1,
                      cursor: "pointer",
                      alignSelf: "center",
                      fontSize: 18
                    }}
                  >
                  <h4>
                    <Badge variant="success">
                      Category - { note.category }
                    </Badge>
                  </h4>
                  </span>
                  <div>
                    <Button variant='primary' href={`/note/${note._id}`}>Edit</Button>
                    <Button variant='danger' className='mx-2' onClick={() => deleteHandler(note._id)}>Delete</Button>
                  </div>
                </Card.Header>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>
                      { note.content }
                    </p>
                    <footer className="blockquote-footer">
                      Created On: <cite title="Source Title">22/09/2023</cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )
    })}
    </MainScreen>
  )
}

export default MyNotes;
