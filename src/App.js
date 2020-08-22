import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Daniel Vega",
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: "Let's get it.",
        subTitle: "A collection of projects",
        text: "Down below."
      },
      about: {
        title: "Let's get to know each other.",
        subTitle: "Except really you're only getting to know me."
      },
      contact: {
        title: "Hit me up."
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className='p-0' fluid={true}>
          <Navbar className='border-bottom' bg='transparent' expand='lg'>
            <Navbar.Brand>Daniel Vega</Navbar.Brand>
            <Navbar.Toggle aria-controls='navbar-toggle' className='border-0'/>
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/about'>About</Link>
                <Link className='nav-link' to='/contact'>Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div>Hello World</div>

        </Container>
      </Router>
    );
  }
}

export default App;
