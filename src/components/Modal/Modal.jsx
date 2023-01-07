import { PropTypes } from 'prop-types';
import { Component } from 'react';
import { ModalStyled, OverlayStyled } from './Modal.styled';

export class Modal extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.setBodyStyles();
    window.addEventListener('keydown', this.handleEscClose);
  }

  componentWillUnmount() {
    this.removeBodyStyles();
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

  setBodyStyles = () => {
    const { scrollHeight, clientHeight } = document.documentElement;
    if (clientHeight < scrollHeight) {
      document.body.setAttribute(
        'style',
        'overflow: hidden; padding-right: 17px;'
      );
      return;
    }
    document.body.setAttribute('style', 'overflow: hidden;');
    // console.log(scrollHeight); // Висота всього документа в пікселях
    // console.log(clientHeight); // Висота вьюпорта
  };

  removeBodyStyles = () => {
    document.body.removeAttribute('style');
  };

  render() {
    const { src, alt } = this.props;
    return (
      <OverlayStyled onClick={this.handleClose}>
        <ModalStyled>
          <img src={src} alt={alt} />
        </ModalStyled>
      </OverlayStyled>
    );
  }
}
