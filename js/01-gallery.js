import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainerEl = document.querySelector('.gallery');
const imagesMarkup = createGallery(galleryItems);
galleryContainerEl.insertAdjacentHTML('beforeend', imagesMarkup);

galleryContainerEl.addEventListener('click', onClick);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

let instance;

function onClick(e) {
  e.preventDefault();

  if (e.target.classList.contains('gallery')) {
    return;
  }

  instance = basicLightbox.create(`
      <img src="${e.target.dataset.source}" width="800" height="600">
  `);

  instance.show();
  onOpenModal();
}

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
}

function onEscKeyPress(event) {
  const ESC_KEY_PRESS = 'Escape';
  const isEscKey = event.code === ESC_KEY_PRESS;

  if (isEscKey) {
    onCloseModal();
    instance.close();
  }
}

console.log(galleryItems);
