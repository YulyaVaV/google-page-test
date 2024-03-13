document.addEventListener('DOMContentLoaded', function() {
  const luckyButton = document.querySelector('.lucky-button');
  const logoImg = document.querySelector('.main-logo');

  const previousImageSrc = '/images/google-logo.png'
  const newImageSrc = '/images/oddity-logo.svg';
  let currentImageSrc = previousImageSrc;

  function changeImage() {
    currentImageSrc = (currentImageSrc === newImageSrc) ? previousImageSrc : newImageSrc;
    logoImg.style.transform = 'scale(0)';

    setTimeout(() => {
      logoImg.src = currentImageSrc;
      logoImg.style.transform = 'scale(1)';
    }, 300);
  }

  luckyButton.addEventListener('click', changeImage);
});
