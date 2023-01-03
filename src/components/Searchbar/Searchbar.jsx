import { Box } from 'components/Box';
import { IoSearchOutline, IoCloseOutline } from 'react-icons/io5';
import {
  ButtonIconStyled,
  FormStyled,
  InputStyled,
} from '../Searchbar/Searchbar.styled';

export const Searchbar = () => {
  return (
    <Box p={4} borderBottom="normal" borderColor="darkGray" as="header">
      <FormStyled>
        <ButtonIconStyled type="submit" left={0}>
          <IoSearchOutline />
        </ButtonIconStyled>

        <InputStyled
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />

        <ButtonIconStyled type="button" right={0}>
          <IoCloseOutline />
        </ButtonIconStyled>
      </FormStyled>
    </Box>
  );
};
