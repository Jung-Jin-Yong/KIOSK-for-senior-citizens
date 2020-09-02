window.onload = function(){
  let effectArea = document.querySelector('.showEffect');

  function showEffect(){
    setTimeout(()=>{
      location.href='index.html';
    },4000);
  }

  showEffect();

}
