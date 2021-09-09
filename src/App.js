import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Homepage from './Pages/Homepage';
import Portfolio from './Pages/Portfolio';
import { useState } from 'react';


function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () =>{
    setNavToggle(!navToggle)
  }
  return (
    <Router>
      <div className="App">
        <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
          <Navbar />
        </div>
        <div className="nav-btn" onClick={navClick}>
          <div className="lines-1"></div>
          <div className="lines-2"></div>
          <div className="lines-3"></div>
        </div>
        <div className="main-content">
          <div className="content">
            <Switch>
              <Route path="/" exact>
                <Homepage />
              </Route>
              <Route path="/portfolio" exact>
                <Portfolio />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App;
