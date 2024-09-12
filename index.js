const buttons = document.querySelectorAll('.galleryButton');
const cars = document.querySelectorAll('.carsGallery');

const textButtons = document.querySelectorAll('.expandButton');
const expandTexts = document.querySelectorAll('.expandText');

const carouselButtons = document.querySelectorAll('.carouselButton');
const carouselContainer = document.querySelector('.carouselContainer');
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
    document.querySelector('.active')?.classList.remove('active');
    button.classList.add('active');
    toggleContainers(index);
  });
});

function toggleExpandTexts(indexToExpand) {
  expandTexts.forEach((expandText, index) => {
    index === indexToExpand ? expandText.classList.toggle('h-[42px]') : null;
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
    const containerWidth = carouselContainer.clientWidth;
    console.log(previousIndex);
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
    console.log(previousIndex);
  });
});
