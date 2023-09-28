import React from 'react';
import MainScreen from '../../components/MainScreen/MainScreen';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyProfile = () => {
  return (
    <div>
    <MainScreen title="My Profile">
        <Link to="/edit-profile" style={{ textDecoration: 'none' }}>
            <Button size="lg" className="landingButton" variant="outline-primary">Edit Profile</Button>
        </Link>
    </MainScreen>
    </div>
  )
}

export default MyProfile
