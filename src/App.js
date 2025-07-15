import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header/index.js';
import Main from './Main.js';
import Footer from './Footer/index.js';
import './Grid.css';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
