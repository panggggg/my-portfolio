import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from './components/module/Navbar/index';
import { HomePage } from './pages/Home/index';
import { AboutPage } from './pages/About/index';
import { ProjectPage } from './pages/Projects/index';
import { SkillPage } from './pages/Skills/index';

function App() {
  return (
    <div>
      <Navbar className='navbar'/>
      <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage className="Home"/>
          </Route>
          <Route exact path="/Home">
          <HomePage className="Home"/>
          </Route>
          <Route exact path="/About">
            <AboutPage/>
          </Route>
          <Route exact path="/Project">
            <ProjectPage/>
          </Route>
          <Route exact path="/Skill">
            <SkillPage/>
          </Route>
        </Switch>
      </Router>
      </div>
    </div>
  );
}

export default App;
