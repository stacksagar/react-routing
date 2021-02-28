import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';  

export default class App extends Component {
  render() {
    return ( 
      <div>

        
        <nav> 
          <ul> 
            <li><Link to="/">Home *</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>

          <Switch>
          <Route exact path={`/`} >
            <Home />
          </Route>

          <Route exact path="/about" >
            <Home />
            <About />
          </Route>

          <Route exact path="/blog" > 
            <Blog />
          </Route>

          <Route exact path="/contact" >
            <Home />
            <Contact />
          </Route> 
        </Switch>

      </div>     
    );
  }
}
