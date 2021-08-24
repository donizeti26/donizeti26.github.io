function onClickSliderRound() {
  console.log("CERTO");
  const wallpaper = document.getElementsByClassName("page-lading");
  wallpaper[0].classList.toggle('dark-mode');
  console.log(wallpaper);

  const spa = document.getElementById('titleleaked');
  spa.classList.toggle('dark-mode-title');

  const body = document.getElementById('body');
  body.classList.toggle('grey-mode');

  const rodape = document.getElementsByClassName('rodape');
  rodape[0].classList.toggle('dark-mode');


  const variavelp = document.querySelectorAll('p,h4,h1,li');
  for (var i = 0; i < variavelp.length; i++) {
    var item = variavelp[i];  // Calling myNodeList.item(i) isn't necessary in JavaScript
    item.classList.toggle('dark-mode-title-white');
  };



};