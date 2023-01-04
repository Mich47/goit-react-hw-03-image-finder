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
    const { img, alt } = this.props;
    return (
      <OverlayStyled onClick={this.handleClose}>
        <ModalStyled>
          <img src={img} alt={alt} />
        </ModalStyled>
      </OverlayStyled>
    );
  }
}
