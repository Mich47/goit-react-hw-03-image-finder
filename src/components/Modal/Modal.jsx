import { Component } from 'react';
import { ModalStyled, OverlayStyled } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    this.toggleBodyStyles();
    const modal = document.querySelector('[data-modal]');
    console.log('modal ', modal);
    modal.addEventListener('click', this.handleListener);
    // modal.addEventListener('keydown', this.handleListener);
  }

  componentWillUnmount() {
    this.toggleBodyStyles();
    const modal = document.querySelector('[data-modal]');
    modal.removeEventListener('click', this.handleListener);
  }

  handleListener = event => {
    //   event.target
    if (event.target === event.currentTarget) this.props.onClose();
    console.log('event.target ', event.target === event.currentTarget);
  };

  toggleBodyStyles = () => {
    document.body.classList.toggle('modal-open');
  };

  render() {
    return (
      <OverlayStyled data-modal>
        <ModalStyled>
          <img src="" alt="" />
        </ModalStyled>
      </OverlayStyled>
    );
  }
}
