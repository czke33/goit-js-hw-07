import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (item) =>
      `<li class="gallery_item">
      <a class="gallery__link" href=${item.original}>
      <img class="gallery__image" src=${item.preview} alt=${item.description
        .split(" ")
        .join("_")} /></a></li>`
  )
  .join(" ");

gallery.innerHTML = markup;

console.log(markup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
