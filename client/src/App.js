import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './screens/LandingPage/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyNotes from './screens/MyNotes/MyNotes';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import MyProfile from './screens/MyProfile/MyProfile';
import EditProfile from './screens/EditProfile/EditProfile';
import CreateNote from './screens/CreateNote/CreateNote';

const App = () => {
  return (
    <BrowserRouter className="App">
      <Header />
      <main style={{minHeight: '90vh'}}>
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/my-notes" Component={MyNotes} />
          <Route path="/create-note" Component={CreateNote} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/profile" Component={MyProfile} />
          <Route path="/edit-profile" Component={EditProfile} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
