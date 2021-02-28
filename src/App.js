import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';  

export default class App extends Component {
  render() {
    return ( 
      <div>
        <Route exact path={`/about`} component={About} />
        <Route exact path={`/blog`} render={(routerProps) => < Blog routerProps={routerProps} />} />
        <Route exact path={`/`} render={(routerProps) => < Home routerProps={routerProps} />} />
        <Route exact path={`/contact`} render={(routerProps) => < Contact routerProps={routerProps} />} />    
       
        <ul> 
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

      </div>     
    );
  }
}
