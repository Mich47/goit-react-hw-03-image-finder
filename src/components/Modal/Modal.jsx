import { Component } from 'react';
import { ModalStyled, OverlayStyled } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    this.toggleBodyStyles();
    window.addEventListener('keydown', this.handleEscClose);
  }

  componentWillUnmount() {
    this.toggleBodyStyles();
    window.removeEventListener('keydown', this.handleEscClose);
  }

  handleEscClose = event => {
    if (event.code === 'Escape') {
      console.log('event.code ', event.code);
      this.props.onClose();
    }
  };

  handleClose = event => {
    if (event.target === event.currentTarget) this.props.onClose();
  };

  toggleBodyStyles = () => {
    document.body.classList.toggle('modal-open');
  };

  render() {
    return (
      <OverlayStyled onClick={this.handleClose}>
        <ModalStyled>
          <img src="" alt="" />
        </ModalStyled>
      </OverlayStyled>
    );
  }
}
