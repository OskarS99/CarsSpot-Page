const buttons = document.querySelectorAll('.galleryButton');
const cars = document.querySelectorAll('.carsGallery');
const textButtons = document.querySelectorAll('.expandButton');
const carouselButtons = document.querySelectorAll('.carouselButton');
let previousIndex = 0;

function toggleContainers(indexToShow) {
  cars.forEach((car, index) => {
    index === indexToShow
      ? car.classList.remove('hidden')
      : car.classList.add('hidden');
  });
}

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    document
      .querySelector('.activeContainer')
      ?.classList.remove('activeContainer');
    button.classList.add('activeContainer');
    toggleContainers(index);
  });
});

function toggleExpandTexts(indexToExpand) {
  const expandTexts = document.querySelectorAll('.expandText');
  expandTexts.forEach((expandText, index) => {
    index === indexToExpand
      ? expandText.querySelector('span').classList.toggle('hidden')
      : null;
  });
}

textButtons.forEach((textButton, index) => {
  textButton.addEventListener('click', () => {
    const spanElement = textButton.querySelector('span');
    const imgElement = textButton.querySelector('img');
    imgElement.classList.toggle('rotate');
    spanElement.innerHTML === 'Rozwiń'
      ? (spanElement.innerHTML = 'Zwiń')
      : (spanElement.innerHTML = 'Rozwiń');
    toggleExpandTexts(index);
  });
});

carouselButtons.forEach((carouselButton, index) => {
  carouselButton.addEventListener('click', () => {
    document.querySelector('.activeDot')?.classList.remove('activeDot');
    carouselButton.classList.add('activeDot');
    const carouselContainer = document.querySelector('.carouselContainer');
    const containerWidth = carouselContainer.clientWidth;
    cars.forEach((car) => {
      if (index > previousIndex) {
        car.scrollLeft += containerWidth;
      } else if (index < previousIndex) {
        car.scrollLeft -= containerWidth;
      } else {
        none;
      }
    });
    previousIndex = index;
  });
});
