import {
  ImageGalleryImgStyled,
  ImageGalleryItemStyled,
} from './ImageGallery.styled';

export const ImageGalleryItem = ({ src, alt, largeImageURL, onOpen }) => {
  return (
    <ImageGalleryItemStyled>
      <ImageGalleryImgStyled
        src={src}
        alt={alt}
        data-img={largeImageURL}
        onClick={onOpen}
      />
    </ImageGalleryItemStyled>
  );
};
