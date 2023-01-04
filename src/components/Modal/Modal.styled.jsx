import styled from 'styled-components';
import { space, typography, position } from 'styled-system';

export const OverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  /* z-index: var(--bs-modal-zindex); */
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalStyled = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 500px;
  height: 500px;
  background-color: white;

  padding: ${p => p.theme.space[4]}px;
`;

export const ButtonStyled = styled.button`
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primary};
  font-weight: ${p => p.theme.fontWeights.bold};
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  border: none;
  border-radius: ${p => p.theme.radii.normal};
  cursor: pointer;
  ${typography}
  ${space}

  &:hover {
    background-color: ${p => p.theme.colors.secondary};
  }
`;
