function onClickSliderRound() {
  console.log("CERTO");
  const wallpaper = document.getElementsByClassName("page-lading");
  wallpaper[0].classList.toggle('dark-mode')
  console.log(wallpaper)

  const spa = document.getElementById('titleleaked')
  spa.classList.toggle('dark-mode-title')

  const body = document.getElementById('body')
  body.classList.toggle('grey-mode')
};