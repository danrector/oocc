import React, { Component } from 'react';
import './App.css';
import Lightbox from 'react-image-lightbox';

const images = [
  '//i.imgur.com/Ohuu7bI.jpg?1',
  '//i.imgur.com/dZoFSAo.jpg?1',
  '//i.imgur.com/tEQAwsG.jpg?1',
  '//i.imgur.com/DUB7A3y.jpg?1',
  '//i.imgur.com/PTzeZub.jpg?1',
  '//i.imgur.com/Q0eyxeC.jpg?1',
  '//i.imgur.com/oQwVmBZ.jpg?1',
  '//i.imgur.com/WZk2jFd.jpg?1'

];

export default class LightboxExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        <h1>OUT OF CONTEXT COMICS</h1>

        <div className='comicContainer'>
          <img className='comic' src='http://i.imgur.com/Ohuu7bI.jpg?1'
            onClick={() => this.setState({ photoIndex: 0, isOpen: true })}
            alt='comic'></img>
          <img className='comic' src='http://i.imgur.com/dZoFSAo.jpg?1'
            onClick={() => this.setState({ photoIndex: 1, isOpen: true })}
            alt='comic'></img>
          <img className='comic' src='http://i.imgur.com/tEQAwsG.jpg?1'
            onClick={() => this.setState({ photoIndex: 2, isOpen: true })}
            alt='comic'></img>
          <img className='comic' src='https://i.imgur.com/DUB7A3y.jpg?1'
            onClick={() => this.setState({ photoIndex: 3, isOpen: true })}
            alt='comic'></img>
          <img className='comic' src='https://i.imgur.com/PTzeZub.jpg?1'
            onClick={() => this.setState({ photoIndex: 4, isOpen: true })}
            alt='comic'></img>
          <img className='comic' src='https://i.imgur.com/Q0eyxeC.jpg?1'
            onClick={() => this.setState({ photoIndex: 5, isOpen: true })}
            alt='comic'></img>
          <img className='comic' src='https://i.imgur.com/oQwVmBZ.jpg?1'
            onClick={() => this.setState({ photoIndex: 6, isOpen: true })}
            alt='comic'></img>
          <img className='comic' src='https://i.imgur.com/WZk2jFd.jpg?1'
            onClick={() => this.setState({ photoIndex: 7, isOpen: true })}
            alt='comic'></img>
        </div>


        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}
