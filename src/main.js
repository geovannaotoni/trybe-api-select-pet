const randomDogBtn = document.getElementById('random-dog');
const randomCatBtn = document.getElementById('random-cat');
const surpriseBtn = document.getElementById('surprise');
const image = document.getElementById('image');

randomDogBtn.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
      image.src = data.message;
    });
});

randomCatBtn.addEventListener('click', () => {
  fetch('https://aws.random.cat/meow')
    .then((response) => response.json())
    .then((data) => {
      image.src = data.file;
    });
});
