import React from 'react';
import './App.css';
import LoginPage from './Components/LoginPage';
import Home from './Components/Home';
import {Navbar,Nav} from 'react-bootstrap';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';

export default class App extends React.Component {
  render(){
  return (
        <div className="App">
              <Router>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href={'/'}>Login</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href={'/Home'}>Home</Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route path="/Home" component={Home}></Route>
            <Route exactpath="/" component={LoginPage}></Route>
          </Switch>
          </Router>
      </div>
  );
  }
}

 
