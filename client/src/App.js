import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './screens/LandingPage/LandingPage';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main style={{minHeight: '90vh'}}>
        <LandingPage/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
