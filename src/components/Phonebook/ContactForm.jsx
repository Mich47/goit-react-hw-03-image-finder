import { PropTypes } from 'prop-types';
import { Box } from 'components/Box';
import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  LabelStyled,
} from './Phonebook.styled';
import { Component } from 'react';

export class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  clearForm = () => {
    this.setState({ name: '', number: '' });
  };

  clearName = () => {
    this.setState({ name: '' });
  };

  render() {
    const { onSubmit } = this.props;
    const { name, number } = this.state;
    return (
      <FormStyled
        onSubmit={event => {
          onSubmit(event, name, number) ? this.clearForm() : this.clearName();
        }}
      >
        <Box display="flex" flexDirection="column">
          <LabelStyled htmlFor="name">Name</LabelStyled>
          <InputStyled
            id="name"
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            autoFocus
            onChange={this.handleChange}
          />
        </Box>
        <Box display="flex" flexDirection="column">
          <LabelStyled htmlFor="number">Number</LabelStyled>
          <InputStyled
            id="number"
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        </Box>
        <ButtonStyled type="submit">Add contact</ButtonStyled>
      </FormStyled>
    );
  }
}
