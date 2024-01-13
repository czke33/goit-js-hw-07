import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (item) =>
      `<li class="gallery__item">
      <a class="gallery__link" href=${item.original}>
      <img class="gallery__image" src=${item.preview} data-source=${item.original} alt=${item.description}/></a>
      </li>`
  )

  .join("");

gallery.innerHTML = markup;

console.log(markup);

let pictureSelectCase;

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  /*if (event.target.nodeName !== "IMG") {
    return;
  }*/

  const modal = document.createElement("img");
  const newPic = document.createElement("img");
  newPic.src = event.target.getAttribute("data-source");
  modal.append(newPic);

  pictureSelectCase = basicLightbox.create(modal);
  pictureSelectCase.show();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    instance.close();
  }
});
