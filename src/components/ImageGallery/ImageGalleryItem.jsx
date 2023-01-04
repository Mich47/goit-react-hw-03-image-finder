import {
  ImageGalleryImgStyled,
  ImageGalleryItemStyled,
} from './ImageGallery.styled';

export const ImageGalleryItem = ({ src, alt, largeImageURL }) => {
  return (
    <ImageGalleryItemStyled>
      <ImageGalleryImgStyled src={src} alt={alt} data-img={largeImageURL} />
    </ImageGalleryItemStyled>
  );
};
