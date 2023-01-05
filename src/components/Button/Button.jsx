import { Box } from 'components/Box';
import { ButtonStyled } from './Button.styled';

export const Button = ({ children, onClick }) => {
  return (
    <Box display="flex" justifyContent="center" pt={4} pb={5}>
      <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
    </Box>
  );
};
