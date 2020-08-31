import React from 'react';

class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: 'PrePoll',
          subtitle: 'An app to create a more informed voter.',
          imgSrc:'',
          link:'',
          selected: false
        },
        {},
        {}

      ]
    }
  }

  render() {
    return (
      <p> Carousel works! </p>
    )
  };
}

export default Carousel;