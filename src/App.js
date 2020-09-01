import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';


import Footer from './Components/Footer/Footer';
import HomePage from './Pages/Homepage';
import AboutPage from './Pages/About';
import ContactPage from './Pages/Contact';

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
            <Navbar.Toggle aria-controls='navbar-toggle' className='border-0' />
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/about'>About</Link>
                <Link className='nav-link' to='/contact'>Contact</Link>
                <NavDropdown title='Music'>
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path='/' exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path='/about' exact render={() => <AboutPage title={this.state.about.title} subTitle={this.state.about.subTitle} />} />
          <Route path='/contact' exact render={() => <ContactPage title={this.state.contact.title} />} />

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
