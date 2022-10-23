import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divRef = document.querySelector(".gallery");

function galleryCreate(items){
    return items
    .map((item) =>
    `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`)
  .join("") ;
}
const addGallary = galleryCreate(galleryItems);
divRef.innerHTML = addGallary;
divRef.addEventListener("click", imageClick);
function  imageClick(event){
    blockStandartAction(event);
    if (event.target.nodeName !== "IMG"){
        return
    }
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" heigth="600"> `);
    instance.show();
    divRef.addEventListener("keydown", (event) => {
        if (event.code === "Escape"){
            instance.close()
        }
    }
    )
}
function blockStandartAction(event){
    event.preventDefault()
}