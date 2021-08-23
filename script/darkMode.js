function onClickSliderRound() {
  console.log("CERTO");
  const wallpaper = document.getElementsByClassName("page-lading");
  wallpaper[0].classList.toggle('dark-mode')
  console.log(wallpaper)

  const spa = document.getElementById('titleleaked')
  spa.classList.toggle('dark-mode-title')

  const body = document.getElementById('body')
  body.classList.toggle('grey-mode')

  const texto = document.querySelectorAll('p')

  for (var i = 0; i <= texto.length; i++) {
    texto[i].classList.add('dark-mode-title-white')//fazer um for!
  }
  const divs = document.querySelectorAll('div')

  divs.map(divs.classList.add('dark-mode-title-white'))



};