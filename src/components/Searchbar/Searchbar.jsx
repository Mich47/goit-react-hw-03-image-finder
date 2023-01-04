import { Box } from 'components/Box';
import { Component } from 'react';
import { IoSearchOutline, IoCloseOutline } from 'react-icons/io5';
import {
  ButtonIconStyled,
  FormStyled,
  InputStyled,
} from '../Searchbar/Searchbar.styled';

export class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleErase = () => {
    this.setState({ search: '' });
  };

  render() {
    const { search } = this.state;
    const { onSubmitForm } = this.props;
    return (
      <Box p={4} borderBottom="normal" borderColor="darkGray" as="header">
        <FormStyled onSubmit={event => onSubmitForm(event, search)}>
          <ButtonIconStyled type="submit" left={0}>
            <IoSearchOutline />
          </ButtonIconStyled>

          <InputStyled
            name="search"
            value={search}
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />

          <ButtonIconStyled type="button" right={0} onClick={this.handleErase}>
            <IoCloseOutline />
          </ButtonIconStyled>
        </FormStyled>
      </Box>
    );
  }
}
