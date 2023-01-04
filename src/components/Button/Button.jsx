import { Box } from 'components/Box';
import { ButtonStyled } from './Button.styled';

export const Button = ({ children }) => {
  return (
    <Box display="flex" justifyContent="center" mb={4}>
      <ButtonStyled>{children}</ButtonStyled>
    </Box>
  );
};
