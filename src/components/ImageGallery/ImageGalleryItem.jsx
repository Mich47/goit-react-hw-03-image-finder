import * as ReactDOM from 'react-dom';
import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import { ImageStyled, ImageGalleryItemStyled } from './ImageGallery.styled';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  handleToggleModalForm = event => {
    console.log('event ', event);
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const { isModalOpen } = this.state;
    const { src, alt, largeImageURL } = this.props;
    return (
      <ImageGalleryItemStyled>
        <ImageStyled
          src={src}
          alt={alt}
          onClick={this.handleToggleModalForm}
          loading="lazy"
        />
        {isModalOpen &&
          ReactDOM.createPortal(
            <Modal
              img={largeImageURL}
              alt={alt}
              onClose={this.handleToggleModalForm}
            />,
            document.querySelector('#modal-root')
          )}
      </ImageGalleryItemStyled>
    );
  }
}
