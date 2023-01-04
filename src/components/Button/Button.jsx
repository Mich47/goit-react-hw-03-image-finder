import { Box } from 'components/Box';
import { ButtonStyled } from './Button.styled';

export const Button = ({ children, onClick }) => {
  return (
    <Box display="flex" justifyContent="center" mb={4}>
      <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
    </Box>
  );
};
