import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import PlayerChoice from './PlayerChoice';
import Playgame from './Playgame';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
{/* 
          <Route path="/"
            element={
              <PlayerChoice/>
            } /> */}
          
          <Route path="/"
            element={
              <Playgame/>
            }
          />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
