window.onload = function(){
  let effectArea = document.querySelector('.showEffect');
  let menuImg = document.querySelector('.menuImg');
  function showEffect(){
    menuImg.src = `images/${localStorage.selectingMenuForSearchingImage}.jpg`;
    setTimeout(()=>{
      location.href='index.html';
    },4000);
  }

  showEffect();

}
