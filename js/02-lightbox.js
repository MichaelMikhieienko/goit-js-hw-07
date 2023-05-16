import { galleryItems } from './gallery-items.js';
// Change code below this line

function createGalleryMarkup(items) {
    return items
      .map(({ preview, original, description }) => {
        return `
              <li class="gallery__item">
                  <a class="gallery__link" href="${preview}">
                      <img class="gallery__image" src="${original}" alt="${description}" />
                  </a>
              </li>
            `;
      })
      .join('');
  }
  
  const galleryMarkup = createGalleryMarkup(galleryItems);
  
  const container = document.querySelector('.gallery');
  container.innerHTML = galleryMarkup;
  const gallery = new SimpleLightbox('.gallery li a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

console.log(galleryItems);
