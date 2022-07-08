const elsMoreInfoButton = document.querySelectorAll(".js-more-info-button");
const elsDirector = document.querySelectorAll(".director");
const elsMoreInfo = document.querySelectorAll(".more-info");
const elsButtonIcon = document.querySelectorAll(".button-icon");

elsMoreInfoButton.forEach(function(item, index) {
  elsMoreInfoButton[index].addEventListener('click', function () {
    elsDirector[index].classList.toggle('dnone');
    elsMoreInfo[index].classList.toggle('dnone');
    elsMoreInfoButton[index].classList.toggle('rotate');
    elsButtonIcon[index].classList.toggle('rotate-img');
  })
})