const buttons = document.querySelectorAll('.galleryButton');
const cars = document.querySelectorAll('.carsGallery');

const textButtons = document.querySelectorAll('.expandButton');
const expandTexts = document.querySelectorAll('.expandText');

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
    index === indexToExpand ? expandText.classList.toggle('h-fit') : null;
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
