import { ImageGalleryListStyled } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ images, onOpen }) => {
  return (
    <ImageGalleryListStyled>
      {/* Набір <li> із зображеннями */}
      {images.map(({ id, webformatURL, tags, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            src={webformatURL}
            alt={tags}
            largeImageURL={largeImageURL}
            onOpen={onOpen}
          />
        );
      })}
    </ImageGalleryListStyled>
  );
};
