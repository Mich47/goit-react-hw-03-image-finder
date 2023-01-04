import styled from 'styled-components';

export const ImageGalleryListStyled = styled.ul`
  padding: ${p => p.theme.space[4]}px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ImageGalleryItemStyled = styled.li`
  width: 512px;
  height: 312px;
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
`;

export const ImageStyled = styled.img`
  cursor: pointer;
`;
