import reactRouterDom from 'react-router-dom';
import './Home';
import Home from './Home';
import SearchPage from './SearchPage';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/search">
              <SearchPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
