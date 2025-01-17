import { carruselData } from "./carruselData.js";
import { firstLetterUppercase } from "./stringFormatter.js";

const slideTrack = document.querySelectorAll(".slide__track");

const slideTemplate = (data) => `
  <div class="slide">
    <div class="tag">${firstLetterUppercase(data.name)}</div>
    <img src="${data.src}" alt="${data.name}">
  </div>
`;

// const newcarruselData = carruselData.concat(carruselData);

const carruselCards = [...carruselData, ...carruselData]
  .map((data) => slideTemplate(data))
  .join("");

slideTrack.forEach((track) => {
  track.insertAdjacentHTML("beforeend", carruselCards);
})
