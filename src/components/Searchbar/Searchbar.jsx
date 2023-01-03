import { Box } from 'components/Box';
import {
  ButtonIconStyled,
  FormStyled,
  InputStyled,
} from '../Searchbar/Searchbar.styled';
import { IoSearchOutline, IoCloseOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';

export const Searchbar = () => {
  return (
    <Box p={4} borderBottom="normal" borderColor="darkGray" as="header">
      {/* class="searchbar" */}
      <FormStyled>
        <ButtonIconStyled type="submit" left={0}>
          <IconContext.Provider
            value={{
              style: {
                width: '100%',
                height: '100%',
              },
            }}
          >
            <IoSearchOutline />
          </IconContext.Provider>
        </ButtonIconStyled>

        <InputStyled
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />

        <ButtonIconStyled type="button" right={0}>
          <IconContext.Provider
            value={{
              style: {
                width: '100%',
                height: '100%',
              },
            }}
          >
            <IoCloseOutline />
          </IconContext.Provider>
        </ButtonIconStyled>
      </FormStyled>
    </Box>
  );
};
