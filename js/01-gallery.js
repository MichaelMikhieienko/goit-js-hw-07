import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

function createGalleryItemMarkup({ preview, original, description }) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
      </a>
    </li>
  `;
}

const galleryMarkup = galleryItems.map(createGalleryItemMarkup).join('');
galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

galleryRef.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();
  
  const target = event.target;
  if (target.nodeName !== 'IMG') {
    return;
  }
  
  const originalImageSrc = target.dataset.source;
  
  const instance = basicLightbox.create(`
    <img src="${originalImageSrc}" width="800" height="600" alt="Image">
  `);
  
  instance.show();
}
