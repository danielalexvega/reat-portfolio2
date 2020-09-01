import React from 'react';
import Card from '../Card/Card';
import {Container, Row} from 'react-bootstrap';
import prepoll from '../../assets/prepoll-website-port.png';
import dnd from '../../assets/dnd-website-portfolio.png';
import note from '../../assets/express-note-taker.png';

class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: 'PrePoll',
          subtitle: 'An app to create a more informed voter.',
          imgSrc: prepoll,
          link:'https://prepoll.herokuapp.com/',
          github:'https://github.com/Kinzito17/PrePoll',
          selected: false
        },
        {
          id: 1,
          title: 'Express Note Taker',
          subtitle: 'A place to jot down notes.',
          imgSrc:note,
          link:'https://obscure-retreat-51704.herokuapp.com/',
          github:'https://github.com/danielalexvega/expressNoteTaker',
          selected: false
        },
        {
          id: 2,
          title: 'DND Dungeon Master ',
          subtitle: 'Keep track of all your characters and craft a better game.',
          imgSrc:dnd,
          link:'https://serene-lowlands-40117.herokuapp.com/',
          github:'https://github.com/danielalexvega/Project-2-Dungeons-and-Dragons',
          selected: false
        }
      ]
    }
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];
    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if(item.id  !== id) {
        item.selected = false;
      }
    });

    this.setState({items});
  }

  makeItems = (items) => {
    return items.map(item => {
      return <Card className='d-card' item={item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id}/>
    })
  }

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-center">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    )
  };
}

export default Carousel;