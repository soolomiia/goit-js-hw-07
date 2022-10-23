import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const divRef = document.querySelector(".gallery");
const addGallary = galleryCreate(galleryItems);
divRef.addEventListener("click", imageClick);
divRef.insertAdjacentHTML("afterbegin", addGallary);

function galleryCreate(items) {
  return items
    .map(
      ({
        preview,
        original,
        description,
      }) => `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`
    )
    .join("");
}

function imageClick(event) {
  event.preventDefault();
  let lightbox = new SimpleLightbox(".gallery a", {
    captionData: "alt",
    captionDelay: 250,
  });
  if (event.target.nodeName !== "IMG") {
    return;
  }
  lightbox.open();
}

function blockStandartAction(event) {
  event.preventDefault();
}
