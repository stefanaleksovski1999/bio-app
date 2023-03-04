// import { Router } from 'react-router';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Music from './Components/Music/Music';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="all-content">
          <Routes>
            <Route exact path='/' element={<Homepage/>}/>
            <Route exact path='/music' element={<Music/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
